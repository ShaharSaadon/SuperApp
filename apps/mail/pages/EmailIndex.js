import { emailService } from "../services/Email.service.js"
import EmailList from "../cmps/EmailList.js"
import EmailFilter from "../cmps/EmailFilter.js"
import EmailCompose from "../cmps/EmailCompose.js"
import EmailDetails from "./EmailDetails.js"
import EmailSideBar from "../cmps/EmailSideBar.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
        <section class="email-index flex">
          <EmailSideBar/>
          <!-- <RouterLink to="/email/compose">New Email</RouterLink> -->
            <hr />
            <RouterView @updateEmails="updateEmails"/>
          <div>
            <EmailFilter @filter="setFilterBy" />
            <EmailList 
            :emails="filteredEmails"
            @remove="removeEmail"
            @updateEmail="updateEmail"/>
          </div>
        </section>
        `,
  components: {
    EmailList,
    emailService,
    EmailFilter,
    EmailCompose,
    EmailSideBar
  },
  created() {
    emailService.query()
      .then(emails => this.emails = emails)
  },
  data() {
    return {
      emails: [],
      filterBy: {},
      isCompose:false,
    }
  },
  methods: {
    removeEmail(emailId) {
      emailService.remove(emailId)
        .then(() => {
          const idx = this.emails.findIndex(email => email.id === emailId)
          this.emails.splice(idx, 1)
        }
        )
    },
    toggleEmailStar(emailId) {
      emailService.get(emailId)
        .then(email => {
          email.isStared = !email.isStared
          emailService.save(email)
        })
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
    updateEmail(email){
      emailService.save(email)
      .then(emails => {
        emailService.query(emails => this.emails= emails)
      })
    },
    updateEmails() {
      emailService.query(emails => {
        console.log('emails',emails)
        this.emails= emails
      } )
    }
  },
  computed: {
    filteredEmails() {

      let emails = this.emails
      if(this.filterBy.subject) {
        const regex = new RegExp(this.filterBy.subject, 'i')
        emails = this.emails.filter(email => regex.test(email.subject))
      }
      if(this.filterBy.isRead) {
        emails = this.emails.filter(email => email.isRead!==this.filterBy.isRead)
      }
      return emails
    }
  },
}
