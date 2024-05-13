<template>
  <div class="about">
    <h2 class="about-title">About</h2>
    <img class="about-logo my-3" src="../assets/img/LogoProfil.jpg" />
    <a class="about-link" href="https://bavastudio.eu/#/" target="_blank">Created in bavastudio</a>
  </div>
</template>

<script setup>
useHead({title:'NuxtEx about'})

</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-direction: column;
  width: 20%;

  &-title {
    color: #049068 !important;
  }

  &-logo {
    width: 90%;
    border-radius: 8px;
  }

  &-link {
    text-decoration: none;
    color: #01b582 !important;
    font-size: 1.2rem;
    font-weight: 500;
  }

  &-link:hover {
    color: #015eb5 !important;
  }

}

</style>
