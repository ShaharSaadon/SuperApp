import { emailService } from "../services/Email.service.js"

export default {
    name: 'EmailFolderList',
    props: ['emails'],
    template: `
            <section class="email-folder-list">

                <button v-for="btn in navBtns"
                :class="{'active': this.active === btn.type}" 
                @click="changeFolder(btn.type)" 
                :key="btn.id" 
                class="side-bar-btn">
                <i class="folder-icon" :class="btn.icons.join(' ')"></i>
                <p class="text">{{btn.title}}</p> <p class="text" v-if="btn.inboxCount===inbox">{{inboxMailCounter}}</p>
                </button>

            </section>
        `,
    components: {
        emailService
    },
    created() { },
    data() {
        return {
            criteria: {
                status: 'inbox',
                isRead: false, // (optional property, if missing: show all)
                isStared: false, // (optional property, if missing: show all)
                lables: ['important', 'romantic'], // has any of the labels
            },
            navBtns: [
                {
                    id: 'btn1',
                    title: 'Inbox',
                    type: 'inbox',
                    icons: ['fa-solid', 'fa-inbox'],
                   
                },
                {
                    id: 'btn2',
                    title: 'Stared',
                    type: 'stared',
                    icons: ['fa-solid', 'fa-star'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn3',
                    title: 'Sent',
                    type: 'sent',
                    icons: ['fa-solid', 'fa-paper-plane'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn4',
                    title: 'Draft',
                    type: 'draft',
                    icons: ['fa-solid', 'fa-file'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn5',
                    title: 'Trash',
                    type: 'trash',
                    icons: ['fa-solid', 'fa-trash'],
                    inboxCount: 'inbox'
                },

            ],
            active: 'inbox'
        }
    },
    methods: {
        changeFolder(folderName) {
            this.active = folderName
            this.criteria.status = folderName
        },
    },
    watch: {
        criteria: {
            handler() {
                let criteria = { ...this.criteria }
                this.$emit('filter', criteria)
            },
            deep: true
        }
    },

    computed: {
        inboxMailCounter() {
            let counter = 0
            this.emails.filter(email => {
                if (!email.isRead) ++counter
            })
            return counter
        },
    }
}