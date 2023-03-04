import BookPreview from './BookPreview.js'

export default {
    props: ['books'],
    template: `
        <section class="book-list">
            <ul class="clean-list">
                <li v-for="book in books" :key="book.id">
                    <BookPreview :book="book"/>
                    <RouterLink class="edit-btn" :to="'/books/edit/' + book.id">Edit</RouterLink> 
                    <RouterLink class="details-btn" :to="'/books/' + book.id">Details</RouterLink> 
                    <button class="remove-btn" @click="remove(book.id)">x</button>
        

                </li>
            </ul>
        </section>
    `,
    methods: {
        remove(bookId) {
            this.$emit('remove', bookId)
        },
        showDetails(bookId) {
            this.$emit('show-details', bookId)
        },
    },
    components: {
        BookPreview,
    }
}