
export default {
  name: 'EmailPreview', 
  props: ['email'],
  template: `
        <article class="email-preview">
            <h3>{{email.from}}</h3>
            <p><strong>{{ email.subject }}-</strong>{{ email.body }}</p>
            <small>{{ email.sentAt }}</small>
        </article>
        `,
components:{
    
},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
