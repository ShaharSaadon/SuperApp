import {noteService} from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import NoteTxt from '../cmps/NoteTxt.js'
import NoteList from '../cmps/NoteList.js'



export default {
    name: 'Note Index',
	template: `
        <NoteList 
        :notes="notes"
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
                    showSuccessMsg('Book Removed Succeed')
                }).catch(err => {
                    showErrorMsg('Book Removed Failed')
                })
        },
        saveNote(noteId) {
            noteService.save(noteId)
              
        },
    },
    created() {
        noteService.query()
            .then(notes => {
                console.log(notes);
                this.notes = notes
            })

    },
    components:{
        NoteList,
    }
}
