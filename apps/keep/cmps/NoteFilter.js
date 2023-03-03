export default {
    template: `
            <input type="text" v-model="keyWord" class="search-box">
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