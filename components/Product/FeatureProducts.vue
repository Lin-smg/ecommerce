<template>
    <b-container>
        <div>
            <h4>Feature Products</h4>
        </div>
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
</template>

<script>
export default {
    name: 'feature-products'
}
</script>

<style scoped>
.card:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>