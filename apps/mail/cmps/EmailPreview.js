
export default {
  name: 'EmailPreview', 
  props: ['email'],
  template: `
        <article :class="readClass" class="email-preview" @click="showDetails">

            <button :class="starClass" class="star-btn" @click.stop="toggleStar"><i class="fa-sharp fa-solid fa-star"></i></button>
            <h4>{{email.from}}</h4>
            <p class="email-content">
              <p class="subject">{{ email.subject }}-</p>
              <p class="body">{{ email.body }}</p>
            </p>
            <small class="email-date">{{ email.sentAt }}</small>
            <button class="removeEmail-btn" @click.stop="remove(email.id)"><i class="fa-solid fa-trash-can"></i></button>

        </article>
        `,
components:{
    
},
created() {},
  data() {
    return {}
  },
  methods: {
    showDetails(){
        this.$router.push(`/email/${this.email.id}`)
    },
    remove(emailId) {
        this.$emit('remove' , emailId)
    },
    toggleStar() {
        const email = {...this.email}
        email.isStared = !email.isStared
        this.$emit('toggleStar', email)
    }
  },
  computed: {
    readClass() {
        return {
            read: this.email.isRead
        }
    },
    starClass() {
        return {
            marked: this.email.isStared
        }
    }
  },
}
