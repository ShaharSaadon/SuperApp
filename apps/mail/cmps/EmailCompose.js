import { eventBus } from "../../../services/event-bus.service.js"
import { emailService } from "../services/Email.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
  name: 'EmailCompose', 
  props: [],
  template: `
           <section class="email-compose">
            <div class="compose-nav">
              <h4>New Email</h4>
              <RouterLink @click="saveToDraft" class="exit-btn" to="/email">X</RouterLink>
            </div>
            <!-- <button @click="closeModal">X</button> -->
            <form @submit.prevent="save">
                <input type="text" v-model="email.to" placeholder="To">
                <hr />
                <input type="text" v-model="email.subject" placeholder="Subject">
                <hr />
                <textarea 
                v-model="email.body" 
                placeholder="Body">
                </textarea>
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
      eventBus.emit('sent', {...this.email})
      this.$router.push('/email/inbox')
      showSuccessMsg('email sent')
    },
    saveToDraft() {
      this.email.sentAt = (new Date()).toDateString()
      this.email.isDraft = true
      eventBus.emit('sent', {...this.email})
      this.$router.push('/email/inbox')
      showSuccessMsg('email saved to drafts')

    }
  },
  computed: {},
}
