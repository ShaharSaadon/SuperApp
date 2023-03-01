import { EmailService } from "../services/Email.service.js"

export default {
  name: 'EmailCompose', 
  props: [],
  template: `
           <section class="email-compose">
            <h2>Compose an Email</h2>
            <button @click="closeModal">X</button>
            <form @submit.prevent="save">
                <input type="text" v-model="email.to" placeholder="To">
                <input type="text" v-model="email.subject" placeholder="Subject">
                <input type="textBox" v-model="email.body" placeholder="Body">
                <button>Send</button>
            </form>
        </section>
        `,
components:{
    EmailService,
},
created() {},
  data() {
    return {
        email: EmailService.getEmptyEmail()
    }
  },
  methods: {
    save() {
        EmailService.save(this.email)
            .then(savedEmail => {
                // console.log('Car saved', savedCar)
                this.$router.push('/email')
            })
    },
    closeModal() {
        this.$emit('closeModal')
    }
  },
  computed: {},
}
