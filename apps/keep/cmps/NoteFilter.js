export default {
    template: `
        <section class="note-filter">
            <input type="text" v-model="keyWord">
        </section>
    `,data() {
        return {
            keyWord: ''
        }
    },
    watch: {
        keyWord() {
            this.$emit('filter',this.keyWord)},
    },
}