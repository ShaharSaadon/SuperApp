export default {
  name: 'EmailFilter',
  props: [],
  template: `
          <section class="emails-filter">
            <input 
                v-model="filterBy.subject"
                @input="filter"
                placeholder="Search"
                type="text" />
                <label htmlFor="">
                  Unread emails
                  <input type="checkBox"
                  v-model="filterBy.isRead" 
                  @input="filter"
                  />
                </label>
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
