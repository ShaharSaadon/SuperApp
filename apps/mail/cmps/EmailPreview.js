export default {
  name: 'EmailPreview', 
  props: ['email'],
  template: `
        <article class="email-preview">
            <h2>{{ email.subject }}</h2>
            <h3>{{ email.body }}</h3>
        </article>
        `,
components:{},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
