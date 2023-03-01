// import LongTxt from "../../../cmps/LongTxt.js"

export default {
  name: 'EmailPreview', 
  props: ['email'],
  template: `
        <article class="email-preview">
            <h2>{{ email.subject }}</h2>
                <!-- <longTxt 
                :txt="email.body"/> -->
            <h3>{{ email.body }}</h3>
            <h4>{{ email.sentAt }}</h4>
        </article>
        `,
components:{
    // LongTxt
},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
