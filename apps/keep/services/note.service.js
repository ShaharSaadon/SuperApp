'use strict'

import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    get,
    remove,
    save,
    getNotes,
}
const NOTES_KEY = 'notesDB'

const notesDB = [
    {
        type: 'NoteTxt',
        info: {
            title: '1',
            txt: 'Hi'
        }
    },
    {
        type: 'NoteTxt',
        info: {
            title: '1',
            txt: 'Hi'
        }
    },
    {
        type: 'NoteTxt',
        info: {
            title: '1',
            txt: 'Hi'

        }
    },
    {
        type: 'NoteImg',
        info: {
            title: '1',
            url: 'img/ing.jpg'

        }
    },
]

_createNotes()

function getNotes() {
    return Promise.resolve(notesDB)

}

function query(filterBy = {}) {
    return storageService.query(NOTES_KEY)
        .then(notes => { return notes })
}

function get(notesId) {
    return storageService.get(NOTES_KEY, notesId)
}

function remove(notesId) {
    return storageService.remove(NOTES_KEY, notesId)
}

function save(notes) {
    if (notes.id) {
        return storageService.put(NOTES_KEY, notes)
    } else {
        return storageService.post(NOTES_KEY, notes)
    }
}

function _createNote(txt = 'new note') {
    return {
        id: utilService.makeId(),
        type: 'textBox',
        info: {
            txt,
        }

    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || notes.length) {
        notes = notesDB
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}












// const notes = [
//     {
//         id: 'n101',
//         createdAt: 1112222,
//         type: 'NoteTxt',
//         isPinned: true,
//         style: {
//             backgroundColor: '#00d'
//         },
//         info: {
//             txt: 'Fullstack Me Baby!'
//         }
//     },
//     {
//         id: 'n102',
//         type: 'NoteImg',
//         isPinned: false,
//         info: {
//             url: 'http://some-img/me',
//             title: 'Bobi and Me'
//         },
//         style: {
//             backgroundColor: '#00d'
//         }
//     },
//     {
//         id: 'n103',
//         type: 'NoteTodos',
//         isPinned: false,
//         info: {
//             title: 'Get my stuff together',
//             todos: [
//                 { txt: 'Driving license', doneAt: null },
//                 { txt: 'Coding power', doneAt: 187111111 }
//             ]
//         }
//     }
// ]