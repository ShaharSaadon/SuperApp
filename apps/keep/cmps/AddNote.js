import { noteService } from "../services/note.service.js"
import AddNoteActions from './AddNoteActions.js'

export default {
    template: `
        <section class="add-note">
            <button @click="save">a</button>

                <div class="note-inputs">
                    <textarea @input="resize()" 
                        ref="textarea" 
                        class="note-input-title" 
                        v-model="note.info.title" 
                        placeholder="Title">
                    </textarea>
            
                
            <!-- Add Text Inputs Start -->
                    <textarea 
                    v-if="type==='NoteTxt'"
                        @input="resize()" 
                        ref="textarea" 
                        class="note-input-txt" 
                        v-model="note.info.txt" 
                        placeholder="Take a note...">
                    </textarea>
            <!-- Add Text Inputs End -->

            <!-- Add Img Inputs Start -->
                    <textarea 
                    v-if="type==='NoteImg'"
                        @input="resize()" 
                        ref="textarea" 
                        class="note-input-txt" 
                        v-model="note.info.iUrl" 
                        placeholder="Enter Image Url...">
                    </textarea>
            <!-- Add Img Inputs End -->

            <!-- Add Video Inputs Start -->
                    <textarea 
                    v-if="type==='NoteVideo'"
                        @input="resize()" 
                        ref="textarea" 
                        class="note-input-txt" 
                        v-model="note.info.vUrl" 
                        placeholder="Enter Video Url from YouTube...">
                    </textarea>
                 
            <!-- Add Img Inputs End -->

            <!-- Add Video Inputs Start -->
                    <input type="text" 
                        v-if="type==='NoteTodos'"
                        @input="resize()" 
                        ref="textarea" 
                        class="note-input-txt" 
                        v-model="note.info.todos.txt"
                        placeholder="List item">

            <!-- Add Img Inputs End -->

            <!-- Add Audio Inputs Start -->
                    <input type="text" 
                        v-if="type==='NoteAudio'"
                        @input="resize()" 
                        ref="textarea" 
                        class="note-input-txt" 
                        v-model="note.info.aUrl"
                        placeholder="Enter Audio Url...">

            <!-- Add Img Inputs End -->
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
    },
    watch: {
        type() {
            this.loadNote(this.type)
        }
    },
    components: {
        AddNoteActions
    }

}