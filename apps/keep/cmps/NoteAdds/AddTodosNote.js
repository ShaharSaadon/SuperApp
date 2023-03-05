export default {
    props: ['info'],
    template: `
        <input 
                        
                        v-for="todo in info.todos"
                        type="text" 
                        ref="textarea"
                        :value="todo.txt"
                        class="note-input-txt">
        <input 
                        type="text" 
                        ref="textarea"
                        v-model="newTodo"
                        class="note-input-txt" 
                        placeholder="List item">

    <button @click="addTodo">add</button>

    `,data() {
        return {
            length: this.info.todos.length-1,
            newTodo: '',
        }
    },
    methods: {
        addTodo(){
        if(this.newTodo==='') return
        this.info.todos.push({txt:this.newTodo,doneAt: null})
        this.newTodo=''
        }
    },
}
