export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
<iframe :src="info.vUrl" height="200" width="100%" title="Iframe Example"></iframe>
<ul class="flex clean-list" >
    <li v-for="label in info.labels" :style="label.style">
        {{label.labelType}}
    </li>
</ul>
<p ref="textarea">{{info.txt}} </p>


</div>
    `,
    data() {
        return {

        }
    },
    methods: {
        onSave() {
        },

    },
  
}

