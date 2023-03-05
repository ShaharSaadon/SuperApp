export default {
    name: 'NoteFilter',
    template: `
            <input type="text" v-model="keyWord" class="search-box" placeholder="Search Note...">
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