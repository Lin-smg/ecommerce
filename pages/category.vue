<template>
  <div class="category" type="light" variant="info">
    <b-row>
      <b-col cols="12" md="3">
        <b-card header="Filter" header-tag="header">
          Category : <br />
          <b-list-group>
            <b-list-group-item>Cras justo odio</b-list-group-item>
            <b-list-group-item>Dapibus ac facilisis in</b-list-group-item>
            <b-list-group-item>Morbi leo risus</b-list-group-item>
            <b-list-group-item>Porta ac consectetur ac</b-list-group-item>
            <b-list-group-item>Vestibulum at eros</b-list-group-item>
          </b-list-group>
          <!-- <ul class="list-group vertical-menu" size="small">
            <li class="list-group-item active">Active item</li>
            <li class="list-group-item">Second item</li>
            <li class="list-group-item">Third item</li>
          </ul> -->
          <hr />

          <b-form>
            <b-form-group label="Brand : " v-slot="{ ariaDescribedby }">
              <b-form-checkbox-group
                v-model="selectedArr"
                :options="brands"
                :aria-describedby="ariaDescribedby"
                name="flavour-2a"
                stacked
                style="margin-left: 30px"
              ></b-form-checkbox-group>
            </b-form-group>
          </b-form>
        </b-card>
      </b-col>
      <b-col cols="12" md="9">
        <div class="card text-right">
          <div class="card-body">
            <b-nav-form style="float: left">
              Sort by:
              <b-form-select
                v-model="selected"
                size="sm"
                :options="options"
              ></b-form-select>
            </b-nav-form>
            <b-nav-form style="float: right">
              <b-form-input
                size="sm"
                class="mr-sm-2"
                placeholder="Search"
                style="width: 300px"
              ></b-form-input>
              <b-button
                size="sm"
                class="my-2 my-sm-0"
                type="submit"
                variant="outline-primary"
                >Search</b-button
              >
            </b-nav-form>
          </div>
        </div>
        <br />
        <b-row>
          <b-col cols="12" md="3" v-for="i of 9" :key="i">
            <product />
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <div>
      <b-jumbotron
        header="BootstrapVue"
        lead="Bootstrap v4 Components for Vue.js 2"
      >
        <p>For more information visit website</p>
        <b-button variant="primary" href="#">More Info</b-button>
      </b-jumbotron>
    </div>
  </div>
</template>

<script>
export default {
  layout: "home",
  name: "category",

  data() {
    return {
      selectedArr: [], // Must be an array reference!
      brands: [
        { text: "Orange", value: "orange" },
        { text: "Apple", value: "apple" },
        { text: "Pineapple", value: "pineapple" },
        { text: "Grape", value: "grape" },
      ],
      selected: null,
      options: [
        { value: null, text: "----" },
        { value: "a", text: "one" },
        { value: "b", text: "two" },
        { value: "c", text: "three" },
      ],
    };
  },
  created() {
    console.log("current route", this.$nuxt.$route);
  },
};
</script>

<style scoped>
.category {
  padding-top: 16px;
  padding-left: 55px;
  padding-right: 55px;
}

.vertical-menu {
  width: 100%;
  overflow-y: auto;
}

.vertical-menu li {
  background-color: rgb(255, 255, 255);
  color: black;
  display: block;
  padding: 12px;
  text-decoration: none;
}

.vertical-menu li:hover {
  background-color: #ccc;
}

.vertical-menu li.active {
  background-color: #c0a1f1;
  color: white;
}
a {
  text-decoration: none;
}
</style>