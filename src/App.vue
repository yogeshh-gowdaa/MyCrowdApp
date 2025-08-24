<template>
  <div>
    <HeaderNav />
    <router-view />
    <SiteFooter />
  </div>
</template>

<script setup>
import HeaderNav from './components/HeaderNav.vue'
import SiteFooter from './components/SiteFooter.vue'
</script>
