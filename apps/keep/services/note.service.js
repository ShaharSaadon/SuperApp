'use strict'

import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    get,
    remove,
    save,
    
}
const NOTES_KEY = 'notesDB'

const notesDB = [
    {
        id: 'n100',
        createdAt: 111111,
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#00d'
        },            
        info: {
            title: '12',
            txt: 'Hi'
        }
    },
    {
        id: 'n101',
        type: 'NoteTxt',
        info: {
            title: '1aaaa',
            txt: 'Hai'
        }
    },
    {
        id: 'n102',
        type: 'NoteTxt',
        info: {
            title: '1t3',
            txt: 'Hi'

        }
    },
    // {
    //     type: 'NoteImg',
    //     info: {
    //         title: '1',
    //         url: 'img/ing.jpg'

    //     }
    // },
]

_createNotes()

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

function save(note) {
    if (note.id) {
        return storageService.put(NOTES_KEY, note)
    } else {
        return storageService.post(NOTES_KEY, note)
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
    if (!notes || notes.length===0) {
        notes = notesDB
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}








