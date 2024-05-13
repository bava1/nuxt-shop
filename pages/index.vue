<template>
  <div class="homepage">
    <h2 class="homepage-title">Hello World !!!</h2>
    <Clock />
    <img class="homepage-logo" src="../assets/img/page.png" />
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import Clock from '../components/Clock.vue'
const title = ref('NuxtEx homepage')
const description = ref('My Nuxt App')

useHead({
  title,
  meta: [{
    name: 'description',
    content: description
  }]
})

</script>

<style lang="scss">

.homepage {
  width: 100%;
  padding: 70px 0;
  text-align: center;

  &-title {
      color: #049068 !important;
  }

  &-logo {
    width: 90%;
    margin: 0 auto;
  }
}

</style>
