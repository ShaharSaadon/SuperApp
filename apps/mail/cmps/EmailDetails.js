import { emailService } from "../services/Email.service.js"

export default {
  name: 'EmailDetails',
  props: [],
  template: `
        <section class="email-details" v-if="email">
          <nav>
            <RouterLink class="details-btn back-btn" to="/email/inbox"><i class="fa-solid fa-arrow-left"></i> Back</RouterLink>
          </nav>
          <h2>{{email.subject }}</h2>
          <div class="main-content">
            <img src=".//assets/style/img/user-email-photo.png" alt="">
            <h5>{{email.from}}</h5>
            <h5>{{email.sentAt}}</h5>
          </div>
          <p>{{ email.body }}</p>
          <div class="links flex align-center">
            <RouterLink class="details-btn next-previous-btn" :to="'/email/' + email.prevEmailId">Previous Email</RouterLink> 
            <RouterLink class="details-btn next-previous-btn" :to="'/email/' + email.nextEmailId">Next Email</RouterLink>
          </div>

      </section>
        `,
  components: {
    EmailService: emailService,
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
        emailService.get(this.emailId)
          .then(email => {
            this.email = email
            this.email.isRead = true
            emailService.save(this.email)
          })
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
