<script setup>
import navbar from './components/Navbar.vue'
import footerBar from './components/footer.vue';
</script>
<template>
  <navbar />
    <!-- <router-view v-slot="{ Component }">
        <transition>
            <component :is="Component" />
        </transition>
    </router-view> -->
    <router-view/>
    <footerBar/>
</template>

