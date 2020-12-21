<template>
  <div>
    <Header />
      <b-navbar class="three" toggleable="lg" type="dark" variant="dark" sticky>
        <b-navbar-nav center>
          <b-nav-item href="/category" right>New Arrival</b-nav-item>
          <b-nav-item href="#" right>Brands</b-nav-item>
          <b-nav-item href="#" right>Category One</b-nav-item>
          <b-nav-item href="#" right>Category Two</b-nav-item>
          <b-nav-item href="#" right>Category Three</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    <Nuxt />
    <Footer />
  </div>
</template>
<style scoped>
.three.navbar.navbar-dark.bg-dark {
  background-color: #28a745 !important;
  height: auto;
}
</style>