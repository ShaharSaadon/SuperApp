import { noteService } from "../services/note.service.js"
import AddNoteTxt from '../cmps/NoteAdds/AddNoteTxt.js'
import AddNoteImg from '../cmps/NoteAdds/AddNoteImg.js'
import AddNoteVideo from '../cmps/NoteAdds/AddNoteVideo.js'
import AddNoteAudio from '../cmps/NoteAdds/AddNoteAudio.js'
import AddTitle from '../cmps/NoteAdds/AddTitle.js'
import AddTodosNote from '../cmps/NoteAdds/AddTodosNote.js'

export default {
    template: `
        <section class="add-note">
            
            <button @click="save" v-if="note.info.title">a</button>

            <div class="note-inputs">

            <AddTitle :info="note.info"/>        
                   
            <AddNoteTxt :info="note.info" v-if="type==='NoteTxt'"/>

            <AddNoteImg :info="note.info" v-if="type==='NoteImg'" @updateInfo="updateInfo"/> 
            
            <AddNoteVideo :info="note.info" v-if="type==='NoteVideo'" @updateInfo="updateInfo"/>

            <AddNoteAudio :info="note.info" v-if="type==='NoteAudio'" @updateInfo="updateInfo"/> 
            
            <AddTodosNote :info="note.info" v-if="type==='NoteTodos'"/> 
                                                          
            </div>

            
            <div class="note-type">
                <i class="fa-solid fa-font" @click="type='NoteTxt'"></i>
                <i class="fa-regular fa-image" @click="type='NoteImg'"></i>
                <i class="fa-brands fa-youtube" @click="type='NoteVideo'"></i>
                <i class="fa-solid fa-list" @click="type='NoteTodos'"></i>
                <i class="fa-solid fa-microphone" @click="type='NoteAudio'"></i>
            </div>

    `,
    data() {
        return {
            note: null,
            type: 'NoteTxt',
        }
    },
    created() {
        this.loadNote()
    },
    methods: {
        loadNote() {
            this.note = noteService.getNewNote(this.type)
            console.log('note changed!')
            console.log(this.note)
        },
        save() {
            this.$emit('saveNote', this.note)
            this.note = noteService.getNewNote(this.type)
        },
        resize() {
            let element = this.$refs["textarea"];

            element.style.height = "18px";
            element.style.height = element.scrollHeight + "px";
        },
        updateInfo(info){
            this.note.info = info
            this.save()
        }
    },
    watch: {
        type() {
            this.loadNote(this.type)
        }
    },
    components: {
        AddTitle,
        AddNoteTxt,
        AddNoteImg,
        AddNoteVideo,
        AddNoteAudio,
        AddTodosNote,
    }

}