export default {
	template: `
        <header class="app-header">
            <div class="logo">
            <h1>SuperApp</h1> <img src="./assets/img/SupperApp.png" class="logo-img">
            </div>
            <i class="main-nav-btn fa-solid fa-bars" @click="showHeader=!showHeader"></i>
            <nav class="nav-bar" v-if="showHeader" @click="showHeader=!showHeader">
                <router-link to="/" class="nav-route"><i class="fa-sharp fa-solid fa-house"></i>Home</router-link> 
                <router-link to="/about" class="nav-route"></i><i class="fa-solid fa-address-card"></i>About </router-link> 
                <router-link to="/email/inbox" class="nav-route"><i class="fa-sharp fa-solid fa-envelope"></i>email </router-link> 
                <router-link to="/notes" class="nav-route"><i class="fa-solid fa-note-sticky"></i>notes </router-link>
                <router-link to="/books" class="nav-route"><i class="fa-solid fa-book"></i>Books </router-link>
            </nav>
        </header>
    `,data() {
        return {
            showHeader:false,
        }
    },
}   
