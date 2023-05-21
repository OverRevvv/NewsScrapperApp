<template>
    <header>
        <router-link to="/" class="logo">
            <img src="src/assets/app.png" alt="LOGO">
        </router-link>
        <ul>
            <li><router-link to="/anime">Anime</router-link></li>
            <li><router-link to="/cars">Cars</router-link></li>
            <li><router-link to="/tech">Tech</router-link></li>
        </ul>
    </header>
    <router-view />
    <!-- <router-view v-slot="{ Component}">
        <transition 
        enter-active-class="animate__animated animate__fadeInRight" 
        leave-active-class="animate__animated animate__fadeInLeft"
         mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view> -->
</template>
<style>
header {
    position: relative;
    top: 0;
    padding: 10px 100px;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.589);
    backdrop-filter: saturate(180%) blur(20px);
    font-family: 'Source Code Pro', monospace;
}

header .logo {
    color: #fff;
    font-weight: 700;
    text-decoration: none;
    font-size: 2em;
    text-transform: uppercase;
}

header .logo img {
    width: 3rem;
    transform: translateY(6px);
}

header ul {
    display: flex;
    justify-content: center;
    align-items: center;
}

header ul li {
    list-style: none;
    margin-left: 20px;
}

header ul li a {
    font-size: 1.5rem;
    text-decoration: none;
    padding: 6px 15px;
    color: #fff;
    border-radius: 20px;
}

header ul li a:hover {
    padding-bottom: 20px;
    border-radius: 0;
    border-bottom: 5px solid #b500ff;
    /* color: #2b1055; */
    color: #b500ff;
}

header ul li a:hover,
.router-link-active {
    padding-bottom: 20px;
    border-radius: 0;
    border-bottom: 5px solid #b500ff;
    /* color: #2b1055; */
    color: #b500ff;
}

header .logo:hover,
header .logo.router-link-active {
    border-bottom: none;
    color: inherit;
    padding-bottom: 0;
}
</style>