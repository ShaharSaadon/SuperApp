import EmailPreview from "./EmailPreview.js"
import EmailDetails from "./EmailDetails.js"

export default {
  name: 'EmailList', 
  props: ['emails'],
  template: `
        <section class="emails-list">
            <ul>
                <li @click.stop="showDetails(email.id)" v-for="email in emails" :key="email.id">
                    <EmailPreview 
                    :email="email"
                    @remove="remove"
                    @toggleStar="toggleStar"/>
                   
                </li>
            </ul>
            <RouterView />
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
    remove(email) {
        this.$emit('remove', email)
    },
    toggleStar(email) {
        this.$emit('toggleStar', email)
    },
    showDetails(emailId) {
      // this.$emit('showDetails' , emailId)
      this.$router.push(`/email/${emailId}`)
    }
  },
  computed: {},
}
