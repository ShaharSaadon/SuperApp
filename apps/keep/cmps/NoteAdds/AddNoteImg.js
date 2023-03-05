import UploadImage from "./UploadImage.js"

export default {
    props: ['info'],
    template: `
    <textarea 
        ref="textarea" 
        class="note-input-txt" 
        v-model="info.iUrl" 
        placeholder="Enter Image Url...">
    </textarea>

    <UploadImage @uploadImage="uploadImage"/>

    `, components:{
        UploadImage,
    },
    methods: {
        uploadImage(imageUrl){
            this.info.iUrl=imageUrl
            this.$emit('updateInfo',this.info)
        }
    },
}
