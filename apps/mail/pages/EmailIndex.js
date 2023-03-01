import { EmailService } from "../services/Email.service.js"
import EmailList from "../cmps/EmailList.js"
import EmailFilter from "../cmps/EmailFilter.js"
import EmailCompose from "../cmps/EmailCompose.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
        <section class="mail-index">

          <RouterLink to="/email/compose">New Email</RouterLink>
          <div class="email-compose container">
            <hr />
            <RouterView />
          </div>
          
          <EmailFilter @filter="setFilterBy" />
          <EmailList 
            :emails="filteredEmails"
            @remove="removeEmail"/>
        </section>
        `,
  components: {
    EmailList,
    EmailService,
    EmailFilter,
    EmailCompose,
  },
  created() {
    EmailService.query()
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
      EmailService.remove(emailId)
        .then(() => {
          const idx = this.emails.findIndex(email => email.id === emailId)
          this.emails.splice(idx, 1)
        }
        )
    },
    toggleComposeModal() {
      this.isCompose = !this.isCompose
    },
    setFilterBy(filterBy) {
      this.filterBy = filterBy
    },
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
