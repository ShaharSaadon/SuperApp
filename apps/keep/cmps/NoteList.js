import NotePreview from './NotePreview.js'

export default {
    props: ['notes'],
    template: `
        <section class="note-list">
        <div v-for="(note,idx) in notes" class="note" :key="note.id">
                <NotePreview :note="note"
                @removeNote="remove"
                @save="save"
                @duplicate="duplicate(note.id)"
                @click="edit(note.id)" 
                @addLabel="addLabel"/>

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
            this.$emit('edit', noteId)
        },
        duplicate(noteId) {
            this.$emit('duplicate', noteId)
        },
        addLabel(note) {
            this.$emit('addLabel', note)
        },


    },
    components: {
        NotePreview,
    },


}