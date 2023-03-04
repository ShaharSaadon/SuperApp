export default {
	template: `
        <section class="home-page-container">
            <h1>SUPPERAPP</h1>
            <h3>Everything in one Place </h3>
            <div class="home-nav">
                <router-link to="/email/inbox" class="nav-route"><i class="fa-sharp fa-solid fa-envelope"></i>email </router-link> 
                <router-link to="/notes" class="nav-route"><i class="fa-solid fa-note-sticky"></i>notes </router-link>
                <router-link to="/books" class="nav-route"><i class="fa-solid fa-book"></i>Books </router-link>
            </div>
        </section>
    `,
}
