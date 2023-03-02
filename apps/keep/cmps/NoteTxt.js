export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
<p ref="textarea">{{info.txt}} </p>

</div>
    `,
    data() {
        return {
            txt: this.info.txt
        }
    },
    methods: {
    },
  
}

