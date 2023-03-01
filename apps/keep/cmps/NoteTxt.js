export default {
    props: ['info'],
    template: `



    <input type="text" v-model="this.info.txt" @input="onSave"> 
        
    `,
    data() {
        return {
            txt: this.info.txt
        }
    },
    methods: {
        onSave() {
            this.$emit('saveNote')
        },
    },
    computed:{

    }
}

