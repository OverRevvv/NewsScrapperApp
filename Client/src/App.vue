<script setup>
import navbar from './components/Navbar.vue'
import footerBar from './components/footer.vue';
</script>
<template>
  <navbar />
    <router-view/>
    <footerBar/>
</template>

