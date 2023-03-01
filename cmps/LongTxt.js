export default {
    name: 'longTxt',
    props: ['txt'],
    template: `
    <section >
        <div class="txt-container">
            {{displayTxt}}
            <button class="readMore-btn" @click="onTxtRead" v-if="txt.length > 100">
                read {{isShown ? 'less' :'more'}}
            </button>
        </div>
    </section>
        `,
    components: {},
    created() { 
        console.log('this.txt.length',this.txt.length)
    },
    data() {
        return {
            isShown: false,
        }
    },
    methods: {
        onTxtRead() {
            this.isShown = !this.isShown
        }
    },
    computed: {
        displayTxt() {
            const length = 100
            if(!this.isShown && this.txt.length > length)
            return this.txt.slice(0,length) + '...'
            return this.txt
        },
    },
}
