export default {
    props: ['note'],
    template: `
            <div class="note-actions">
                <input type="color" v-model ="note.style.backgroundColor" class="btn btn-color" @input="onSave">    
                <input type="checkbox" v-model="note.isPinned" class="btn btn-pin" @change="onSave">  
                <button @click="removeNote(note.id)">X</button>
                <button @click="duplicateNote(note.id)">+</button>
  
            </div> 
    `,
    data() {
        return {
        }
    },
    methods: {
        onSave() {
                this.$emit('saveNote',this.note)
        },
        removeNote(noteId) {
                this.$emit('removeNote',noteId)
        },
        duplicateNote(noteId) {
                this.$emit('duplicateNote',noteId)
        },
    },
    computed: {

    }
}
