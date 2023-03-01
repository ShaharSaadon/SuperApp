'use strict'

import { utilService } from '../../../services/util.service.js' 
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'

const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}

_createEmails()

export const EmailService = {
    query,
    get,
    remove,
    save,
    getEmptyEmail,
}

function query(filterBy = {}) {
    return storageService.query(EMAIL_KEY)
        .then(emails => {
            if (filterBy.txt) {
                const regex = new RegExp(filterBy.txt, 'i')
                emails = emails.filter(email => regex.test(email.subject))
            }
            return emails
        })
}

function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = []
        emails.push(_createEmail('ofek@appsus.com', loggedInUser.email , 'funny story', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.'))
        emails.push(_createEmail('ofek@appsus.com', loggedInUser.email , 'mountion ride', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.'))
        emails.push(_createEmail('ofek@appsus.com', loggedInUser.email , 'pool party', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.'))
        emails.push(_createEmail('ofek@appsus.com', loggedInUser.email , 'epic games', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.'))
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}

function _createEmail(from , to, subject, body) {
    const email = getEmptyEmail(from,to)
    email.id = utilService.makeId()
    email.subject = subject
    email.body = body
    return email
}

function getEmptyEmail(from = '', to = '') {
    return {
        id: '',
        from,
        to,
        removedAt:null,
        sentAt:null,
        isRead: false,
        body:'',
        subject: '',
        }
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
}

function remove(emailId) {
    return storageService.remove(EMAIL_KEY, emailId)
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAIL_KEY, email)
    } else {
        return storageService.post(EMAIL_KEY, email)
    }
}


// const email = {
//     id: 'e101',
//     subject: 'Miss you!',
//     body: 'Would love to catch up sometimes',
//     isRead: false,
//     sentAt : 1551133930594,
//     removedAt : null,
//     from: 'momo@momo.com',
//     to: 'user@appsus.com'
//     }