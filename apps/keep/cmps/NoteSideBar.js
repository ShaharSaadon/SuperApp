export default {
    props: ['isSideBarExtend'],
    template: `

        <section class="note-side-bar flex flex-column" :class="sideBarExtend">
        <button v-for="btn in navBtns"
                :class="{'active': this.active === btn.type}" 
                @click="setFilterBy(btn.type)" 
                :key="btn.id" 
                class="side-bar-btn">
                <i class="folder-icon" :class="btn.icons.join(' ')"></i>
                <p class="text">{{btn.title}}</p> <p class="text" v-if="btn.type==='inbox'">{{inboxMailCounter}}</p>
                </button>
        </section>
    `, data() {
        return {
            navBtns: [
                {
                    id: 'btn0',
                    title: 'All',
                    type: '',
                    icons: ['fa-solid', 'fa-inbox'],

                },
                {
                    id: 'btn1',
                    title: 'Text',
                    type: 'NoteTxt',
                    icons: ['fa-solid', 'fa-font'],

                },
                {
                    id: 'btn2',
                    title: 'Image',
                    type: 'NoteImg',
                    icons: ['fa-regular', 'fa-image'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn3',
                    title: 'Todos',
                    type: 'NoteTodos',
                    icons: ['fa-solid', 'fa-list'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn4',
                    title: 'Video',
                    type: 'NoteVideo',
                    icons: ['fa-brands', 'fa-youtube'],
                    inboxCount: 'inbox'
                },
                {
                    id: 'btn5',
                    title: 'Audio',
                    type: 'NoteAudio',
                    icons: ['fa-solid', 'fa-microphone'],
                    inboxCount: 'inbox'
                },

            ],
            active: 'All'
        }

    },
    computed: {
        sideBarExtend() {
            return {
                extend: this.isSideBarExtend
            }
        }
    }, 
    methods: {
        setFilterBy(filterBy) {
            this.changeFolder(filterBy)
            this.$emit('setFilterBy', filterBy)
        },
        changeFolder(folderName) {
            this.active = folderName
        }
    },
}