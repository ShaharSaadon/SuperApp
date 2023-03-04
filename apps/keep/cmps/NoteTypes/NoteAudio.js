export default {
    props: ['info'],
    template: `

<div class="note-content">

<h4>{{info.title}}</h4>

<audio controls>
  <source :src="info.aUrl" type="audio/mpeg">
</audio>
<p ref="textarea">{{info.txt}} </p>
<ul class="flex clean-list label-list" >
    <li v-for="label in info.labels" :style="label.style" class="note-label" >
        <span @mouseover="mouseOn=true" @mouseleave="mouseOn=false">{{label.labelType}} </span>
        <span class="delete-label" v-if="mouseOn" @click="deleteLabel">x</span>
    </li>
   
</ul>
</div>
    `,
    data() {
        return {
            mouseOn: false,
                }
    },
    methods: {
        onSave() {
            this.$emit('saveNote')
        },

    },
  
}

