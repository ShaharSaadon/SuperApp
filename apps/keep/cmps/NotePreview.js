import NoteActions from "./NoteActions.js"
import NoteTxt from "./NoteTxt.js"
import NoteImg from "./NoteImg.js"
import NoteVideo from "./NoteVideo.js"
import NoteTodos from "./NoteTodos.js"
import NoteAudio from "./NoteAudio.js"

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
                        @duplicateNote="duplicateNote(noteId)"/>
                    
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