export default {
        name: 'NoteActions',
        props: ['note'],
        template: `
            <div class="note-actions">
                <input id="color-picker" type="color" v-model ="note.style.backgroundColor" class="btn btn-color" @input="onSave" placeholder="shahar" >    
                <label for="color-picker"><i class="fa-solid fa-palette" type="color"></i></label>
                <i class="fa-solid fa-thumbtack" @click="pin"></i>
                <i class="fa-solid fa-copy" @click="duplicateNote"></i>
                <i class="fa-solid fa-tag" @click="addLabel"></i>
                <i class="fa-solid fa-trash-can" @click="removeNote"></i>

  
            </div> 
        
    `,
        data() {
                return {
                }
        },
        methods: {
                pin() {
                        this.note.isPinned = !this.note.isPinned
                        this.onSave()
                },
                onSave() {
                        this.$emit('saveNote', this.note)
                },
                removeNote() {
                        this.$emit('removeNote', this.note.id)
                },
                duplicateNote() {
                        this.$emit('duplicateNote', this.note.id)
                },
                addLabel() {
                        this.$emit('addLabel', this.note)
                },

        },
        computed: {

        }
}
