import { noteService } from "../services/note.service.js"

export default {
    template: `
        <section class="add-note">
            <h2>Add a Note</h2>
                <input type="text" v-model="note.info.title" placeholder="Title">
                <input type="text" v-model="note.info.txt" placeholder="Take a note...">
                <button @click="save">add Note</button>
                <input type="color" v-model ="note.style.backgroundColor">    
                <input type="checkbox" v-model="note.isPinned">    

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
        }
    }
}