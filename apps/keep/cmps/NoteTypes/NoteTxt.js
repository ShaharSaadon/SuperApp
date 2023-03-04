export default {
    props: ['info'],
    template: `

<div class="note-content">

<h4>{{info.title}}</h4>
<p ref="textarea">{{info.txt}} </p>
<ul class="flex clean-list label-list" >
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

