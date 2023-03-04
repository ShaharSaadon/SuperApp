import { bookService } from "../services/book.services.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="book-edit">
            <h2>{{(book.id) ? 'Edit' : 'Add'}} a book</h2>
            <form @submit.prevent="save">
                <p>Book name: <input type="text" v-model="book.title"></p>
                <p>Book Description: <input type="text" v-model="book.description" ></p>
                <p>Price: <input type="number" v-model="book.listPrice.amount" ></p>
                <p>Published Date: <input type="number" v-model="book.publishedDate" ></p>
                <button>Save</button>
            </form>
        </section>
    `,
    data() {
        return {
            book: bookService.getEmptyBook()
        }
    },
    created(){
        console.log('BookEditCreated',this.$route.params)
        const {bookId} = this.$route.params
        if (!bookId) return
        bookService.get(bookId).then(book => this.book=book)
    },
    methods: {
        save() {
            bookService.save(this.book)
                .then(savedBook => {
                    console.log('book saved',savedBook)
                    this.$router.push('/books')
                    showSuccessMsg('Book Saved')
                   
                }).catch(err =>{
                    showErrorMsg('Book Save Failed')
                })
        }
    }
}