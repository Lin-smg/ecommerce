<template>
  <div>
    <b-container fluid="sm">
      <b-row>
        <b-col>
          <b-card
            title="Product ONe"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <b-button size="sm" style="float: left">View</b-button><b-button size="sm" style="float: right">$ 200</b-button>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Product ONe"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <b-button size="sm" style="float: left">View</b-button><b-button size="sm" style="float: right">$ 200</b-button>
            </b-card-text>
          </b-card>
          </b-col
        >
        <b-col>
          <b-card
            title="Product ONe"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <b-button size="sm" style="float: left">View</b-button><b-button size="sm" style="float: right">$ 200</b-button>
            </b-card-text>
          </b-card>
        </b-col>
        <b-col>
          <b-card
            title="Product ONe"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem"
            class="mb-2"
          >
            <b-card-text>
              <b-button size="sm" style="float: left">View</b-button><b-button size="sm" style="float: right">$ 200</b-button>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-container>
    <!-- <div class="container-fluid">
      <div class="site-slider-two px-md-4">
        <div class="row slider-two text-center">
          <div class="col-md-2 product pt-md-5 pt-4">
            <img
              class="img-fluid"
              src="https://picsum.photos/600/300/?image=25"
            />
            <span class="border site-btn btn-span"> Product </span>
          </div>

          <div class="col-md-2 product pt-md-5 pt-4">
            <img
              class="img-fluid"
              src="https://picsum.photos/600/300/?image=25"
            />
            <span class="border site-btn btn-span"> Product </span>
          </div>

          <div class="col-md-2 product pt-md-5 pt-4">
            <img
              class="img-fluid"
              src="https://picsum.photos/600/300/?image=25"
            />
            <span class="border site-btn btn-span"> Product </span>
          </div>
          <div class="col-md-2 product pt-md-5 pt-4">
            <img
              class="img-fluid"
              src="https://picsum.photos/600/300/?image=25"
            />
            <span class="border site-btn btn-span"> Product </span>
          </div>
          <div class="col-md-2 product pt-md-5 pt-4">
            <img
              class="img-fluid"
              src="https://picsum.photos/600/300/?image=25"
            />
            <span class="border site-btn btn-span"> Product </span>
          </div>

          <div class="slider-btn">
            <span class="prev position-top"> pre </span>
            <span class="next position-top right-0">nex </span>
          </div>
        </div>
      </div>
    </div> -->

    <div>

      
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
.site-slider-two {
  position: relative;
  height: 30%;
}
.site-slider-two .product {
  height: 25rem;
  position: relative;
  overflow: hidden;
}
.site-slider-two .product img {
  width: 90%;
  margin: auto;
}

.site-btn.btn-span {
  padding: 0.8rem 1.9rem;
  border-radius: 4rem;
  border: 1px solid #000fff;
}

.slider-two .slick-track .product:hover {
  background-color: var(--primary-color);
}
</style>