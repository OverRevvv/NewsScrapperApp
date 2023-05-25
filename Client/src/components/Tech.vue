<script setup>
import { ref, onBeforeMount, onUpdated } from 'vue';
import axios from 'axios'
const articles = ref([]);
const url = "http://localhost:3000/tech/data";
onBeforeMount(() => {
    axios.get(url)
        .then(response => {
            articles.value = response.data
        })
        .catch(error => {
            console.error(error);
        })
})
onUpdated(()=>{
    // setTimeout(()=>{
    window.scrollTo(0,1000);
    // },100);
    setTimeout(()=>{
    window.scrollTo(0,0);
    },10);
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
        <div class="cards" v-motion-slide-visible-left v-for="(article, index) in articles" :key="index">
            <a :href="article.articleLink" target="_blank">
                <div class="techCover">
                    <img class="coverImage" :src="article.figure" alt="">
                </div>

                <div class="details">
                    <div v-html="article.timeAndTopic"></div>
                </div>
                <h3 class="title">{{ article.title }}</h3>
                <p class="preview">{{ article.content }}</p>
            </a>
        </div>
    </div>
</template>
<style scoped>
/* .cards{
    width: 400px; 
    height: 400px;
} */

.techCover {
    width: 100%;
    overflow: hidden;
}

.techCover img {
    width: 95%;
}
</style>