export default {
    props: [],
    template: `
                   <div class="note-actions">
                <button @click="save">add Note</button>
                <input type="color" v-model ="note.style.backgroundColor">    
                <input type="checkbox" v-model="note.isPinned">    
            </div> 
    `,
    data() {
        return {
        }
    },
    methods: {
        onSave() {
       
        },
    },
    computed: {

    }
}
