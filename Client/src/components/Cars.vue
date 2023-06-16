<script setup>
import { ref } from 'vue';
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