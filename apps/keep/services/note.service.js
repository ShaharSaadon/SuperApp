'use strict'

import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

export const noteService = {
    query,
    get,
    remove,
    save,
    getNewNote,
    
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
            title: '11',
            txt: 'hi'
        }
    },
    {
        id: 'n101',
        createdAt: 22222,
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#00d'
        },            
        info: {
            title: '22',
            txt: 'bye'
        }
    },
    {
        id: 'n100',
        createdAt: 111111,
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#00d'
        },            
        info: {
            title: '33',
            txt: 'good'
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

function getNewNote(){
    return _createNote()
}

function _createNote(txt = 'new note') {
    return {
        createdAt: Date.now(),
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#ffffff'
        },            
        info: {
            title: '',
            txt: ''
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








