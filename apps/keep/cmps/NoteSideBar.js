import NoteFolderList from "./NoteFolderList.js"

export default {
  name: 'NoteSideBar', 
  props: ['notes','isSideBarExtend'],
  template: `
             <section class="email-sideBar flex flex-column" :class="sideBarExtend">
                <NoteFolderList 
                :emails="emails"
                @filter="filterByFolders"/>

            </section>
        `,
components:{
  NoteFolderList
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
