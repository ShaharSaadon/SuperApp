import { bookService } from "../services/book.services.js"
import { showSuccessMsg, showErrorMsg } from "../../../services/event-bus.service.js"

export default {
    template: `
    <h2>Please search a Book</h2>
        <input type="text" placeholder="Search" name="search" v-model="keyWord" v-on:change="getGoogleBooks"/>
        
        <section class="book-add">
            <ul class="clean-list">
            <li v-for="book in searchResult" :key="book.id">
                <h2>{{book.volumeInfo.title}}</h2>
                <img :src="book.volumeInfo.imageLinks.thumbnail" alt="">
                <button @click="add(book)">Add</button>

                </li>
            </ul>
        </section>
    `,
    data() {
        return {
            keyWord: '',
            searchResult: null,
        }
    },
    methods: {
        add(book) {
            console.log('book-', { ...book })
            bookService.addGoogleBook(JSON.parse(JSON.stringify(book)))
                .then(book => {
                    showSuccessMsg('Book Added')
                    this.$router.push('/books')
                })
        },

        getGoogleBooks() {
            const url = 'https://www.googleapis.com/books/v1/volumes?q='
            return axios.get(`${url}` + this.keyWord)
                .then(res => this.searchResult = res.data.items)
        }
    }
}

