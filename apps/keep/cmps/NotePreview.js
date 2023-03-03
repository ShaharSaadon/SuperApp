import NoteActions from "./NoteActions.js"
import NoteTxt from "./NoteTypes/NoteTxt.js"
import NoteImg from "./NoteTypes/NoteImg.js"
import NoteVideo from "./NoteTypes/NoteVideo.js"
import NoteTodos from "./NoteTypes/NoteTodos.js"
import NoteAudio from "./NoteTypes/NoteAudio.js"

export default {
    props: ['note'],
    template: `
        <article class="note-preview" @mouseover="isHover=true" @mouseleave="isHover=false">
            
            <component 
                        
                        :is="note.type"  
                        :info="note.info" 
                        @onSetNote="setNote($event,idx)"
                        @saveNote="save(note)"
                        :style="note.style"/>

                        <NoteActions 
                        v-if:="isHover" 
                        :note="note" 
                        @saveNote="save" 
                        @removeNote="removeNote" 
                        @click="prevent"
                        @duplicateNote="duplicateNote(noteId)"
                        @addLabel="addLabel"/>
                    
        </article>
    `,
    data() {
        return {
            isHover: false
        }
    },  
    methods: {
              removeNote(noteId) {
                this.$emit('removeNote', noteId)
            },
            save(note) {
                console.log(note)
                this.$emit('save', note)
            },
            duplicateNote(noteId) {
                this.$emit('duplicate', noteId)
            },
            addLabel(note) {
                this.$emit('addLabel', note)
            },
            prevent(e) {
                e.stopPropagation()
            },
           
    },
    components: {
        NoteTxt,
        NoteImg,
        NoteVideo,
        NoteTodos,
        NoteAudio,
        NoteActions,
    }
}