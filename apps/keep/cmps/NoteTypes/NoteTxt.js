export default {
    props: ['info'],
    template: `

<div class="note-content">

<h4>{{info.title}}</h4>
<p ref="textarea">{{info.txt}} </p>
<ul class="flex clean-list label-list" >
    <li v-for="(label,idx) in info.labels" :style="label.style" class="note-label">
        <span class="label-span">{{label.labelType}}</span>
        <span class="delete-btn"  @click="deleteLabel(idx)">x</span>
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
        deleteLabel(idx){
            console.log(idx)
        }
    },
  
}

