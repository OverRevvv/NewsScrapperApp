<script setup>
import { onMounted, ref } from 'vue';
import axios from 'axios'

// Initial Array to store data that'll be fetced from backend
const articles = ref([]);
const url = "http://localhost:3000/animenewsnetwork";
// const url = "https://jsonplaceholder.typicode.com/todos/1"

onMounted(() => {
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
        <div class="cards" v-for="(article, index) in articles" onclick="article.link" :key="index">
            <a :href="article.link">
                <div class="cover"
                    :style="{ background: `url(${article.img}) no-repeat center`, backgroundPosition: `${article.imgStyle}` }">
                </div>
            </a>
            <div class="details">
                <p> <time>{{ article.datetime }}</time>  Topic:{{ article.topic }}</p>
            </div>
            <h4 class="title">{{ article.title }}</h4>
            <div class="preview">{{ article.preview }}</div>
        </div>
    </div>
</template>
<style scoped>
.container {
    height: fit-content;
    width: fit-content;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
}

.details {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
}

.preview {
    width: 100%;
    height: 15%;
    overflow: hidden;
    text-align: center;
}

.preview p {
    margin: 0;
    padding: 0;
    white-space: wrap;
    overflow: hidden;
    text-overflow: ellipsis;
}

.cards {
    padding: 10px;
    margin: 20px;
    height: 380px;
    width: 350px;
    border: 2px solid rgb(0, 89, 255);
    border-radius: 1.3rem;
    /* background: rgba(0, 0, 0, 0.384); */
    background: transparent;
    backdrop-filter: saturate(100%) blur(20px);
}


.cover {
    height: 60%;
    width: 100%;
}
</style>
