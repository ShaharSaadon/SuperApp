'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'

const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}
export const EmailService = {
    query,
    get,
    remove,
    save,
    getEmptyEmail,
    loggedInUser,
}


_createEmails()


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
        emails.push(_createEmail(loggedInUser.email, 'epic games', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'funny bunny', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'lolipops', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'shipping from spain', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'family pictures', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'crazy mountion shoes', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.','ofek@appsus.com'))
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}

function _createEmail(to, subject, body, from = '') {
    const email = getEmptyEmail(from, to)
    email.id = utilService.makeId()
    email.subject = subject
    email.body = body
    email.sentAt = new Date()
    return email
}

function getEmptyEmail(from = loggedInUser.email, to = '') {
    return {
        id: '',
        to,
        from,
        removedAt: null,
        sentAt: null,
        isRead: false,
        isStared:false,
        body: '',
        subject: '',
    }
}

function get(emailId) {
    return storageService.get(EMAIL_KEY, emailId)
        .then(_setNextPrevEmailId)
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

function _setNextPrevEmailId(email) {
    return storageService.query(EMAIL_KEY).then((emails) => {
        const emailIdx = emails.findIndex((currEmail) => currEmail.id === email.id)
        email.nextEmailId = emails[emailIdx + 1] ? emails[emailIdx + 1].id : emails[0].id
        email.prevEmailId = emails[emailIdx - 1]
            ? emails[emailIdx - 1].id
            : emails[emails.length - 1].id
        return email
    })
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