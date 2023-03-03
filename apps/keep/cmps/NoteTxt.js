export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
<p ref="textarea">{{info.txt}} </p>
<ul class="flex clean-list">
    <li v-for="label in info.labels" :style="label.style">
        {{label.labelType}}
    </li>
</ul>

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

