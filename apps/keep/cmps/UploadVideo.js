export default {
    template: `
       <form>
            <label for="videoUpload">Select a video:</label>
            <input type="file" id="videoUpload" name="videoUpload" accept="video/*" @change="onFileChange">
       </form>
 
       <video :src="videoUrl" controls v-if="videoUrl"></video>
    
    `, data() {
        return {
            videoUrl: null
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
                this.videoUrl  = reader.result;
            });
            reader.readAsDataURL(file);
        }
    }, watch: {
        videoUrl() {
            this.$emit('uploadVideo', this.videoUrl)

        }
    }
}