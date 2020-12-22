<template>
  <div>
    <!-- <div
      class="card"
      style="width: 20rem; text-align: center; display: inline-block"
    >
      <img
        class="card-img-top"
        src="https://placekitten.com/g/200/200"
        alt="Card image cap"
        height="200"
        width="200"
        style="border-radius: 0.6rem"
      />
      <div class="card-block">
        <h4 class="card-title">Name</h4>
        <p class="card-text">Some quick example text to build</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div> -->
    <nuxt-link :to="{ name: 'product_detail' }">
    <b-card
      img-src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem; text-align: center; color: #000"
      class="mb-2"
    >
      <!-- <b-card-text> -->
        <h6>Product Name</h6>
        <div>
          <!-- <b-icon v-for="i of 5" :key="i" icon="star-fill" aria-hidden="true"></b-icon> -->
        </div>
        <p> $ 2000 </p>
      <!-- </b-card-text> -->

      <b-button href="#" variant="outline-primary" size="sm">Add to Cart</b-button>
    </b-card>
    </nuxt-link>
  </div>
</template>

<style scoped>
.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
