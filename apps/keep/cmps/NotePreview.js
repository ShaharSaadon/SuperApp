import NoteTxt from "./NoteTxt.js"
export default {
    props: ['note'],
    template: `
        <article class="note-preview">
            <component 
                        :is="note.type"  
                        :info="note.info" 
                        @onSetNote="setNote($event,idx)"
                        @saveNote="save(note)"
                        :style="note.style"
                        />
            <!-- tools -->
            <button @click="removeNote(note.id)">x</button>
        </article>
    `,methods: {
              removeNote(noteId) {
                this.$emit('removeNote', noteId)
            },
            save(note) {
                console.log(note)
                this.$emit('save', note)
            },
    },
    components: {
        NoteTxt
    }
}