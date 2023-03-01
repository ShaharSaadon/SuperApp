export default {
    props: ['info'],
    template: `

<textarea v-model="info.txt" @input="resize()"  ref="textarea"></textarea>
        
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
        resize() {
            let element = this.$refs["textarea"];
            element.style.height = "max-content";
            element.style.height = element.scrollHeight + "px";
        },
    },
  
}

