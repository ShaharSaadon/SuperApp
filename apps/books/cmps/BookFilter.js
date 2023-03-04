export default {
    template: `
        <section class="book-filter">
            <h3>Filter</h3>
            <p>Title:</p>
            <input 
            v-model="filterBy.title"
            @input="filter" 
            placeholder="Search"
            type="text" />
            
            <p>Max price:</p>
                <input 
                v-model="filterBy.maxPrice"
                @input="filter" 
                placeholder="Max Price"
                type="number" />
        </section>
    `,
    data() {
        return {
            filterBy: { title: '', maxPrice: 250 },
        }
    },
    methods: {
        filter(){
            this.$emit('filter', this.filterBy)
        }
    }
}