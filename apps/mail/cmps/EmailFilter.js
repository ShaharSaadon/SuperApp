export default {
  name: 'EmailFilter',
  props: [],
  template: `
          <section class="search-emails-filter flex align-center">
            <button></button>
          <img src="../../assets/style/img/email-logo.png" alt="">
            <input 
                v-model="filterBy.subject"
                @input="filter"
                placeholder="Search"
                type="text" />
              <button @click="toggleReadBtn" :class="toggleReadBtnColor" class="readBtn" >Unread Emails</button>
        </section>
        `,
  components: {},
  created() { },
  data() {
    return {
      filterBy: { subject: '', isRead: false },
    }
  },
  methods: {
    filter() {
      this.filterBy.isRead = !this.filterBy.isRead
      console.log('this.filterBy', this.filterBy)
      this.$emit('filter', this.filterBy)
    },
    toggleReadBtn() {
      this.filterBy.isRead = !this.filterBy.isRead
    }
  },
  watch: {
    filterBy: {
      handler() {
        this.$emit('filter', this.filterBy)
      },
      deep: true
    },
    computed: {
      toggleReadBtnColor() {
        return {
          mark: this.filterBy.isRead
        }
      }
    },
  }
}
