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
        id: utilService.makeId(),
        createdAt: Date.now(),
        isPinned: true,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#406057'
        },
        info: {
            title: 'I Cant Think Any More!!!',
            txt: 'i wish i were in Sinai right now',
            labels: [{
                "labelType": "Critical",
                "style": {
                    "backgroundColor": "rgb(224, 49, 49)"
                }
            },    {
                "labelType": "Work",
                "style": {
                    "backgroundColor": "rgb(55, 178, 77)"
                }
            },
            ],
        },
        lastEdit: 1677916966783,

    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteImg',
        isPinned: true,
        info: {
            iUrl: 'https://lh3.googleusercontent.com/pw/AMWts8CWGMdKYE-8qj7EYsUQ1OzQ6cyqIBXvRAZ19CVDYYBPe4-XPSI6mze8oBzrw9uFxf43xukhYFEY71QPFaZqsxU7lE4MB5posBT-VfhDn7mI6akUyf9EjTOKitcLztKO8mtoxOmhnH3hz9Y0hIP1GV3x1Q=w698-h930-no?authuser=0',
            title: 'Nicaragua',
            txt: 'Cerro Negro',
            labels: [    {
                "labelType": "Memories",
                "style": {
                    "backgroundColor": "rgb(174, 62, 201)"
                }
            },
        ],
        },
        style: {
            backgroundColor: '#FF922B'
        },
        lastEdit: 1677916966723,

    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteVideo',
        isPinned: true,
        info: {
            vUrl: 'https://www.youtube.com/embed/7jfxcDudvS8',
            title: 'Burnning Man',
            txt: 'my dream',
            labels: [    {
                "labelType": "Friends",
                "style": {
                    "backgroundColor": "rgb(252, 196, 25)"
                }
            },],
        },
        style: {
            backgroundColor: '#E599F7'
        },
        lastEdit: 1677916946783,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteTodos',
        isPinned: true,
        info: {
            title: 'Missions after the sprint',
            todos: [
                { txt: 'jump out of the window', doneAt: null },
                { txt: 'go to a psychologist', doneAt: null },
                { txt: 'Let the mind rest', doneAt: null },
                { txt: 'stop crying', doneAt: null },
                { txt: 'eat pizza', doneAt: 123465 },

            ],
            txt: '',
            labels: [    {
                "labelType": "Work",
                "style": {
                    "backgroundColor": "rgb(55, 178, 77)"
                }
            },
            {
                "labelType": "Critical",
                "style": {
                    "backgroundColor": "rgb(224, 49, 49)"
                }
            },
        ],

        },
        style: {
            backgroundColor: '#FCC419'
        },
        lastEdit: 1677916961743,
    },
    {
        id: 'n106',
        createdAt: Date.now(),
        type: 'NoteAudio',
        isPinned: true,
        info: {
            aUrl: 'http://commondatastorage.googleapis.com/codeskulptor-assets/Evillaugh.ogg',
            title: 'Don\'t listen ever!!',
            txt: 'hahahahahaha',
            labels: [    {
                "labelType": "Spam",
                "style": {
                    "backgroundColor": "rgb(247, 103, 7)"
                }
            },],

        },
        style: {
            backgroundColor: '#404040'
        },
        lastEdit: 1677916966080,
    },

    // Second 

    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        isPinned: false,
        type: 'NoteTxt',
        style: {
            backgroundColor: '#FF922B'
        },
        info: {
            title: 'i love purim',
            txt: 'why do you love purim? i hate this',
            labels: [    {
                "labelType": "Spam",
                "style": {
                    "backgroundColor": "rgb(247, 103, 7)"
                }
            },],
        },
        lastEdit: 1677916566783,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            iUrl: 'https://media.tenor.com/0FJSmSYDyKUAAAAM/onlyjoeyd-joeyd.gif',
            txt: 'whats that?',
            title: 'Whattttt?',
            labels: [],
        },
        style: {
            backgroundColor: '#40c057'
        },
        lastEdit: 1677916965783,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteImg',
        isPinned: true,
        info: {
            iUrl: 'https://media.tenor.com/y2JXkY1pXkwAAAAC/cat-computer.gif',
            txt: 'its not really me...',
            title: 'me at saturday night',
            labels: [    {
                "labelType": "Coding",
                "style": {
                    "backgroundColor": "rgb(100, 220, 220)"
                }
            },],
        },
        style: {
            backgroundColor: '#90d099'
        },
        lastEdit: 1677916966183,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteImg',
        isPinned: false,
        info: {
            iUrl: 'https://media.tenor.com/t3buP-QoO9oAAAAC/jim-carrey-work.gif',
            txt: 'me at saturday night',
            labels: [    {
                "labelType": "Coding",
                "style": {
                    "backgroundColor": "rgb(100, 220, 220)"
                }
            },],
        },
        style: {
            backgroundColor: '#90d099'
        },
        lastEdit: 1677916965783,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteVideo',
        isPinned: true,
        info: {
            vUrl: 'https://www.youtube.com/embed/VvU27gvAK40',
            title: 'Learn Code',
            txt: 'i have nothing to write about it',
            labels: [    {
                "labelType": "Coding",
                "style": {
                    "backgroundColor": "rgb(100, 220, 220)"
                }
            },
            {
                "labelType": "Romantic",
                "style": {
                    "backgroundColor": "rgb(16, 152, 173)"
                }
            },],
        },
        style: {
            backgroundColor: '#E599F7'
        },
        lastEdit: 1677916962283,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteTodos',
        isPinned: true,
        info: {
            title: 'Food that i must eat ',
            todos: [
                { txt: 'Shawarma Be Pita ', doneAt: null },
                { txt: 'Hamburger', doneAt: null },
                { txt: 'Banana', doneAt: null },
                { txt: 'Corn', doneAt: null },
                { txt: 'YES!', doneAt: 123465 },

            ],
            txt: '',
            labels: [],

        },
        style: {
            backgroundColor: '#FCC419'
        },
        lastEdit: 1677916966203,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteAudio',
        isPinned: true,
        info: {
            aUrl: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3',
            title: 'i should listen it when im sad',
            txt: 'i miss home',
            labels: [],

        },
        style: {
            backgroundColor: '#404040'
        },
        lastEdit: 1677916266783,
    },
    {
        id: utilService.makeId(),
        createdAt: Date.now(),
        type: 'NoteAudio',
        isPinned: true,
        info: {
            aUrl: 'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/paza-moduless.mp3',
            title: 'holly shit',
            txt: 'hey you know this mode that you have no control about what you writing ? just flow without thinking ?? ha ? me either...',
            labels: [],

        },
        style: {
            backgroundColor: '#404040'
        },
        lastEdit: 1677906966783,
    }



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








