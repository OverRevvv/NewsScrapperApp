<script setup>
import { onMounted, ref, onBeforeMount } from 'vue';
import axios from 'axios'

// Initial Array to store data that'll be fetced from backend
const articles = ref([]);
const url = "http://localhost:3000/animenewsnetwork";
// const url = "https://jsonplaceholder.typicode.com/todos/1"

// onMounted(() => {
onBeforeMount(() => {
    axios.get(url)
        .then(response => {
            articles.value = response.data
            // console.log(articles.value[0]);
        })
        .catch(error => {
            console.error(error);
        })
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
        <TransitionGroup name="fade">
            <div class="animeCards" v-for="(article, i) in articles" :key="article.id">
                <a :href="article.link" target="_blank">
                    <div class="animeCover"
                        :style="{ background: `url(${article.img}) no-repeat center`, backgroundPosition: `${article.imgStyle}` }">
                    </div>
                    <div class="animeDetails">
                        <p> <time>{{ article.datetime }}</time> Topic:{{ article.topic }}</p>
                    </div>
                    <h4 class="animeTitle">{{ article.title }}</h4>
                    <div class="animePreview">{{ article.preview }}</div>
                </a>
            </div>
        </TransitionGroup>
    </div>
</template>
<style scoped>
.animeCards {
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
    padding: 10px;
    font-family: 'Prompt', sans-serif;
    width: 100%;
    height: 15%;
    overflow: hidden;
    text-align: center;
}

.animePreview p {
    margin: 0;
    padding: 0;
    font-size: 0.8rem;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.animeCover {
    height: 60%;
    width: 100%;
}

.fade-enter-from {
    transition: opacity 0.5s;
}

.fade-leave-to {
    opacity: 1;
}
.fade-enter-active {
    transition: opacity 0.5s;
}
.cards{
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
.topicSkeleton{
    margin: 0;
}
</style>
