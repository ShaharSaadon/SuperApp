import { emailService } from "../services/Email.service.js"

export default {
  name: 'EmailFolderList', 
  props: [],
  template: `
            <section class="email-folder-list">

                <button v-for="btn in navBtns"
                :class="{'active': this.active === btn.type}" 
                @click="changeFolder(btn.type)" 
                :key="btn.id" 
                class="side-bar-btn flex justify-center align-center">{{btn.title}}</button>

            </section>
        `,
components:{
    emailService
},
created() {},
  data() {
    return {
        criteria: {
            status: 'inbox',
            isRead: false, // (optional property, if missing: show all)
            isStared: false, // (optional property, if missing: show all)
            lables: ['important', 'romantic'] // has any of the labels
        },
        navBtns: [
            {
                id: 'btn1',
                title: 'Inbox',
                type: 'inbox',
                icons: ['fa-solid', 'fa-inbox']
            },
            {
                id: 'btn2',
                title: 'Stared',
                type: 'stared',
                icons: ['fa-solid', 'fa-inbox']
            },
            {
                id: 'btn3',
                title: 'Sent',
                type: 'sent',
                icons: ['fa-solid', 'fa-inbox']
            },
            {
                id: 'btn4',
                title: 'Draft',
                type: 'draft',
                icons: ['fa-solid', 'fa-inbox']
            },
            {
                id: 'btn5',
                title: 'Trash',
                type: 'trash',
                icons: ['fa-solid', 'fa-trash']
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
            let criteria = {...this.criteria}
            this.$emit('filter', criteria)
        },
        deep: true
    }
  },

  computed: {
    findInbox() {
        var counter = 0
        return emailService.query()
          .then(emails => {
            emails.filter(email => {
              if (!email.isRead) {
                counter++
              }
            })
            console.log('counter', counter)
            return counter
          })
        
      }
  },
}
