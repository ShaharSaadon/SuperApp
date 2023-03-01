import {noteService} from '../services/note.service.js'
import { showErrorMsg, showSuccessMsg } from '../../../services/event-bus.service.js'
import NoteTxt from '../cmps/NoteTxt.js'



export default {
    name: 'Note Index',
	template: `

        <section v-if="notes">
                <pre>
                    {{notes}}
                </pre>
                <div v-for="note in notes">
                    <component 
                        :is="note.type"  
                        :info="note.info" 
                         />
                </div>
        </section>
    `,
    data(){
        return{
            notes: null,
        }
    },
    created() {
        noteService.query()
            .then(notes => {
                console.log(notes);
                this.notes = notes
            })

    },
    components:{
        NoteTxt
    }
}
