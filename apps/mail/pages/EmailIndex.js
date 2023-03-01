import { EmailService } from "../services/Email.service.js"
import EmailList from "../cmps/EmailList.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
        <section class="mail-index">
          <EmailList 
            :emails="emails"
            @remove="removeEmail"/>
            <h1>Mail</h1>
        </section>
        `,
  components: {
    EmailList,
    EmailService,
  },
  created() { 
    EmailService.query()
      .then(emails => this.emails = emails)
  },
  data() {
    return {
      emails:[],
    }
  },
  methods: {
    removeEmail(emailId) {
      EmailService.remove(emailId)
        .then(()=> {
          const idx = this.emails.findIndex(email => email.id === emailId)
          this.emails.splice(idx, 1)
        }
        )
    }
  },
  computed: {},
}
