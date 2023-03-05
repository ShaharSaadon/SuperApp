import { noteService } from "../services/note.service.js"

export default {
    name: 'LabelPicker',
    props: ['note'],
    template: `

<div class="label-picker">

<ul class="clean-list" @click="hideLabelPicker">
    <li class="label" style="background-color: rgb(224, 49, 49)" @click="addLabel('Critical','rgb(224, 49, 49)')">Critical</li>
    <li class="label" style="background-color: rgb(25, 113, 194)" @click="addLabel('Family','rgb(25, 113, 194)')">Family</li>
    <li class="label" style="background-color: rgb(55, 178, 77)" @click="addLabel('Work','rgb(55, 178, 77)')">Work</li>
    <li class="label" style="background-color: rgb(252, 196, 25)" @click="addLabel('Friends','rgb(252, 196, 25)')">Friends</li>
    <li class="label" style="background-color: rgb(247, 103, 7);" @click="addLabel('Spam','rgb(247, 103, 7)')">Spam</li>
    <li class="label" style="background-color: rgb(174, 62, 201);" @click="addLabel('Memories','rgb(174, 62, 201)')">Memories</li>
    <li class="label" style="background-color: rgb(16, 152, 173);" @click="addLabel('Romantic','rgb(16, 152, 173)')">Romantic</li>
    <li class="label" style="background-color: rgb(100, 220, 220);" @click="addLabel('Coding','rgb(100, 220, 220)')">Coding</li>
</ul>

</div>
    `,
    data() {
        return {}
    },
    methods: {
        addLabel(labelType, color) {
            console.log(this.note)
            this.note.info.labels.push({
                labelType,
                style: {
                    backgroundColor: color,
                },
            })
            console.log(this.note)
            this.onSave()
        },
        onSave() {
            this.$emit('saveNote', this.note)
        },
        hideLabelPicker(){
            this.$emit('hideLabelPicker')
        }
    },

}

