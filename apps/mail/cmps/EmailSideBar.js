import EmailCompose from "./EmailCompose.js"
import EmailFolderList from "./EmailFolderList.js"

export default {
  name: 'EmailSideBar', 
  props: ['emails','isSideBarExtend'],
  template: `
             <section class="email-sideBar flex flex-column" :class="sideBarExtend">

                <RouterLink class="email-compose-link flex justify-center align-center"
                to="/email/inbox/compose"><i class="folder-icon fa-solid fa-pencil"></i><p class="text">Compose</p></RouterLink>
                <EmailFolderList 
                :emails="emails"
                @filter="filterByFolders"/>

            </section>
        `,
components:{
  EmailCompose,
  EmailFolderList
},
created() {},
  data() {
    return {
    }
  },
  methods: {
    filterByFolders(criteria) {
      this.$emit('filter' , criteria)
    },
  },
  computed: {
    sideBarExtend() {
      return {
        extend:this.isSideBarExtend
      }
    }
  },
}
