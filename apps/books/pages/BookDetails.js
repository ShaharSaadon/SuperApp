import { bookService } from "../services/book.services.js"
import AddReview from "../cmps/AddReview.js"

export default {
    template: `
        <section class="book-details" v-if="book">
        <p v-if="book.listPrice.isOnSale"> On Sale!</p>
            <h2>{{ book.title }}</h2>
            <h4>{{readingVibe}}</h4>
            <h4>.{{fashion}}</h4>
            <p>{{ book.subtitle }}</p>
            <p>authors: {{ book.authors.join(' ') }}</p>
            <p>Published Date: {{ book.publishedDate}}</p>
            <p>description: {{ book.description}}</p>
            <p>categories: {{book.categories.join(',')}}</p>
            <p :class="counterClass">list Price: {{book.listPrice.amount}} {{book.listPrice.currencyCode}}</p>
            <RouterLink :to="'/books/' +book.prevBookId">Prev Book</RouterLink>
            <img :src="book.thumbnail" alt="">
            <RouterLink :to="'/books/' +book.nextBookId">next Book</RouterLink>
            <AddReview @add-review="onAddReview"/>
            <RouterLink to="/books">Back to list</RouterLink>

        </section>
    `,data(){
        return {
            book: null
        }
    }, created(){
        const {bookId} = this.$route.params
        bookService.get(bookId)
            .then(book => this.book = book)
    },
    methods: {
        onAddReview(review) {
            bookService.addReview(this.book.id,review)
            
        },
        loadBook(){
            bookService.get(this.bookId)
                .then(book =>this.book=book)
        }
    },
    computed: {
        bookId(){
          return this.$route.params.bookId  
        },
        readingVibe() {
            if (this.book.pageCount < 100) return 'Light Reading'
            else if (this.book.pageCount < 500) return 'Descent Reading'
            else return 'Serious Reading'
        },
        fashion() {
            if ((new Date().getFullYear() - this.book.publishedDate) < 1) return 'New'
            if ((new Date().getFullYear() - this.book.publishedDate) > 10) return 'Vintage'
        },

        counterClass() {
            return {
                'green': this.book.listPrice.amount > 150,
                'red': this.book.listPrice.amount < 20
            }

        }, 
    },

    watch: {
        bookId() {
            console.log('book Changed!')
            this.loadBook()
        }
    },
     components: {
        AddReview,
    }
    
}