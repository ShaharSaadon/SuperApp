import { noteService } from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import AddNote from '../cmps/AddNote.js'
import NoteList from '../cmps/NoteList.js'
import NoteEdit from '../cmps/NoteEdit.js'
import NoteFilter from '../cmps/NoteFilter.js'
import LabelPicker from '../cmps/LabelPicker.js'
import UploadImage from '../cmps/UploadImage.js'
import { utilService } from '../../../services/util.service.js'



export default {
    name: 'Note Index',
    template: `
        <AddNote @saveNote="saveNote"/>
        <NoteFilter @filter="setFilterBy"/>
        <LabelPicker :note="currNote" @saveNote="saveNote"/>
        <div>
        <button @click="filterBy.type=''">All</button>
        <button @click="filterBy.type='NoteTxt'">Text</button>
        <button @click="filterBy.type='NoteImg'">Image</button>
        <button @click="filterBy.type='NoteTodos'">List</button>
        <button @click="filterBy.type='NoteVideo'">video</button>
        </div>
        <router-view 
        @save="saveNote" 
        @duplicate="duplicateNote"
        @remove="removeNote" >
    </router-view>

        <h4 v-if="pinnedNotes.length">pinned</h4>
        <NoteList
        :notes="pinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"
        @edit="editNote"
        @duplicate="duplicateNote"
        @addLabel="addLabel"/>

        <h4 class="others" v-if="unpinnedNotes.length">others</h4>
        <NoteList
        :notes="unpinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"
        @edit="editNote"
        @duplicate="duplicateNote"
        />

        
    `,
    data() {
        return {
            notes: null,
            filterBy: {txt:'',type:''},
            currNote: null,
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
            console.log('Sved!')
            noteService.save(note)
                .then(savedNote => {
                    console.log('savedNote=', savedNote)
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
            this.currNote=note
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
            console.log(this.filterBy)
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
                console.log(notes);
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
        UploadImage,
    }
}
