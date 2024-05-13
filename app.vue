<template>
  <div class="def-layout">
    <Navbar/>
    <div class="container">
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>
    </div>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar'
</script>

<style scoped>

.def-layout {
  width: 100%;
  min-height: 100vh;
  background-color: #405a6e !important;
}

.container {
  padding: 100px 60px;
  min-height: 100vh;
  background-color: white;
}
</style>