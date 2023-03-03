import UploadVideo from "./UploadVideo.js"

export default {
    props: ['info'],
    template: `
    <textarea 
        ref="textarea" 
        class="note-input-txt" 
        v-model="info.vUrl" 
        placeholder="Enter Video Url...">
    </textarea>

    <UploadVideo @uploadVideo="uploadVideo"/>

    `, components:{
        UploadVideo,
    },
    methods: {
        uploadVideo(videoUrl){
            this.info.vUrl=videoUrl
            this.$emit('updateInfo',this.info)
        }
    },
}
