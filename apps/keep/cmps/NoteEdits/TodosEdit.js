export default {
    props: ['info'],
    template: `
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
    `, 
    
    computed: {
        active() {
            return this.info.todos.filter(todo => !todo.doneAt)
        },
        done() {
            return this.info.todos.filter(todo => todo.doneAt)
        },
    },
    methods: {
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
}
