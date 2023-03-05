export default {
    props: ['info'],
    template: `
        <iframe 
                :src="info.vUrl" 
                width="100%" 
                title="Iframe Example">
        </iframe>
    `,
}
