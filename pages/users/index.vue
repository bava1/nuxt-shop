<template>
  <section class="users">
    <div class="users-title d-flex align-items-center">
      <Icon class="users-title_icon" name="mdi:account-supervisor-outline" color="black" />
      <h2 class="pb-2">Users List</h2>
    </div>
    <div v-for="user of users" :key="user">
      <button 
          @click.prevent="openUser(user.id)" 
          type="button" 
          class="btn btn-outline-success mt-2 btn-sm">
          {{ user.name }}
      </button>
    </div>
    <div class="users-api">
      <h6>Get /api/user</h6>
      <div>{{ apiUser?.name }}</div>
      <div>{{ apiUser?.phone }}</div>
      <div>{{ apiUser?.email }}</div>
      <div>{{ apiUser?.age }}</div>
      <div>{{ apiUser?.job }}</div>
    </div>
  </section>
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
const router = useRouter()
const users = ref([])
useHead({title:'NuxtEx users'})
const { data: apiUser } = useAsyncData(() => $fetch('/api/user'))
// console.log('api user', apiUser)

const openUser = (user) => {
  router.push({path: `/users/${user}` })
}

onMounted(async () => {
  try {
    const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/users`)
    users.value = post.value
  } catch {
    console.log(error)
  }
})

</script>

<style scoped lang="scss">

.users-title {
  color: #049068 !important;
  
  &_icon {
    font-size: 42px;
    margin: 0 5px 8px 0;
    color: #049068 !important;
  }

}
.users-api {
  width: 20%;
    margin: 12px 0;
    padding: 15px;
    border-radius: 8px;
    color: #049068;
    border: 1px solid #049068;
}

</style>