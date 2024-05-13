<template>
  <section class="user">
    <h4 class="user-title mb-3">{{ user.name }}</h4>
    <div class="user-item">
      <Icon class="user-item_icon" name="mdi:account" color="black" />
      <h5>{{ user.username  }}</h5> 
    </div>
    <div class="user-item">
      <Icon class="user-item_icon" name="mdi:email-outline" color="black" />
      <h5>{{ user.email  }}</h5> 
    </div>
    <div class="user-item">
      <Icon class="user-item_icon" name="ic:phone" color="black" />
      <h5>{{ user.phone }}</h5> 
    </div>
    <div class="user-item">
      <Icon class="user-item_icon" name="mdi:web" color="black" />
      <h5>{{ user.website }}</h5> 
    </div>
    <div class="user-item">
      <Icon class="user-item_icon" name="mdi:arrow-top-right-bold-box-outline" color="black" />
      <h5>Company:</h5> 
    </div>
    <h6 class="user-company">{{ user.company.name }}</h6>
    <h6 class="user-company">{{ user.company.bs }}</h6>
    <h6 class="user-company">{{ user.company.catchPhrase }}</h6>  
    <div class="user-item">
      <Icon class="user-item_icon" name="mdi:home-city" color="black" />
      <h5>Address:</h5> 
    </div>
    <h6 class="user-company">{{ user.address.city }}</h6>     
    <h6 class="user-company">{{ user.address.street }}</h6>     
    <h6 class="user-company">{{ user.address.suite }}</h6>     
    <h6 class="user-company">{{ user.address.zipcode }}</h6>   
    
    <NuxtLink class="pt-3" active-class="active" to="/users">
      <button type="button" class="btn btn-outline-success mt-3 btn-sm">Back to list</button>
    </NuxtLink>
  </section>
</template>
  
<script setup>
import { onMounted, ref } from 'vue'
const route = useRoute()
const user = ref()

try {
  const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/users/${route.params.id}`)
  user.value = post.value

} catch {
  console.log(error)
}

</script>

<style scoped lang="scss">

.user {
  &-title {
    color: #049068 !important;
  }

  &-item {
    display: flex;
    align-items: center;

    &_icon {
      padding: 0 7px 5px 0;
      font-size: 24px;
      color: #049068 !important;
    }
  }

  &-company {
    padding-left: 25px;
  }
}

</style>