export default {
    props: ['info',],
    template: `
          <textarea  
                class="note-input-title" 
                v-model="info.title" 
                placeholder="Title">
            </textarea>
    `,
}
