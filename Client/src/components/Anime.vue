<script setup>
import { ref, onUpdated } from 'vue';
import G from '../fetchAPI';

// Initial Array to store data that'll be fetced from backend
const articles = ref([]);
// const url = "http://localhost:3000/animenewsnetwork/data";
const url = "/animenewsnetwork/data";

const getData = async () => {
    let rp = await G.doAjax(url);
    if (!rp) return;
    articles.value = rp;
}
getData()

onUpdated(() => {
    window.scrollTo(0, 500);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
})
</script>
<template>
    <div class="container">
        <div class="skeleton" v-if="articles.length == 0">
            <div class="cards" v-for="n in 6" :key="n">
                <div class="skeletonFigure"></div>
                <div class="details">
                    <p class="topicSkeleton"></p>
                </div>
                <h3 class="titleSkeleton"></h3>
                <p class="previewSkeleton"></p>
                <p class="previewSkeleton"></p>
            </div>
        </div>
        <div class="animeCards" v-motion-pop-visible v-for="(article, i) in articles" :key="article.id">
            <a :href="article.link" target="_blank">
                <div class="animeCover"
                    :style="{ background: `url(${article.img}) no-repeat center`, backgroundPosition: `${article.imgStyle}` }">
                </div>
                <div class="animeDetails">
                    <p style="margin-bottom: 10px;"> <time style="margin-bottom: 10px;">{{ article.datetime }}</time> <br>
                        Topic:{{ article.topic }}</p>
                </div>
                <h3 class="animeTitle">{{ article.title }}</h3>
                <div class="animePreview">{{ article.preview }}</div>
            </a>
        </div>
    </div>
</template>
<style scoped>
.animeCards {
    padding: 10px;
    margin: 20px;
    height: 500px;
    width: 410px;
    border: 2px solid rgb(0, 89, 255);
    border-radius: 1.3rem;
    font-family: 'Space Mono', monospace;
    background: transparent;
    backdrop-filter: saturate(100%) blur(40px);
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 1px 1px 0 black;
}

.animeCards a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    width: 100%;
}

.animeDetails {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.animePreview {
    padding: 10px 0;
    font-family: 'Prompt', sans-serif;
    text-align: center;
    font-size: 1rem;
}

.animeCover {
    height: 50%;
    width: 100%;
}

.cards {
    padding: 10px;
    margin: 20px;
    height: 460px;
    width: 410px;
    border: 2px solid rgb(0, 89, 255);
    border-radius: 1.3rem;
    font-family: 'Space Mono', monospace;
    background: transparent;
    backdrop-filter: saturate(160%) blur(40px);
}

.topicSkeleton {
    margin: 0;
}
</style>
