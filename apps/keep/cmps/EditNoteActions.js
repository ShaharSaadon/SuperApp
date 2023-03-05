export default {
    props: ['note'],
    template: `
            <div class="note-actions-edit">
                <div class="btns-edit">
            <input id="color-picker" type="color" v-model ="note.style.backgroundColor" class="btn btn-color" @input="onSave" >    
                <label for="color-picker"><i class="fa-solid fa-palette" type="color"></i></label> 
                <i class="fa-solid fa-thumbtack" @click="pin"></i>
                <i class="fa-solid fa-trash-can" @click="removeNote(note.id)"></i>
                <i class="fa-solid fa-copy" @click="duplicateNote(note.id)"></i>
                <i class="fa-solid fa-tag" @click="addLabel"></i>
                </div>
            </div> 
            <div class="close-area-btn">
            <button @click="closeModal" class="btn-close">close</button>
            </div>
    `,
    data() {
        return {
        }
    },
    methods: {
        onSave() {
            console.log(this.note)
            this.$emit('saveNote', this.note)
        },
        removeNote(noteId) {
            this.$emit('removeNote', noteId)
            this.$router.push(`/notes/`)
        },
        closeModal() {
            this.onSave()
            this.$router.push(`/notes/`)
        },
        pin() {
            this.note.isPinned = !this.note.isPinned
            this.onSave()
        },
        duplicateNote(noteId) {
            this.$emit('duplicateNote', noteId)
        },
        addLabel() {
            this.$emit('addLabel', this.note)
        },
    },
    computed: {

    }
}
