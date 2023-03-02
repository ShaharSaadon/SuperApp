import { noteService } from "../services/note.service.js"
import EditNoteActions from "../cmps/EditNoteActions.js"


export default {
    template: `

    <section class="edit-note modal" v-bind:style="{ display: showModal ? 'block' : 'none' }">
            <div class="note-inputs modal-content" v-if="note" :style="note.style"  >
            <textarea v-if="note" 
                :style="note.style" 
                @input="resize()" 
                ref="textarea" 
                class="note-input-title" 
                v-model="note.info.title" 
                placeholder="Title">
            </textarea>
                
            <iframe v-if="note.info.vUrl"
                :src="note.info.vUrl" 
                height="200" 
                width="100%" 
                title="Iframe Example">
            </iframe>

            <img v-if="note.info.iUrl" :src="note.info.iUrl">
                
        <textarea v-if="note" 
            :style="note.style" 
            @input="resize()" 
            ref="textarea" 
            class="note-input-txt" 
            v-model="note.info.txt" 
            placeholder="Take a note...">
        </textarea> 

        {{lastEdit}}

                <EditNoteActions 
                v-if="note" 
                :note="note" 
                @saveNote="save"
                @duplicateNote="duplicateNote"
                @removeNote="removeNote"/>
            </div>
            </section>  
    `,
    data() {
        return {
            note: null,
            showModal: true,
        }
    },
    methods: {
        closeModal() {
            this.showModal=false
            this.$router.push(`/notes/`)

        },
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "18px";
            element.style.height = element.scrollHeight + "px";
        },
        save(note) {
            note.lastEdit = Date.now()
            this.$emit('save', note)
        },
        duplicateNote(noteId) {
            this.$emit('duplicate', noteId)
        },
        removeNote(noteId) {
            this.$emit('remove', noteId)
        },
      
    },
    computed:{
        lastEdit(){
            return this.note.lastEdit
        }

    },
    components: {
        EditNoteActions,
    },
    created(){
        const {noteId} = this.$route.params
        if (noteId) {
            noteService.get(noteId)
                .then(note => this.note = note)
        }
    },
    
}