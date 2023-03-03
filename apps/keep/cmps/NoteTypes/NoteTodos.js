export default {
    props: ['info'],
    template: `

<div class="note-content">

<h3>{{info.title}}</h3>
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

            <ul class="flex clean-list" >
    <li v-for="label in info.labels" :style="label.style">
        {{label.labelType}}
    </li>
</ul>


</div>
    `,
    data() {
        return {}
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

        },
    },

    todos: [
        { txt: 'Driving license', doneAt: null },
        { txt: 'Coding power', doneAt: 187111111 }
    ],
}

