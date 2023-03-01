import { noteService } from "../services/note.service.js"


export default {
    template: `
    <pre>
    <!-- {{note}} -->
    </pre>
    <section class="edit-note modal" v-bind:style="{ display: showModal ? 'block' : 'none' }">
            <div class="note-inputs modal-content" >
                 <textarea v-if="note" @input="resize()" ref="textarea" class="note-input-title" v-model="note.info.title" placeholder="Title"></textarea>
                <textarea v-if="note" @input="resize()" ref="textarea" class="note-input-txt" v-model="note.info.txt" placeholder="Take a note..."></textarea> -->
                hello mi amor
                <button @click="closeModal">x</button>
                <!-- <AddNoteActions :note="note" @addNote="save"/> -->
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
        save() {
        },
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "18px";
            element.style.height = element.scrollHeight + "px";
        },
      
    },
    components: {
    
    },
    computed: {
        noteId  () {
            return this.$route.params.carId
        }
    },
    created(){
        const {noteId} = this.$route.params
        if (noteId) {
            noteService.get(noteId)
                .then(note => this.note = note)
        }
    },
    
}