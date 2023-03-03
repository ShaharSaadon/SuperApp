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

            <audio controls v-if="note.info.aUrl">
            <source :src="note.info.aUrl" type="audio/mpeg">
            </audio> 

        <textarea v-if="note" 
            :style="note.style" 
            @input="resize()" 
            ref="textarea" 
            class="note-input-txt" 
            v-model="note.info.txt" 
            placeholder="Take a note...">
        </textarea> 

        <p class="last-edit" :title="'Created At ' + new Date(note.createdAt)">{{lastEdit}}</p>

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
            this.showModal = false
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
    computed: {
        lastEdit() { 
            if(!this.note.lastEdit) return
            let date = new Date(this.note.lastEdit)
            
            var fullYear = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()

            var hour = date.getHours()
            var minutes = date.getMinutes()

            var formattedTime = 'Last Edited: ' + day + '\/' + month + '\/' + fullYear
            formattedTime += ' At: ' + hour + ':' + minutes
            return formattedTime
        }

    },
    components: {
        EditNoteActions,
    },
    created() {
        const { noteId } = this.$route.params
        if (noteId) {
            noteService.get(noteId)
                .then(note => this.note = note)
        }
    },

}