'use strict'

import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'
const NOTES_KEY = 'notesDB'

export const noteService = {
    query,
    get,
    remove,
    save,
    getNewNote,

}

const notesDB = [
    {
        id: 'n100',
        createdAt: Date.now(),
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#404040'
        },
        info: {
            title: '11',
            txt: 'hi',
            labels: [],
        }
    },
    {
        id: 'n101',
        createdAt: Date.now(),
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#404040'
        },
        info: {
            title: '22',
            txt: 'bye',
            labels: [],
        }
    },
    {
        id: 'n102',
        createdAt: Date.now(),
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#404040'
        },
        info: {
            title: '33',
            txt: 'good',
            labels: [],
        }
    },
    {
        id: 'n104',
        createdAt: Date.now(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            iUrl: 'https://png.pngtree.com/png-clipart/20200401/original/pngtree-purim-clown-doll-mask-party-balloon-png-image_5330090.jpg',
            title: 'PURIM',
            txt: 'aa',
            labels: [],
        },
        style: {
            backgroundColor: '#404040'
        }
    },
    {
        id: 'n105',
        createdAt: Date.now(),
        type: 'NoteVideo',
        isPinned: false,
        info: {
            vUrl: 'https://www.youtube.com/embed/7jfxcDudvS8',
            title: 'Burnning Man',
            txt: 'my dream',
            labels: [],
        },
        style: {
            backgroundColor: '#404040'
        }
    },
    {
        id: 'n106',
        createdAt: Date.now(),
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ],
            txt: '',
            labels: [],

        },
        style: {
            backgroundColor: '#404040'
        }
    },
    {
        id: 'n106',
        createdAt: Date.now(),
        type: 'NoteAudio',
        isPinned: false,
        info: {
            aUrl: '',
            title: '',
            txt: '',
            labels: [],

        },
        style: {
            backgroundColor: '#404040'
        }
    }
   
           
        
        


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

function getNewNote(type) {
    return _createNote(type)
}

function _createNote(type) {

    switch (type) {
        case 'NoteTxt':
            return {
                createdAt: Date.now(),
                type,
                isPinned: false,
                info: {
                    title: '',
                    txt: '',
                    labels: [],

                },
                style: {
                    backgroundColor: '#404040'
                },
            }

        case 'NoteVideo':
           return {
                createdAt: Date.now(),
                type,
                isPinned: false,
                info: {
                    vUrl: '',
                    title: '',
                    txt: '',
                    labels: [],
                },
                style: {
                    backgroundColor: '#404040'
                }
            }

        case 'NoteImg':
           return {
                createdAt: Date.now(),
                type,
                isPinned: false,
                info: {
                    iUrl: '',
                    title: '',
                    txt: '',
                    labels: [],
                },
                style: {
                    backgroundColor: '#404040'
                }
            }
            
        case 'NoteTodos':
           return {
                createdAt: Date.now(),
                type,
                isPinned: false,
                info: {
                    title: '',
                    todos: [
                    ],
                    labels: [],
                    txt: ''               
                },
                style: {
                    backgroundColor: '#404040'
                }
            }
            case 'NoteAudio':
                return {
                     createdAt: Date.now(),
                     type,
                     isPinned: false,
                     info: {
                         aUrl: '',
                         title: '',
                         txt: '',
                         labels: [],
                     },
                     style: {
                         backgroundColor: '#404040'
                     }
                 }

          





    }
}

function _createNotes() {
    let notes = utilService.loadFromStorage(NOTES_KEY)
    if (!notes || notes.length === 0) {
        notes = notesDB
        utilService.saveToStorage(NOTES_KEY, notes)
    }
}








