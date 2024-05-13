<template>
    <section class="post">
        <h4 class="post-title mt-3">{{ postItem.title }}</h4>
        <div class="post-body mt-3">
            <h5>{{ postItem.body }}</h5>
            <h5 class="mt-4 post-title">Comments:</h5>
            <div class="post-comments mt-3" v-for="comment of comments" :key="comment">
                <h6>{{ comment.email }}</h6>
                <div>{{ comment.body }}</div>
            </div> 
        </div>
        <NuxtLink class="pt-3" active-class="active" to="/posts">
            <button type="button" class="btn btn-outline-success mt-3 btn-sm">Back to list</button>
        </NuxtLink>
    </section>
</template>

<script setup>
import { ref } from 'vue'
const route = useRoute()
const postItem = ref()
const comments = ref()

try {
  const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
  postItem.value = post.value
} catch {
  console.log(error)
}

try {
  const { data: comment } = await useFetch(`https://jsonplaceholder.typicode.com/comments`)
  comments.value = comment.value.filter(com => com.postId === postItem.value.id)
} catch {
  console.log(error)
}

</script>

<style scoped lang="scss">

.post {
  &-title {
    color: #049068 !important;
  }

  &-body {
    width: 80%;
    border-radius: 6px;
  }

  &-comments {
    width: 90%;
    padding: 15px;
    margin: 3px 0 3px 20px;
    border-radius: 6px;
    background-color: #e9faff;
  }

}

</style>