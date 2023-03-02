import { noteService } from "../services/note.service.js"
import AddNoteActions from './AddNoteActions.js'

export default {
    template: `
        <section class="add-note">
            <div class="note-inputs">
                <textarea @input="resize()" ref="textarea" class="note-input-title" v-model="note.info.title" placeholder="Title"></textarea>
                <textarea @input="resize()" ref="textarea" class="note-input-txt" v-model="note.info.txt" placeholder="Take a note..."></textarea>
                </div>
            </div>
            <div class="note-type">
            <i class="fa-solid fa-font"></i>
            <i class="fa-regular fa-image"></i>
            <i class="fa-brands fa-youtube"></i>
            <i class="fa-solid fa-list"></i>
            <i class="fa-solid fa-microphone"></i>
    `,
    data() {
        return {
            note: noteService.getNewNote()  
        }
    },
    methods: {
        save() {
            this.$emit('saveNote',this.note)
            this.note=noteService.getNewNote()
        },
        resize() {
            let element = this.$refs["textarea"];

            element.style.height = "18px";
            element.style.height = element.scrollHeight + "px";
        },
        
    },
    components:{
        AddNoteActions
    }

}