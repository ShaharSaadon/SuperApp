export default {
    props: ['note'],
    template: `
            <div class="add-note-actions">
                <input type="color" v-model ="note.style.backgroundColor" class="btn btn-color">    
                <input type="checkbox" v-model="note.isPinned" class="btn btn-pin">  
                <button @click="addNote(note)">add</button>
  
            </div> 
    `,
    data() {
        return {
        }
    },
    methods: {
        addNote(note) {
                this.$emit('addNote', note)
        },
    },
    computed: {

    }
}
