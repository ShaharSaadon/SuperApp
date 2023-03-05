export default {
    props: ['info'],
    template: `
    <textarea 
                        ref="textarea" 
                        class="note-input-title" 
                        v-model="info.title" 
                        placeholder="Title">
    </textarea>
    `,
}
