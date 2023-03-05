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
<li v-for="(label,idx) in info.labels" :style="label.style" class="note-label">
        <span class="label-span">{{label.labelType}}</span>
        <span class="delete-btn"  @click="deleteLabel(idx)">x</span>
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

