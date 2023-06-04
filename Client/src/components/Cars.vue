<script setup>
import { ref, onUpdated } from 'vue';
import G from '../fetchAPI';
const articles = ref([]);
// const url = "http://localhost:3000/cars/data";
const url = "/cars/data";

const getData = async ()=>{
    let rp=  await G.doAjax(url);
    if(!rp) return;
    articles.value = rp;
}
getData()
onUpdated(() => {
    window.scrollTo(0, 1000);
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 10);
})
</script>
<template>
    <div class="container">
        <div class="skeleton" v-if="articles.length == 0">
            <div class="cards" v-for="n in 4" :key="n">
                <div class="skeletonFigure"></div>
                <div class="details">
                    <p class="topicSkeleton"></p>
                </div>
                <h3 class="titleSkeleton"></h3>
                <p class="previewSkeleton"></p>
                <p class="previewSkeleton"></p>
            </div>
        </div>
        <div class="cards" v-motion-pop-visible v-for="(article, index) in articles" :key="index">
            <a :href="article.link" target="_blank">
                <div class="figure" v-html="article.figure"></div>
                <div class="details">
                    <p> <time>{{ article.time }}</time> <br> Topic: {{ article.label }}</p>
                </div>
                <h3 class="title">{{ article.title }}</h3>
                <p class="preview">{{ article.content }}</p>
            </a>
        </div>
    </div>
</template>
<style>
.cards {
    padding: 10px;
    margin: 20px 60px;
    height: 550px;
    width: 500px;
    border: 2px solid rgb(0, 89, 255);
    border-radius: 1.3rem;
    color: white;
    background: transparent;
    backdrop-filter: saturate(100%) blur(40px);
    font-family: 'Space Mono', monospace;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-shadow: 1px 1px 0 black;
}

.cards a {
    text-decoration: none;
    color: inherit;
    background-color: transparent;
    display: inline-block;
    width: 100%;
}

.details {
    margin: 0;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.preview {
    width: 100%;
    text-align: center;
    font-family: 'Prompt', sans-serif;
}

.title {
    padding: 10px 0px;
}

/* FOR SKELETON */
.skeleton {
    background: transparent;
    backdrop-filter: saturate(500%) blur(100px);
    min-height: 100vh;
    height: fit-content;
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    transition: opacity 0.5s ease-out;
}

.skeletonFigure {
    height: 60%;
    width: 100%;
    background: #11111173;
    border-radius: 1rem;
}

.topicSkeleton {
    background-color: #11111171;
    border-radius: 2rem;
    margin: 1rem;
    height: 1.5rem;
    width: 40%;
}

.titleSkeleton {
    text-align: center;
    margin: 0 auto;
    background-color: #1111116c;
    border-radius: 2rem;
    padding: 1rem;
    height: 1.5rem;
    width: 80%;
    margin-bottom: 30px;
}

.previewSkeleton {
    text-align: center;
    margin: 10px auto;
    background-color: #11111175;
    border-radius: 2rem;
    height: 1.5rem;
    width: 90%;
}

@media screen and (min-width: 340px) and (max-width: 500px) {
    .cards {
        padding: 10px;
        margin: 20px;
        height: 450px;
        width: 410px;
        border: 2px solid rgb(0, 89, 255);
        border-radius: 1.3rem;
        font-family: 'Space Mono', monospace;
        background: transparent;
        backdrop-filter: saturate(100%) blur(40px);
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .detials {
        margin: 0;
        padding: 0;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .cards a {
        text-decoration: none;
        color: inherit;
        background-color: transparent;
        width: 100%;
    }

    .preview {
        padding: 10px 0;
        font-family: 'Prompt', sans-serif;
        text-align: center;
        font-size: 1rem;
    }
    .topicSkeleton {
        margin: 0;
    }
    .figure {
        height: 50%;
        width: 100%;
    }
}
</style>
