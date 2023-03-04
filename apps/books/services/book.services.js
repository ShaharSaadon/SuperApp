'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'
import booksDb from "../../../assets/books.json" assert {type: "json"}
const BOOK_KEY = 'bookDB'

_createBooks()

export const bookService = {
    query,
    get,
    remove,
    save,
    getEmptyBook,
    addReview,
    addGoogleBook,
}

function query(filterBy = {}) {
    return storageService.query(BOOK_KEY)
        .then(books => {return books})
}

function get(bookId) {
    return storageService.get(BOOK_KEY, bookId)
        .then(_setNextPrevBookId)
}

function remove(bookId) {
    return storageService.remove(BOOK_KEY, bookId)
}

function save(book) {
    if (book.id) {
        return storageService.put(BOOK_KEY, book)
    } else {
        return storageService.post(BOOK_KEY, book)
    }
}

function getEmptyBook(title = '', description = '', thumbnail = '', subtitle = '', publishedDate = '0', pageCount = '0', language = 'en') {
    return {
        id: '',
        title,
        subtitle,
        authors: [],
        publishedDate,
        description,
        pageCount,
        categories: [],
        thumbnail,
        language,
        listPrice: {
            amount: '',
            currencyCode: '',
            isOnSale: false
        }
    }
}

function addReview(bookId, review) {

    get(bookId)
        .then(book => {
            if (!book.reviews) book.reviews = []
            book.reviews.push(review)
            save(book)
        })

}

function addGoogleBook(book) {
    console.log(book)
    const { id } = book
    const { title, authors, publishedDate, description, pageCount, categories, language } = book.volumeInfo
    const newBook = {
        id,
        title,
        authors,
        publishedDate,
        description,
        pageCount,
        categories,
        language,
        thumbnail:book.volumeInfo.imageLinks.thumbnail,
        listPrice: {
            amount: 0   ,
            currencyCode: '',
            isOnSale: false
        },

    }
    return storageService.post(BOOK_KEY, newBook)
}

function _createBooks() {
    let books = utilService.loadFromStorage(BOOK_KEY)
    if (!books || !books.length) {
        books = booksDb
        utilService.saveToStorage(BOOK_KEY, books)
    }
}

function _createBook(title, description = 'cute book') {
    const book = getEmptyBook(title, description)
    book.id = utilService.makeId()
    return book
}

function _setNextPrevBookId(book) {
    return storageService.query(BOOK_KEY).then((books) => {
        const bookIdx = books.findIndex((currBook) => currBook.id === book.id)
        book.nextBookId = books[bookIdx + 1] ? books[bookIdx + 1].id : books[0].id
        book.prevBookId = books[bookIdx - 1]
            ? books[bookIdx - 1].id
            : books[books.length - 1].id
        return book
    })
}