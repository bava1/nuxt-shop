<template>
    <section class="posts">
        <div class="posts-title d-flex align-items-center">
            <Icon class="posts-title_icon" name="mdi:comment-processing-outline" color="black" />
            <h2 class="pb-2">Posts List</h2>
        </div>

        <div class="input-group posts-filter my-3">
          <input v-model="search" placeholder="search post" type="text" class="form-control ">
          <span className="input-group-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                className="bi bi-search" viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
          </span>
        </div>

        <div v-for="post of filteredPosts" :key="post">
        <button 
            @click.prevent="openPost(post.id)"
            type="button" 
            class="btn btn-outline-success mt-2 btn-sm">
            {{ post.title }}
        </button>
        </div>
    </section>
</template>
  
<script setup>
import { onMounted, ref, computed } from 'vue'
const router = useRouter()
const posts = ref()
const search = ref('');
useHead({title:'NuxtEx posts'})

const openPost = (post) => {
    router.push({path: `/posts/${post}` })
}

onMounted(async () => {
    try {
      const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts`)
      posts.value = post.value
    } catch {
      console.log(error)
    }
})

const filteredPosts = computed(() => {
  const query = search.value.toLowerCase().trim();
  return query
    ? posts.value.filter((post) =>
        post.title.toLowerCase().includes(query)
      )
    : posts.value;
});

</script>

<style scoped lang="scss">
.posts {
  &-title {
    color: #049068 !important;

    &_icon {
      font-size: 36px;
      margin: 0 5px 8px 0;
      color: #049068 !important;
    }
  }

  &-filter {
    width: 50%;
    border-radius: 4px;
    border: 1px solid  #049068 ;
  }
}


</style>