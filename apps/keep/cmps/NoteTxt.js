export default {
    props: ['info'],
    template: `
<!-- <h2>{{info.title}}</h2> -->

<div class="content">
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
        onSave() {
            this.$emit('saveNote')
        },

    },
  
}

