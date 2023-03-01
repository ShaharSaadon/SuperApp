import {noteService} from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import AddNote from '../cmps/AddNote.js'
import NoteList from '../cmps/NoteList.js'



export default {
    name: 'Note Index',
	template: `
    
        <AddNote @addNote="saveNote"/>
        <NoteList
        :notes="pinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"/>

        <NoteList
        :notes="unpinnedNotes"
        @remove="removeNote" 
        @save= "saveNote"/>
    `,
    data(){
        return{
            notes: null,
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
                console.log('savedNote=',savedNote)
            })
            .then(()=>{
                noteService.query()
                .then(notes=>this.notes=notes)
            })
        },

    },
    computed: {
        pinnedNotes(){
            
            return this.filteredNotes.filter(note => note.isPinned)
        },
        unpinnedNotes(){
            return this.filteredNotes.filter(note => !note.isPinned)

        },
        filteredNotes(){
            if(!this.notes) return []
            return this.notes
        }

    },
    created() {
        noteService.query()
            .then(notes => {
                console.log(notes);
                this.notes = notes
            })

    },  mounted() {
        noteService.query()
            .then(notes => {
                this.notes = notes
            })
    },
    components:{
        NoteList,
        AddNote,
    }
}
