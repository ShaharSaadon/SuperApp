import { EmailService } from "../services/Email.service.js"

export default {
  name: 'EmailDetails',
  props: [],
  template: `
        <section class="email-details" v-if="email">
          <nav>
              <RouterLink :to="'/email/' + email.prevEmailId">Previous Email</RouterLink> |
              <RouterLink :to="'/email/' + email.nextEmailId">Next Email</RouterLink>
              <hr />
              <RouterLink to="/email">back to emails</RouterLink>
          </nav>
              <hr />
            <img src=".//assets/style/img/user-email-photo.png" alt="">
            <small>{{email.from}}</small>
            <h3>{{email.subject }}</h3>
            <p>{{ email.body }}</p>

      </section>
        `,
  components: {
    EmailService,
  },
  created() {
    this.loadEmail()
  },
  data() {
    return {
      email:null
    }
  },
  methods: {
      loadEmail() {
        EmailService.get(this.emailId)
          .then(email => this.email = email)
      }
  },
  computed: {
    emailId() {
      return this.$route.params.emailId
    }
  },
  watch: {
    emailId() {
      this.loadEmail()
    }
  }
}
