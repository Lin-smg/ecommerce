<template>
  <div class="checkout">
    <b-container style="padding: 16px">
      <div class="row">
        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <b-form>
                <b-form-group
                  label="Email address:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Enter email"
                    required
                  ></b-form-input>
                </b-form-group>
              </b-form>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Products</h4>
              <div class="row">
                <check-out-product v-for="i of 3" :key="i" />
              </div>
              <br />
              <div>
                <div class="row" style="text-align: right">
                  <div class="col-9">Sub Total:</div>
                  <div class="col-3">$100</div>
                </div>
                <div class="row" style="text-align: right">
                  <div class="col-9">Discount:</div>
                  <div class="col-3">$100</div>
                </div>
                <div class="row" style="text-align: right">
                  <div class="col-9">Shipping:</div>
                  <div class="col-3">$100</div>
                </div>
                <div class="row" style="text-align: right">
                  <div class="col-9">Tax:</div>
                  <div class="col-3">$100</div>
                </div>
                <hr />
                <div class="row" style="text-align: right">
                  <div class="col-8">Order Total :</div>
                  <div class="col-3">$100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </b-container>
  </div>
</template>

<script>
export default {
  name: "checkout",
  layout: "home",
};
</script>

<style scoped>
.checkout {
  background: #e9ecef;
}
</style>