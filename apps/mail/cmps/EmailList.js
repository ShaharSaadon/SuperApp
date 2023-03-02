import EmailPreview from "./EmailPreview.js"
import EmailDetails from "../pages/EmailDetails.js"

export default {
  name: 'EmailList', 
  props: ['emails'],
  template: `
        <section class="emails-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <EmailPreview 
                    :email="email"
                    @remove="remove"
                    @toggleStar="toggleStar"/>
                   
                </li>
            </ul>
        </section>
        `,
components:{
    EmailPreview,
    EmailDetails
},
created() {},
  data() {
    return {}
  },
  methods: {
    remove(emailId) {
        this.$emit('remove', emailId)
    },
    toggleStar(emailId) {
        this.$emit('addStar', emailId)

    }
  },
  computed: {},
}
