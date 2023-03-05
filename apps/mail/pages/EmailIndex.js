import { emailService } from "../services/Email.service.js"
import EmailList from "../cmps/EmailList.js"
import EmailFilter from "../cmps/EmailFilter.js"
import EmailCompose from "../cmps/EmailCompose.js"
import EmailDetails from "../cmps/EmailDetails.js"
import EmailSideBar from "../cmps/EmailSideBar.js"
import { eventBus } from "../../../services/event-bus.service.js"
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'

export default {
  name: 'EmailIndex',
  props: [],
  template: `
        <section class="email-index">

         <!-- <div class=" flex justify-center align-center"> -->
            <EmailFilter 
            @filter="setFilterBy"
            @toggleSideBar="toggleSideBar" />
          <!-- </div> -->
          
          <div class="flex">
            <EmailSideBar  
            :emails="emails"
            :isSideBarExtend="isSideBarExtend"
            @filter="setCriteria"/>
            <RouterView @updateEmails="updateEmails"  @remove="removeEmail"  @toggleStar="saveEmail" :emails="filteredEmails"/>
              <!-- <EmailList 
              v-if="!isDetails"
              :emails="filteredEmails"
              @showDetails="showDetails"
              @remove="removeEmail"
              @toggleStar="saveEmail"/> -->

          </div>
          
          
        </section>
        `,
  components: {
    EmailList,
    emailService,
    EmailFilter,
    EmailCompose,
    EmailSideBar,
    EmailDetails,
  },
  created() {
    emailService.query()
      .then(emails => this.emails = emails)
    eventBus.on('sent', this.saveEmail)
  },
  data() {
    return {
      emails: [],
      filterBy: {},
      criteria: {
        status: 'inbox',
      },
      isSideBarExtend: false,
      isDetails:false
    }
  },
  methods: {
    showDetails(emailId) {
      this.isDetails = !this.isDetails
      this.$router.push(`/email/${emailId}`)
    },
    removeEmail(email) {
      console.log('email', email)
      if (!email.isTrash) {
        email.isTrash = true
        showSuccessMsg('email saved in trash')
        this.saveEmail(email)
      } else {
        emailService.remove(email.id)
          .then(() => {
            const idx = this.emails.findIndex(e => e.id === email.id)
            this.emails.splice(idx, 1)
            showSuccessMsg('email removed')
          })
          .catch(err=> {
            showErrorMsg('email didn\'t removed')
          })
      }
      // this.updateEmails()
    },
    toggleEmailStar(emailId) {
      emailService.get(emailId)
        .then(email => {
          email.isStared = !email.isStared
          emailService.save(email)
        })
    },
    setFilterBy(filterBy) {
      console.log(filterBy);
      this.filterBy = filterBy
    },
    setCriteria(criteria) {
      this.criteria = criteria
      console.log('this.criteria', this.criteria)
    },
    saveEmail(email) {
      const isEdit = email.id ? true : false
      emailService.save(email)
        .then(email => {
          if (isEdit) {
            const idx = this.emails.findIndex(e => e.id === email.id)
            this.emails.splice(idx, 1, email)
          } else {
            this.emails.unshift(email)
          }
        })
    },
    updateEmails() {
      emailService.query()
        .then(emails => {
          // console.log('emails',emails)
          this.emails = emails
        })
    },
    toggleSideBar() {
      this.isSideBarExtend = !this.isSideBarExtend
    }
  },
  computed: {
    filteredEmails() {
      let emails = this.emails
      if (this.filterBy.isRead) {
        console.log('hi');
        emails = emails.filter(email => !email.isRead)
      }

      if (this.criteria.status) {
        if (this.criteria.status === 'inbox') {
          emails = emails.filter(email => {
            return email.to === emailService.loggedInUser.email &&
              !email.isTrash &&
              !email.isDraft
          })
        }
        if (this.criteria.status === 'sent') {
          emails = emails.filter(email => email.from === emailService.loggedInUser.email &&
            !email.isTrash &&
            !email.isDraft)
        }
        if (this.criteria.status === 'trash') {
          emails = emails.filter(email => email.isTrash)
        }
        if (this.criteria.status === 'draft') {
          emails = emails.filter(email => email.isDraft && !email.isTrash)
        }
        if (this.criteria.status === 'stared') {
          emails = emails.filter(email => email.isStared && !email.isTrash)
        }
      }

      if (this.filterBy.subject) {
        const regex = new RegExp(this.filterBy.subject, 'i')
        emails = emails.filter(email => regex.test(email.subject))
      }
      return emails
    }
  }
}
