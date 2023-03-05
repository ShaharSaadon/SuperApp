export default {
    template: `
        <section class="home-page-container">
            <h1>SUPPERAPP</h1>
            <h3>Everything in one Place </h3>
            <div class="home-nav">
                <router-link to="/email/inbox" class="nav-route"><i class="fa-sharp fa-solid fa-envelope"></i>Email </router-link> 
                <router-link to="/notes" class="nav-route"><i class="fa-solid fa-note-sticky"></i>Notes </router-link>
                <router-link to="/books" class="nav-route"><i class="fa-solid fa-book"></i>Books </router-link>
            </div>
            <div>
</div>
<svg class="waves" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
viewBox="0 24 150 28" preserveAspectRatio="none" shape-rendering="auto">
<defs>
<path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
</defs>
<g class="parallax">
<use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
<use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
<use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
<use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
</g>
</svg>
</div>
<!--Waves end-->
        </section>
    `,
}
