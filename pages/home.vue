<template>
  <div class="home">
    <b-row style="height: 400px" gutter="10">
      <b-col cols="8" style="border: 1px solid">
        <carousal />
      </b-col>
      <b-col cols="4" style="border: 1px solid">
        
      </b-col>
    </b-row>
    <br />
    <b-row style="border: 1px solid; height: 300px">
      <b-col style="border: 1px solid">1 of 3</b-col>
      <b-col style="border: 1px solid">2 of 3</b-col>
      <b-col style="border: 1px solid">3 of 3</b-col>
    </b-row>
    <br />
    <feature-products />
    <br />
    <recommanded-products />

    <div>
      <b-jumbotron
        header="BootstrapVue"
        lead="Bootstrap v4 Components for Vue.js 2"
      >
        <p>For more information visit website</p>
        <nuxt-link :to="{name: 'category'}">
        <b-button variant="primary" >More Info</b-button>
        </nuxt-link>
      </b-jumbotron>
    </div>
    <!-- <product-collection /> -->
  </div>
</template>

<script>
export default {
  layout: "home",
  name: "home",
};
</script>

<style scoped>
.home {
  padding-top: 16px;
  padding-left: 55px;
  padding-right: 55px;
}
</style>