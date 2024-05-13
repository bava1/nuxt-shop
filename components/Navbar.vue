<template>
  <nav class="nav navbar navbar-expand-lg navbar-light bg-light">
    <div class="nav-main container-fluid">
      <div class="nav-main_logos">
        <img class="nav-logo" src="../assets/img/Logo.png" />
      </div>

      <div class="nav-main_menu">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <Nuxt-Link  active-class="active" class="nav-link " to="/" exact>
              Home
            </Nuxt-Link>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/tasks">
              Tasks
            </NuxtLink>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/posts">
              Posts
            </NuxtLink>
          </li>
          <li class="nav-item">
            <Nuxt-Link active-class="active" class="nav-link" to="/users">
              Users
            </Nuxt-Link>
          </li>
          <li class="nav-item">
            <NuxtLink active-class="active" class="nav-link" to="/about">
              About
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div class="nav-main_user">
        <Icon class="nav-icon" name="ic:round-account-circle" color="black" />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="scss">

.nav {
  position: fixed;
  width: 100%;
  background-color: #143349 !important;

  &-main {
    width: 100%;
    display: flex;
    justify-content: space-between;

    &_logos {
      width: 15%;
    } 

    &_user {
      display: flex;
      justify-content: end;
      width: 15%;
    }
  }
}

.nav-logo {
  width: 60%;
  padding: 5px;
}

.nav-link {
  color: #01b582 !important;
  font-weight: 500;
  font-size: 1.2rem;
}

.nav-link:hover {
  transform: scale(1.08);
}

.active {
  color: #58ffb7 !important;
  font-weight: 600;
}

.nav-icon {
  color: #01b582 !important;
  font-size: 2.3rem;
  margin-right: 5px;
}
</style>
