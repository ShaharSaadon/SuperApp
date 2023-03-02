import { emailService } from "../services/Email.service.js"

export default {
  name: 'EmailCompose', 
  props: [],
  template: `
           <section class="email-compose-container">
            <h2>Compose an Email</h2>
            <RouterLink to="/email">X</RouterLink>
            <!-- <button @click="closeModal">X</button> -->
            <form @submit.prevent="save">
                <input type="text" v-model="email.to" placeholder="To">
                <input type="text" v-model="email.subject" placeholder="Subject">
                <input type="textArea" v-model="email.body" placeholder="Body">
                <button>Send</button>
            </form>
        </section>
        `,
components:{
    EmailService: emailService,
},
created() {},
  data() {
    return {
        email: emailService.getEmptyEmail()
    }
  },
  methods: {
    save() {
      this.email.sentAt = (new Date()).toDateString()
        emailService.save(this.email)
            .then(savedEmail => {
                this.$router.push('/email')
                this.$emit('updateEmails')
            })
          
    },
  },
  computed: {},
}
