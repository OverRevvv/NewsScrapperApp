<template>
    <section>
        <h1 class="animateCharacter">Web Scrapper</h1>
        <p>A Real Time Web Scrapper that is currently Scrapping data from 3 Websites</p>
        <div class="source">
            <ul>
                <li><a href="https://www.animenewsnetwork.com/" target="_blank">Anime News Network</a></li>
                <li><a href="https://www.hotcars.com/" target="_blank">Hot Cars</a></li>
                <li><a href="https://www.developer-tech.com/" target="_blank">Developer Tech</a></li>
            </ul>
        </div>
    </section>
</template>
<style>
section {
    padding: 0;
    height: 100vh;
    width: 100vw;
    background: #11111121;
    backdrop-filter: saturate(100%) blur(40px);
    display: flex;
    justify-content: center;
    flex-direction: column;
    font-family: 'prompt', sans-serif;
    place-items: center;
}

section p {
    padding: 20px 0;
    color: #00e1ff;
    font-size: 1.5rem;

}

.source {
    margin-top: 4rem;
}

.source ul li {
    list-style: none;
}

.source ul li a {
    color: #b500ff;
    font-size: 1.5rem;
    text-decoration: none;
}

.animateCharacter {
    text-align: center;
    text-transform: uppercase;
    background-image: linear-gradient(-225deg,
            #231557 0%,
            #43107a8e 29%,
            #1352ff 67%,
            #00e1ff 100%);
    background-size: auto auto;
    background-clip: border-box;
    background-size: 200% auto;
    color: #fff;
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 2s linear infinite;
    display: inline-block;
    font-size: 8rem;
}

@keyframes textclip {
    to {
        background-position: 200% center;
    }
}

@media screen and (min-width: 340px) and (max-width: 500px) {
    .animateCharacter {
        position: absolute;
        top: 9rem;
        font-size: 3rem;
    }

    .source {
        margin-top: 4rem;
    }
}</style>
