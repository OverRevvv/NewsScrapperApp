<script setup>
import { ref, onBeforeMount } from 'vue';
import axios from 'axios'
const articles = ref([]);
const url = "http://localhost:3000/tech";
// onMounted(() => {
onBeforeMount(() => {
    axios.get(url)
        .then(response => {
            articles.value = response.data
        })
        .catch(error => {
            console.error(error);
        })
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
        <div class="cards" v-for="(article, index) in articles" :key="index">
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
.techCover {
    width: 100%;
    height: auto;
    overflow: hidden;
}
.techCover img{
    width: 80%;
}
.preview {
    height: 10%;
    width: 100%;
    overflow: hidden;
}
.preview p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>