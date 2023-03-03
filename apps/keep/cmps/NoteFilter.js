export default {
    template: `
        <section class="note-filter">
            <input type="text" v-model="keyWord" class="search-box">
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