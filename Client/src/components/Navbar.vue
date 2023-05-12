<template>
    <nav class="navbar">
        <a href="#">Anime</a>
        <a href="#">JDM</a>
        <a href="#">Tech</a>
    </nav>
</template>
<style scoped>
.navbar {
    font-family: 'Source Code Pro', monospace;
    background: rgba(0, 0, 0, 0.329);
    backdrop-filter: saturate(180%) blur(10px);
    overflow: hidden;
    border-radius: 10px;
}

.navbar a {
    float: left;
    display: block;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
}

.navbar a:hover {
    background: rgba(0, 0, 0, 0.144);
    backdrop-filter: saturate(180%) blur(10px);
    color: rgb(0, 119, 255);
}

.navbar a.active {
    background-color: #04AA6D;
    color: white;
}

@media (max-width: 768px) {
    .navbar {
        width: 100%;
        display: flex;
        justify-content: space-around;
    }

    .navbar a {
        float: none;
        width: 100%;
    }
}
</style>