import { EmailService } from "../services/Email.service.js"
import EmailList from "../cmps/EmailList.js"

export default {
  name: 'EmailIndex',
  props: [],
  template: `
        <section class="mail-index">
          <EmailList 
            :emails="emails"/>
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
  methods: {},
  computed: {},
}
