<template>
    <div class="error-page">
        <section class="error-page_main">
            <img class="nav-logo" src="assets/img/page404.png" />
            <h3>Dang</h3>
            <h4>It looks like something broke.</h4>
            <h5>Sorry about that.</h5>
            <h3>
                <nuxt-link  active-class="active" class="error-page_main-link" to="/" exact>Go Home</nuxt-link>
            </h3>
        </section>
    </div>
</template>

<style scoped>
.error-page {
    width: 100%;
    height: 100vh;
    color: #01b582 !important;
    background-color: #143349 !important;
}

.error-page_main {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    padding-top: 100px;
    text-align: center;
}

.error-page_main-link {
    color: #70f7d1 !important;
}
</style>