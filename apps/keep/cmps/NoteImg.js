export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
<img :src="info.iUrl">
<p ref="textarea">{{info.txt}} </p>

</div>
    `,
    data() {
        return {        }
    },
    methods: {
        onSave() {
            this.$emit('saveNote')
        },

    },
  
}

