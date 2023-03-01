import NotePreview from './NotePreview.js'
import NoteTxt from './NoteTxt.js'
import NoteEdit from './NoteEdit.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
        <div v-for="(note,idx) in notes" class="note">
                <NotePreview :note="note"
                @removeNote="remove"
                @save="save"
                @click="edit(note.id)" />

                </div>

        </section>

       

    `,
    methods: {
        remove(noteId) {
            this.$emit('remove', noteId)
        },
        save(note) {
            this.$emit('save', note)
        },
        edit(noteId) {
            this.$emit('edit',noteId)
        },
      
      
    },
    components: {
        NotePreview,
        NoteTxt,
    },

    
}