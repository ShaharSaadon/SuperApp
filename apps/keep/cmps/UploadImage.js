export default {
    template: `
        <form>
            <label for="imageUpload">Select an image:</label>
            <input type="file" id="imageUpload" name="imageUpload" @change="onFileChange">
        </form>
        
    `, data() {
        return {
            imageUrl: null
        }
    },
    methods: {
        onFileChange(event) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.addEventListener('load', () => {
              this.imageUrl = reader.result;
            });
            reader.readAsDataURL(file);
          }
    }, watch:{
        imageUrl(){
                this.$emit('uploadImage', this.imageUrl)
            
        }
    }
}