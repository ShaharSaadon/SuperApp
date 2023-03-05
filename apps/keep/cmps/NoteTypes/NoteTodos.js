export default {
    props: ['info'],
    template: `

<div class="note-content">

<h4>{{info.title}}</h4>
            <ul>
                <li v-for="todo in active" @click="toggle($event,todo)">
                    {{todo.txt}}
                </li>
            </ul>

            <ul>
                <li v-for="todo in done" @click="toggle($event,todo)" class="doneTodos">
                    {{todo.txt}}
                </li>
            </ul>

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
            mouseOn: false,
        }
    },
    computed: {
        active() {
            return this.info.todos.filter(todo => !todo.doneAt)
        },
        done() {
            return this.info.todos.filter(todo => todo.doneAt)
        },

    }
    , methods: {
        toggle(ev, todo) {
            ev.stopPropagation()
            console.log(todo)
            if (todo.doneAt === null) {
                todo.doneAt = Date.now()
            } else {
                todo.doneAt = null
            }
            this.onSave()
        }, onSave() {
            this.$emit('saveNote')
        },
    },

}

