import EmailCompose from "./EmailCompose.js"

export default {
  name: 'EmailSideBar', 
  props: [],
  template: `
             <section class="email-sideBar flex flex-column">

                <RouterLink class="email-compose flex justify-center align-center"
                to="/email/compose">Compose</RouterLink>

                <button class="side-bar-btn flex justify-center align-center">Inbox</button>
                <button class="side-bar-btn flex justify-center align-center">Stared</button>
                <button class="side-bar-btn flex justify-center align-center">Sent</button>
            </section>
        `,
components:{
  EmailCompose,
},
created() {},
  data() {
    return {}
  },
  methods: {},
  computed: {},
}
