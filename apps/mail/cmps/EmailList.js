import EmailPreview from "./EmailPreview.js"

export default {
  name: 'EmailList', 
  props: ['emails'],
  template: `
        <section class="emails-list">
            <ul>
                <li v-for="email in emails" :key="email.id">
                    <EmailPreview :email="email"/>
                    <!-- <RouterLink :to="'/email/'+email.id">Details</RouterLink> | -->
                    <!-- <RouterLink :to="'/email/edit/'+email.id">Edit</RouterLink> | -->
                    <!-- <button hidden @click="showDetails(email.id)">Details</button> -->
                    <button @click="remove(email.id)">x</button>
                </li>
            </ul>
        </section>
        `,
components:{
    EmailPreview,
},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
