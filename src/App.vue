<template>
<window>
    <RouterView class="routerview"/>
</window>
<toolbar></toolbar>
</template>

<script setup>
import { RouterView,RouterLink } from 'vue-router';
import toolbar from './components/toolbar.vue'
import window from './components/window.vue'
</script>

<style scoped>

</style>
