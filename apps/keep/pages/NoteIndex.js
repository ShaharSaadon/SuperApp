import { noteService } from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import AddNote from '../cmps/AddNote.js'
import NoteList from '../cmps/NoteList.js'
import NoteEdit from '../cmps/NoteEdit.js'
import NoteFilter from '../cmps/NoteFilter.js'
import LabelPicker from '../cmps/LabelPicker.js'
import { utilService } from '../../../services/util.service.js'
import NoteSideBar from '../cmps/NoteSideBar.js'




export default {
    name: 'Note Index',
    template: `
       

    <div class="note-header flex align-center justify-between">
                <button @click="toggleSideBar" class="toggle-sideBar-btn flex align-center justify-center">☰</button>
                <div class="keep-logo">
                <img src="./assets/img/google-keep.png">
                <span>Keep</span>
                </div>
                <NoteFilter @filter="setFilterBy"/>
    </div>

        <NoteSideBar :isSideBarExtend="isSideBarExtend" @setFilterBy="setFilterByType"/>
        <LabelPicker :note="currNote" @saveNote="saveNote" v-if="showLabel" @hideLabelPicker="hideLabelPicker"/>

        <AddNote @saveNote="saveNote"/>

                            <!-- Edit Note Start -->

        <router-view 
            @save="saveNote" 
            @duplicate="duplicateNote"
            @remove="removeNote" 
            @addLabel="addLabel">
        </router-view>

                            <!-- Edit Note End -->

    <div class="notes-container">
        
        <h4 v-if="pinnedNotes.length" class="note-mode">pinned</h4>
        
        <NoteList
            :notes="pinnedNotes"
            @remove="removeNote" 
            @save= "saveNote"
            @edit="editNote"
            @duplicate="duplicateNote"
            @addLabel="addLabel"/>

        <h4 class="others" v-if="unpinnedNotes.length" class="note-mode">others</h4>
        
        <NoteList
        :notes="unpinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"
        @edit="editNote"
        @duplicate="duplicateNote"
        @addLabel="addLabel"
        />
    </div>
    `,
    data() {
        return {
            notes: null,
            filterBy: {txt:'',type:''},
            currNote: null,
            showLabel: false,
            isSideBarExtend: false

        }
    },
    methods: {
        removeNote(noteId) {
            noteService.remove(noteId)
                .then(() => {
                    const idx = this.notes.findIndex(note => note.id === noteId)
                    this.notes.splice(idx, 1)
                    showSuccessMsg('Note Removed Succeed')
                }).catch(err => {
                    showErrorMsg('Note Removed Failed')
                })
        },
        saveNote(note) {
            noteService.save(note)
                .then(savedNote => {
                })
                .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
        },
        editNote(noteId) {
            this.$router.push(`/notes/editor/${noteId}`)
        },
        setFilterBy(filterBy) {
            this.filterBy.txt = filterBy
        },
        duplicateNote(noteId){
            console.log(noteId)
            let newNote 
             noteService.get(noteId)
             .then(res=>{
                newNote={...res}
                newNote.id=null
                noteService.save(newNote)
                    .then(() => {
                    noteService.query()
                        .then(notes => this.notes = notes)
                })
         
            })
        },
        addLabel(note){
            this.showLabel=true
            this.currNote=note
        },
        hideLabelPicker(){
            this.showLabel=!this.showLabel
        },
        toggleSideBar() {
            this.isSideBarExtend = !this.isSideBarExtend
          },
          setFilterByType(filterByType){
            this.filterBy.type=filterByType
          }

    },
    computed: {
        pinnedNotes() {

            return this.filteredNotes.filter(note => note.isPinned)
        },
        unpinnedNotes() {
            return this.filteredNotes.filter(note => !note.isPinned)

        },
        filteredNotes() {
            if (!this.notes) return []
            if(!this.filterBy.type){
            return this.notes
            .filter(note=> note.info.txt.includes(this.filterBy.txt) || note.info.title.includes(this.filterBy.txt))
            } else {
                return this.notes.filter(note=> note.info.txt.includes(this.filterBy.txt)
                 || note.info.title.includes(this.filterBy.txt))
                 .filter(note=>note.type===this.filterBy.type)

            }
        }

    },
    created() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })

    }, mounted() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    components: {
        NoteList,
        AddNote,
        NoteEdit,
        LabelPicker,
        NoteFilter,
        NoteSideBar,
    }
}
