export default {
    props: ['note'],
    template: `
            <div class="add-note-actions">
                <input type="color" v-model ="note.style.backgroundColor" class="btn btn-color">    
                <input type="checkbox" v-model="note.isPinned" class="btn btn-pin">  
                <button @click="saveNote(note)">add</button>
  
            </div> 
    `,
    data() {
        return {
        }
    },
    methods: {
        saveNote(note) {
                this.$emit('saveNote', note)
        },
    },
    computed: {

    }
}
