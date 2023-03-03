export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
<p ref="textarea">{{info.txt}} </p>
<ul class="flex clean-list" >
    <li v-for="label in info.labels" :style="label.style" class="note-label">
        <span  @mouseover="mouseOn=true" @mouseleave="mouseOn=false">{{label.labelType}}</span>
        <span class="delete-label" v-if="mouseOn" @click="deleteLabel">x</span>
    </li>
</ul>

</div>
    `,
    data() {
        return {
            txt: this.info.txt,
            mouseOn: false,
        }
    },
    methods: {
    },
  
}

