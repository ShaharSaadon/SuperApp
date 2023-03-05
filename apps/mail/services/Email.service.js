'use strict'

import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'

const EMAIL_KEY = 'mailDB'



const loggedInUser = {
    email: 'user@appsus.com',
    fullName: 'Mahatma Appsus'
}
export const emailService = {
    query,
    get,
    remove,
    save,
    getEmptyEmail,
    loggedInUser,
}


_createEmails()

function query() {
    return storageService.query(EMAIL_KEY)
        .then(emails=> {
            return emails 
        })
            
}


function _createEmails() {
    let emails = utilService.loadFromStorage(EMAIL_KEY)
    if (!emails || !emails.length) {
        emails = [
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'spotify',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'We andour partners use cookies to personalize your experience, to show you ads based on your interests, and for measurement and analytics purposes. By using our website and services, you agree to our use of cookies as described in',
                subject: 'you have to hear the new songs',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'כללית',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: true,
                isDraft:false,
                isTrash:false,
                body: 'יש לך הזדמנות ללכת לסניף לקחת את המרשם ללא עלות ותוכל לזכות בפרסים בדרך אז שווה ללכת הפרטים נמצאים למטה',
                subject: 'מרשם חדש נפתח לך בסניף',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Udemy',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: true,
                isDraft:false,
                isTrash:false,
                body: 'Real-world experts for real-world learning Experience matters — that/’s why every course page has an instructor bio. Find the one that matches what you want to learn.',
                subject: 'Courses to help you climb that career ladder On sale',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'GoPro',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'Offer valid from ‌J‌a‌n‌u‌a‌r‌y‌ ‌1‌9‌,‌ ‌2‌0‌2‌3‌, ‌a‌t‌ ‌9‌:‌0‌0 ‌a‌.‌m‌.‌ ‌P‌S‌T‌ and will continue until GoPro terminates the program in its sole discretion. Applies only to purchases of HERO11 Black made on gopro.com. Cannot be combined with any other offers, discounts or promo codes, or applied to previous purchases. See full terms + conditions.',
                subject: 'Save $200 + Level Up Your Snow Day ',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Discord',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'Download Discord on your phone and receive push notifications for Discord activities like messages, mentions, friend requests, and events.',
                subject: 'Highlights from FireWolf and more',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Netflix',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'הפוגס נגררים אחר יריב מסוכן שמחפש עיר מיתולוגית אבודה, ויוצאים להרפתקאות חדשות באיים הקריביים ומעבר להם. ',
                subject: 'עונה חדשה של הסדרה חופים של סודות יצאה ',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Shahar Saadon',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'תהנה מחר ביום הולדת שלך אז קניתי לך הפתעה מטורפת בשווי מלא כסף מקווה שתאהב אותה יגבר',
                subject: 'תזכורת למחר ששכחתי',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Sumsung electronics',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: true,
                isDraft:false,
                isTrash:false,
                body: 'בין אם אתם צופים בסרטי אקשן, במשחקי ספורט או בין אם אתם גיימרים, בואו ליהנות מתצוגה חדה יותר ומתנועה משופרת יותר באיכות של עד 4K במהירות 120Hz באמצעות צג ה-OLED החדש.!',
                subject: 'העתיד בעולם המסכים כבר כאן',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'SendView',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: true,
                isDraft:false,
                isTrash:false,
                body: 'Subscribe to your competitors emails with SendView, and instead of a bloated inbox youll get dashboards full of insights, trends, and opportunities.',
                subject: 'Track your competitors',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Coca-cola',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: true,
                isDraft:false,
                isTrash:false,
                body: 'טעמים חדשים יצאו והם כנראה הטעמים הכי מטורפים שהיו אי פעם כדאי לבוא לטעום שווה כל שקל !!',
                subject: 'טעמים חדשים יצאו וכדאי לטעום',
            },
                 {
                id: utilService.makeId(),
                to:'coca-cola',
                from:loggedInUser.email,
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'שלחתם לי בקבוק בלי מיץ בפנים אתם לא מתביישים איך אתם עושים דבר כזה למישהו שכל היום שותה קולה',
                subject: 'פיצוי על הקולה שלא קיבלתי',
            },
                 {
                id: utilService.makeId(),
                to:'Spotify',
                from:loggedInUser.email,
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: true,
                isDraft:true,
                isTrash:false,
                body: 'Monitor your competitors email strategy from an inbox built for analysis not reading. Dont just subscribe to other companys emails, visually analyze their strategy. ',
                subject: 'i want more songs',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Font Awesome',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'Font Awesome is the internet\'s icon library and toolkit used by millions of designers, developers, and content creators.',
                subject: 'Confirm Your Font Awesome Account Email Address',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'PlayStation',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'Pre-order the deluxe edition to get the season pass, exclusive Eliza character and over 30 metallic costumes to make your characters shine in the King of Iron Fist Tournament.',
                subject: 'Hey pandakillerxdid',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Google platforms',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'You have received this mandatory service announcement to update you about important changes to Google Cloud Platform or your account.',
                subject: ' Google Cloud Platform Team',
            },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Sumsung',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: false,
                isDraft:false,
                isTrash:false,
                body: 'עיצוב דק בעל מראה מלוטש ומסוגנן תוך שילוב יופי ועוצמה ייחודיים. המסגרת המינימליסטית והפרופיל השטוח והדק של המסך משתלבים בצורה מושלמת בכל חלל, בכל גודל ובכל סגנון.',
                subject: 'טכנולוגיית OLED מבית Samsung'           
             },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Sumsung',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: true,
                isStared: false,
                isDraft:false,
                isTrash:true,
                body: 'עיצוב דק בעל מראה מלוטש ומסוגנן תוך שילוב יופי ועוצמה ייחודיים. המסגרת המינימליסטית והפרופיל השטוח והדק של המסך משתלבים בצורה מושלמת בכל חלל, בכל גודל ובכל סגנון.',
                subject: 'טכנולוגיית OLED מבית Samsung'           
             },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'epic games',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:false,
                isTrash:true,
                body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.',
                subject: 'new games are coming!!!'           
             },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Github',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:true,
                isTrash:false,
                body: 'If you were not expecting this invitation, you can ignore this email. If @ShaharSaadon is sending you too many emails, you can block them or report abuse.',
                subject: 'ShaharSaadon invited you to'           
             },
                 {
                id: utilService.makeId(),
                to:loggedInUser.email,
                from:'Teva',
                removedAt: null,
                sentAt: (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0'),
                isRead: false,
                isStared: false,
                isDraft:true,
                isTrash:false,
                body: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.',
                subject: 'There are new inventions'           
             },
        ]
        // emails.push(_createEmail(loggedInUser.email, 'epic games', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'funny bunny', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'lolipops', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'shipping from spain', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'family pictures', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'crazy mountion shoes', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        // emails.push(_createEmail(loggedInUser.email, 'content from president', 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, commodi? Saepe, quod nihil dicta vero alias unde dolorem odit, molestias quas doloremque sunt itaque autem consectetur incidunt qui assumenda et.', 'ofek@appsus.com'))
        utilService.saveToStorage(EMAIL_KEY, emails)
    }
}

function _createEmail(to, subject, body, from = '') {
    const email = getEmptyEmail(from, to)
    email.id = utilService.makeId()
    email.subject = subject
    email.body = body
    email.sentAt = (new Date()).toLocaleString('default', { month: 'short' }) + ' ' + ('' + new Date().getDate()).padStart(2,'0')
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
        isStared: false,
        isDraft:false,
        isTrash:false,
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
        return storageService.post(EMAIL_KEY, email, false)
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
