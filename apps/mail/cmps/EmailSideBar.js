import EmailCompose from "./EmailCompose.js"
import EmailFolderList from "./EmailFolderList.js"

export default {
  name: 'EmailSideBar', 
  props: [],
  template: `
             <section class="email-sideBar flex flex-column">
              
                <RouterLink class="email-compose-link flex justify-center align-center"
                to="/email/compose">Compose</RouterLink>
                <EmailFolderList @filter="filterByFolders"/>

            </section>
        `,
components:{
  EmailCompose,
  EmailFolderList
},
created() {},
  data() {
    return {}
  },
  methods: {
    filterByFolders(criteria) {
      this.$emit('filter' , criteria)
    }
  },
  computed: {},
}
