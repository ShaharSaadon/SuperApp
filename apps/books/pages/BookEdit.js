import { bookService } from "../services/book.services.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
    template: `
        <section class="book-edit">
            <router-link to="/books" class="return-link"><i class="fa-solid fa-book"></i>Return To Books List </router-link>
            <h2>{{(book.id) ? 'Edit' : 'Add'}} a book</h2>
            <form @submit.prevent="save">
                <p>Book name: <input type="text" v-model="book.title"></p>
                <p>Book Description:</p><textarea v-model="book.description" name="" id="" cols="30" rows="5"></textarea>  
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