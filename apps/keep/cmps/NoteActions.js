export default {
    props: ['note'],
    template: `
            <div class="note-actions">
                <input type="color" v-model ="note.style.backgroundColor" class="btn btn-color" @input="onSave" placeholder="shahar" >    
                <label><i class="fa-solid fa-palette" type="color"></i></label>
                <i class="fa-solid fa-thumbtack" @click="pin"></i>
                <i class="fa-solid fa-copy" @click="duplicateNote"></i>
                <i class="fa-solid fa-trash-can" @click="removeNote"></i>
  
            </div> 
        
    `,
    data() {
        return {
        }
    },
    methods: {
        pin() {
        this.note.isPinned=!this.note.isPinned   
        this.onSave()  
        },
        onSave() {
                this.$emit('saveNote',this.note)
        },
        removeNote() {
                this.$emit('removeNote',this.note.id)
        },
        duplicateNote() {
                this.$emit('duplicateNote',this.note.id)
        },
      
    },
    computed: {

    }
}
