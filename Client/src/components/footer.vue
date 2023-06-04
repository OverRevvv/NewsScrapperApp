<template>
    <footer>
        <span>Created By <a href="https://github.com/OverRevvv">OverRevvv</a> | <span class="far fa-copyright"></span> 2023
            All rights reserved.</span>
    </footer>
</template>

<style scoped>
footer {
    color: #0066ff;
    text-align: center;
    position: relative;
    bottom: 0;
    padding: 5px 10px;
    width: 100vw;
    background: rgba(0, 0, 0, 0.589);
    backdrop-filter: saturate(200%) blur(50px);
    font-family: 'Source Code Pro', monospace;
    user-select: none;
}

footer span a {
    color: #b500ff;
    text-decoration: none;
    text-shadow: 1px 1px 0 black;
}

footer span a:hover {
    text-decoration: underline;
}
</style>