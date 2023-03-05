// import { axios } from "../../../lib/axios.js"
import { utilService } from "../../../services/util.service.js"

export const googleBookService = {
  query 
}

const SEARCH_KEY = 'googleBooksDB'
const URL = 'https://www.googleapis.com/books/v1/volumes?q='
var gSearchCache = utilService.loadFromStorage(SEARCH_KEY) || {}
    query('funny')

function query(keyWord) {
    if (gSearchCache[keyWord]) {
        console.log('Loading from cache')
        return Promise.resolve(gSearchCache[keyWord])
    }

    return axios.get(URL + keyWord)
        .then(res => res.data.items)
        .then(googleBooks=>{
            console.log('googleBooks',googleBooks)
           const formattedBooks = googleBooks.map(book=> formattedBook(book))
           gSearchCache[keyWord] = formattedBooks
           console.log('formattedBooks',formattedBooks)
           utilService.saveToStorage(SEARCH_KEY,formattedBooks)
            return formattedBooks
        })
}

function formattedBook(book) {
    return {
        id:book.id,
        title:book.volumeInfo.title,
        subtitle:book.searchInfo?.textSnippet || 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex officiis quisquam magnam',
        authors:book.volumeInfo.authors,
        publishedDate:book.volumeInfo.publishedDate.slice(0,4),
        description:book.volumeInfo.description,
        pageCount:book.volumeInfo.pageCount,
        categories:book.volumeInfo.categories,
        thumbnail:book.volumeInfo.imageLinks?.thumbnail,
        language:book.volumeInfo.language,
        listPrice: {
            amount:utilService.getRandomIntInclusive(15,250),
            currencyCode: "EUR",
            isOnSale:true
        }



    }
}
    