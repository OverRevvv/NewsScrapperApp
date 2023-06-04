<script setup>
import navbar from './components/Navbar.vue'
import footerBar from './components/footer.vue';
</script>
<template>
  <navbar />
    <router-view v-slot="{ Component }">
        <transition enter-active-class="animate__animated animate__fadeInUp" mode="out-in">
            <component :is="Component" />
        </transition>
    </router-view>
    <footerBar/>
</template>

