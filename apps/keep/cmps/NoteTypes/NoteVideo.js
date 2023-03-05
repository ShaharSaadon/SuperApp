export default {
    props: ['info'],
    template: `

<div class="note-content">

<h4>{{info.title}}</h4>
<iframe :src="info.vUrl" height="200" width="100%" title="Iframe Example"></iframe>
<ul class="flex clean-list label-list" >
<li v-for="(label,idx) in info.labels" :style="label.style" class="note-label">
        <span class="label-span">{{label.labelType}}</span>
        <span class="delete-btn"  @click="deleteLabel(idx)">x</span>
    </li>
</ul>
<p ref="textarea">{{info.txt}} </p>


</div>
    `,
    data() {
        return {
            mouseOn: false,
        }
    },
    methods: {
        onSave() {
        },

    },
  
}

