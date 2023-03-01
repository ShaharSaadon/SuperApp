export default {
    props: ['notes'],
    template: `
        <article class="note-preview">
            <h3>{{ note.title }}</h3>
        </article>
    `,
}