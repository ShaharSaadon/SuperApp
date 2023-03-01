import NotePreview from './NotePreview.js'
import NoteTxt from './NoteTxt.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
        <div v-for="(note,idx) in notes" class="note">
                <NotePreview :note="note"
                @removeNote="remove" />
                
                </div>
        </section>

       

    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        save(note) {
            console.log(note)
            this.$emit('save', note)
        },
        editNote(noteId) {
            this.$router.push('/books' + noteId)

        },
      
    },
    components: {
        NotePreview,
        NoteTxt,
    }
}