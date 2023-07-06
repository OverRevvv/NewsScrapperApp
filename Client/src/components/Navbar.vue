<template>
    <header>
        <router-link to="/" class="logo">
            <img src="/src/assets/app.png" alt="LOGO">
        </router-link>
        <ul>
            <li><router-link to="/anime">Anime</router-link></li>
            <li><router-link to="/cars">Cars</router-link></li>
            <li><router-link to="/tech">Tech</router-link></li>
        </ul>
    </header>
</template>
<style>
header {
    position: sticky;
    z-index: 10;
    top: 0;
    padding: 3px 100px;
    left: 0;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: rgba(0, 0, 0, 0.589);
    backdrop-filter: saturate(180%) blur(20px);
    font-family: 'Source Code Pro', monospace;
    user-select: none;
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
    color: #0066ff;
    border-radius: 20px;
    text-shadow: 1px 1px 0 black;
}

header ul li a:hover {
    padding-bottom: 20px;
    border-radius: 0;
    border-bottom: 5px solid #b500ff;
    color: #b500ff;
}

header ul li a:focus {
    outline: none;
}

header ul li a:hover,
.router-link-active {
    padding-bottom: 14px;
    border-radius: 0;
    border-bottom: 3px solid #b500ff;
    /* color: #2b1055; */
    color: #b500ff;
}

header .logo:hover,
header .logo.router-link-active {
    border-bottom: none;
    color: inherit;
    padding-bottom: 0;
}

@media screen and (min-width: 340px) and (max-width: 500px) {
    header {
        padding: 0px 0;
        position: fixed;
        top: 0;
        width: 100vw;
        align-items: center;
    }

    header .logo {
        position: relative;
        left: 2rem;
    }

    header .logo img {
        width: 2.5rem;
    }

    header ul li a:hover,
    .router-link-active {
        padding-bottom: 10px;
        border-bottom: 4px solid #b500ff;
    }

    header ul li {
        list-style: none;
        margin-left: 8px;
    }

    header ul li a {
        font-size: 1.2rem;
        text-decoration: none;
        padding: 0 15px;
        border-radius: 20px;
    }
}
</style>