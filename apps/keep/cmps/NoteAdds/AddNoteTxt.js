
export default {
    props: ['info'],
    template: `
        <textarea  
            ref="textarea" 
            class="note-input-txt" 
            placeholder="Take a note..."
            v-model="info.txt">
        </textarea>
    `,
}
