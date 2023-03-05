export default {
    props: ['info'],
    template: `
             <textarea 
            @input="resize()" 
            ref="textarea" 
            class="note-input-txt" 
            v-model="info.txt" 
            placeholder="Take a note...">
        </textarea> 
    `,
}
