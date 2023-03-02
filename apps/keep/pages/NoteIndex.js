import { noteService } from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import AddNote from '../cmps/AddNote.js'
import NoteList from '../cmps/NoteList.js'
import NoteEdit from '../cmps/NoteEdit.js'
import NoteFilter from '../cmps/NoteFilter.js'
import { utilService } from '../../../services/util.service.js'



export default {
    name: 'Note Index',
    template: `
        <AddNote @saveNote="saveNote"/>
        <NoteFilter @filter="setFilterBy"/>
        <router-view @save="saveNote"></router-view>

        <h4 v-if="pinnedNotes.length">pinned</h4>
        <NoteList
        :notes="pinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"
        @edit="editNote"
        @duplicate="duplicateNote"/>

        <h4 class="others">others</h4>
        <NoteList
        :notes="unpinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"
        @edit="editNote"/>

        
    `,
    data() {
        return {
            notes: null,
            filterBy: '',
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
            this.filterBy = filterBy
        },
        duplicateNote(noteId){
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
            return this.notes
            // .filter(note=> note.info.txt.includes(this.filterBy) || note.info.title.includes(this.filterBy))
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
        NoteFilter
    }
}
