export default {
    props: ['info'],
    template: `
       <input type="text" 
                        class="note-input-txt" 
                        v-model="info.aUrl"
                        placeholder="Enter Audio Url...">   
    `,
}
