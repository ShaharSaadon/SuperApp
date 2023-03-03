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
        createdAt: 111111,
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#404040'
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
            backgroundColor: '#404040'
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
            backgroundColor: '#404040'
        },
        info: {
            title: '33',
            txt: 'good'
        }
    },
    {
        id: 'n104',
        createdAt: 111111,
        type: 'NoteImg',
        isPinned: false,
        info: {
            iUrl: 'https://png.pngtree.com/png-clipart/20200401/original/pngtree-purim-clown-doll-mask-party-balloon-png-image_5330090.jpg',
            title: 'PURIM',
            txt: 'aa'
        },
        style: {
            backgroundColor: '#404040'
        }
    },
    {
        id: 'n105',
        createdAt: 111111,
        type: 'NoteVideo',
        isPinned: false,
        info: {
            vUrl: 'https://www.youtube.com/embed/7jfxcDudvS8',
            title: 'Burnning Man',
            txt: 'my dream'
        },
        style: {
            backgroundColor: '#404040'
        }
    },
    {
        id: 'n106',
        createdAt: 111111,
        type: 'NoteTodos',
        isPinned: false,
        info: {
            title: 'Get my stuff together',
            todos: [
                { txt: 'Driving license', doneAt: null },
                { txt: 'Coding power', doneAt: 187111111 }
            ],
            txt: ''

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
                    txt: ''
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
                    txt: ''
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
                        { txt: '', doneAt: null },
                    ],
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








