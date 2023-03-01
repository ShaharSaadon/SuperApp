import { noteService } from "../services/note.service.js"


export default {
    template: `
        <section class="add-note">
            <div class="note-inputs">
                <textarea class="note-input-title" v-model="note.info.title" placeholder="Title"></textarea>
                <textarea class="note-input-txt" v-model="note.info.txt" placeholder="Take a note..."></textarea>
            </div>
 
            </section>  
    `,
    data() {
        return {
            note: noteService.getNewNote()
        }
    },
    methods: {
        save() {
            noteService.save(this.note)
            this.$emit('addNote')
        },
        
    }

}