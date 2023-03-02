export default {
  name: 'EmailFilter',
  props: [],
  template: `
          <section class="search-emails-filter">
            <input 
                v-model="filterBy.subject"
                @input="filter"
                placeholder="Search"
                type="text" />
              <button :class="isRead">Unread Emails</button>
        </section>
        `,
  components: {},
  created() { },
  data() {
    return {
      filterBy: { subject: '', isRead: null },
    }
  },
  methods: {
    filter() {
      this.filterBy.isRead = !this.filterBy.isRead
      console.log('this.filterBy',this.filterBy)
      this.$emit('filter', this.filterBy)
    },
  },
  computed: {
    // watch: {
    //   filterBy: {
    //     handler() {
    //       this.$emit('filter', this.filterBy)
    //     },
    //     deep: true
    //   },
    //   'filterBy.vendor'() {
    //     this.$emit('filter', this.filterBy)
    //   },
    // },
  }
}
