export default {
    props: ['info'],
    template: `
       <audio controls v-if="info.aUrl">
            <source :src="info.aUrl" type="audio/mpeg">
            </audio> 
    `,
}
