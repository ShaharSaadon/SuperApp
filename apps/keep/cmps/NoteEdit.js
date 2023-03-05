import { noteService } from "../services/note.service.js"
import EditNoteActions from "../cmps/EditNoteActions.js"
import VideoEdit from "../cmps/NoteEdits/VideoEdit.js"
import ImageEdit from "../cmps/NoteEdits/ImageEdit.js"
import AudioEdit from "../cmps/NoteEdits/AudioEdit.js"
import TodosEdit from "../cmps/NoteEdits/TodosEdit.js"
import TitleEdit from "../cmps/NoteEdits/TitleEdit.js"
import TxtEdit from "../cmps/NoteEdits/TxtEdit.js"


export default {
    name: 'NoteEdit',
    template: `

    <section class="edit-note modal" v-bind:style="{ display: showModal ? 'block' : 'none' }">
            <div class="note-inputs modal-content" v-if="note" :style="note.style"  >

            <!-- Title Edit -->
         
                
            <TitleEdit :info=note.info v-if="note" :style="note.style"/>

            <VideoEdit :info=note.info v-if="note.info.vUrl"/>

            <ImageEdit :info=note.info v-if="note.info.iUrl"/>

            <AudioEdit :info=note.info v-if="note.info.aUrl"/>

            <TodosEdit :info="note.info" v-if="note.info.todos"/>

            <TxtEdit :info=note.info v-if="note" :style="note.style"/>


            <ul class="flex clean-list label-list" >
    <li v-for="label in note.info.labels" :style="label.style" class="note-label">
        <span  @mouseover="mouseOn=true" @mouseleave="mouseOn=false">{{label.labelType}}</span>
        <span class="delete-label" v-if="mouseOn" @click="deleteLabel">x</span>
    </li>
</ul>

<p class="last-edit" :title="'Created At ' + new Date(note.createdAt)">{{lastEdit}}</p>

    


                <EditNoteActions 
                v-if="note" 
                :note="note" 
                @saveNote="save"
                @duplicateNote="duplicateNote"
                @removeNote="removeNote"
                @addLabel="addLabel"/>
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
        addLabel(note) {
            this.$emit('addLabel', note)
        },


    },
    computed: {
        lastEdit() {
            if (!this.note.lastEdit) return
            let date = new Date(this.note.lastEdit)

            var fullYear = date.getFullYear()
            var month = date.getMonth() + 1
            var day = date.getDate()

            var hour = date.getHours()
            var minutes = date.getMinutes()

            var formattedTime = 'Last Edited: ' + day + '\/' + month + '\/' + fullYear
            formattedTime += ' At: ' + hour + ':' + minutes + ((minutes % 10 === 0) ? '0' : '')
            return formattedTime
        }

    },
    components: {
        EditNoteActions,
        VideoEdit,
        ImageEdit,
        AudioEdit,
        TodosEdit,
        TitleEdit,
        TxtEdit,
    },
    created() {
        const { noteId } = this.$route.params
        if (noteId) {
            noteService.get(noteId)
                .then(note => this.note = note)
        }
    },

}