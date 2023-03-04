import { bookService } from '../services/book.services.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

import BookFilter from '../cmps/BookFilter.js'
import BookList from '../cmps/BookList.js'

export default {
    template: `
        <section class="book-index">
            <div class="books-nav">
                <RouterLink class="add-link" :to="'/books/edit/'">Add Book Manually</RouterLink>
                <RouterLink class="add-link" to="/add/" @add="onAddGoogleBook">Add Book from Google Books</RouterLink>
            </div>

            <BookFilter @filter="setFilterBy"/>
            <BookList :books="filteredBooks" 
                v-if="books"
                @remove="removeBook"/>


        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: { maxPrice: 250 },
        }
    },
    methods: {
        removeBook(bookId) {
            bookService.remove(bookId)
                .then(() => {
                    const idx = this.books.findIndex(book => book.id === bookId)
                    this.books.splice(idx, 1)
                    showSuccessMsg('Book Removed Succeed')
                }).catch(err => {
                    showErrorMsg('Book Removed Failed')
                })
        },
        setFilterBy(filterBy) {
            this.filterBy = filterBy
        },
        onAddGoogleBook(book) {
            console.log('book=', book)
        }
    },
    computed: {
        filteredBooks() {
            const regex = new RegExp(this.filterBy.title, 'i')
            return (this.books.filter(book => regex.test(book.title)))
            // .filter(book => book.listPrice.amount<this.filterBy.maxPrice))
        }
    },
    created() {
        bookService.query()
            .then(books => this.books = books)
    },
    mounted() {
        bookService.query()
            .then(books => {
                this.books = books
            })
    },
    components: {
        BookList,
        BookFilter,
    }
}