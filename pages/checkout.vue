<template>
  <div class="checkout">
    <b-container style="padding: 16px">
      <div class="row">      

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
                  <div class="col-9">Order Total :</div>
                  <div class="col-3">$100</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6">
          <div class="card">
            <div class="card-body">
              <h4 class="card-title">Shipping & Billing</h4>

              <b-form>
                <b-form-group label="Name:" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="email"
                    placeholder="Enter Name"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Phone :" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="phone"
                    placeholder="Enter Phone"
                    required
                  ></b-form-input>
                </b-form-group>
                <b-form-group label="Address :" label-for="input-1">
                  <b-form-input
                    id="input-1"
                    type="address"
                    placeholder="Enter Address"
                    required
                  ></b-form-input>
                </b-form-group>

                <b-form-group label="Comment :" label-for="input-1">
                  <b-form-textarea
                    id="textarea-default"
                    placeholder="Enter Comment"
                  ></b-form-textarea>
                </b-form-group>

                <div>
                  <b-button block variant="danger">Place Order</b-button>
                </div>
              </b-form>
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