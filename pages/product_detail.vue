<template>
  <div class="product-detail">
    <b-container style="padding: 16px">
      <b-row
        style="
          background: #fff;
          margin: 2px;
          padding-top: 18px;
          padding-bottom: 20px;
        "
      >
        <b-col cols="12" md="6">
          <div>
            <b-img
              src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
              fluid
              alt="Responsive image"
              style="width: 100%; height: 300px; margin-bottom: 5px"
            ></b-img>
            <div>
              <b-img
                v-for="i of 3"
                :key="i"
                left
                src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                style="width: 50px; height: 50px; margin-right: 3px"
              ></b-img>
            </div>
          </div>
        </b-col>
        <b-col cols="12" md="6">
          <div class="row">
            <div class="col-md-12">
              <h1>Kodak 'Brownie' Flash B Camera</h1>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <!-- <span class="label label-primary">Vintage</span> -->
              <b-badge variant="primary">Vintage</b-badge>
              <span class="monospaced">No. 1960140180</span>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <p class="description">
                Classic film camera. Uses 620 roll film. Has a 2&frac14; x
                3&frac14; inch image size.
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <b-icon
                v-for="i of 5"
                :key="i"
                icon="star-fill"
                aria-hidden="true"
              ></b-icon>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 bottom-rule">
              <h2 class="product-price">$129.00</h2>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12 bottom-rule">
              <b-form-spinbutton
                id="demo-sb"
                v-model="value"
                min="1"
                max="100"
                style="width: 120px"
                size="sm"
              ></b-form-spinbutton>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-12">
              Color :
              <b-button
                size="sm"
                style="width: 50px; height: 20px; background: black"
              ></b-button>
              <b-button
                size="sm"
                style="width: 50px; height: 20px; background: blue"
              ></b-button>
              <b-button
                size="sm"
                style="width: 50px; height: 20px; background: white"
              ></b-button>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-12">
              Size :
              <b-button size="sm" variant="outline-primary"> Small </b-button>
              <b-button size="sm" variant="outline-primary">Median</b-button>
              <b-button size="sm" variant="outline-primary"> Large</b-button>
            </div>
          </div>
          <br />

          <div class="row">
            <div class="col-md-12">
              <b-button variant="outline-primary" href="/checkout">Add To Cart</b-button>
            </div>
          </div>
        </b-col>
      </b-row>

      <div class="row" style="margin-top: 5px">
        <div class="col-md-12">
          <b-card no-body style="width: 100%">
            <b-tabs content-class="mt-3" align="">
              <b-tab title="Description" active style="padding: 16px">
                <p>
                  Box camera for 620 rollfilm 2 1/4 x 3 1/4 inches. Fitted with
                  a meniscus lens, fixed aperture. Rotary suter /40/80/B. Flash
                  synchronised screw and pin contacts. Exposure guide. Yellow
                  filter and close up portrait lenses on sliding plate. Two
                  brilliant reflecting finders. Buff leatherette and brown
                  paint. Kodak Limited, 1958-1960.
                </p>
                <p>
                  Brownie Flash B, made by Kodak Limited in London, 1958-1960.
                </p>
                <p>
                  with a meniscus lens, fixed aperture. Rotary suter /40/80/B.
                  Flash synchronised screw and pin contacts. Exposure guide.
                  Yellow filter and close up portrait lenses on sliding plate.
                  Two brilliant reflecting finders. Buff leatherette and brown
                  paint. The Brownie Flash B is a box camera which takes 2¼ by
                  3¼" frames on 620 film, it has a two-speed shutter, a
                  close-focus lens, a yellow filter and flash sync. A flash
                  could be connected to it using the Kodak screw-and-pin
                  mounting.
                </p>
                <img
                  src="https://i1.adis.ws/i/canon/EOS-r5_Martin_Bissig_Lifestyle_hero-e90f9dd2-be19-11ea-b23c-8c04ba195b5f?w=100%&sm=aspect&aspect=16:9&qlt=80&fmt=jpg&fmt.options=interlaced&bg=rgb(255,255,255)"
                  width="400"
                  height="auto"
                />
                <h5>THE NEW EOS R6</h5>
                <p>
                  Whatever you shoot, however you shoot it, the EOS R6 will have
                  you falling in love with photography all over again.
                </p>
              </b-tab>
              <b-tab title="Reviews"><p>I'm the second tab</p></b-tab>
              <b-tab title="Shopping Information"
                ><p>I'm a disabled tab!</p></b-tab
              >
            </b-tabs>
          </b-card>
        </div>
      </div>

      <div class="row" style="margin-top: 10px">
        <div class="col-md-12">
          <b-card style="width: 100%" title="Related Products">
            <b-row>
              <b-col cols="12" md="3" v-for="i of 4" :key="i">
                <product />
              </b-col>
            </b-row>
          </b-card>
        </div>
      </div>

      <div class="row">
        <!-- <ProductZoomer
          :base-images="images"
          :base-zoomer-options="zoomerOptions"
        /> -->
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  layout: "home",
  name: "product-detail",

  data() {
    return {
      value: 1,
      images: {
          'thumbs': [
            {
              'id': 1,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
              'id': 2,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          ],
          'normal_size': [
            {
              'id': 1,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
              'id': 2,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          ],
          'large_size': [
            {
              'id': 1,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            },
            {
              'id': 2,
              'url': 'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
            }
          ]
      },
      zoomerOptions: {
        zoomFactor: 3, // scale for zoomer
        pane: 'pane', // three type of pane ['pane', 'container-round', 'container']
        hoverDelay: 300, // how long after the zoomer take effect
        namespace: 'zoomer', // add a namespace for zoomer component, useful when on page have mutiple zoomer
        move_by_click:false, // move image by click thumb image or by mouseover
        scroll_items: 5, // thumbs for scroll
        choosed_thumb_border_color: "#bbdefb", // choosed thumb border color
        scroller_button_style: "line",
        scroller_position: "left",
        zoomer_pane_position: "right"
      }
    };
  },
};
</script>

<style scoped>
.product-detail {
  background: #e9ecef;
}
</style>