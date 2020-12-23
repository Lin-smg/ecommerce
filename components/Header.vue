<template>
  <div>
    <div>
      <b-navbar class="one" toggleable="lg" type="light" variant="light">
        <b-nav-item-dropdown
          style="top: -15px"
          size="sm"
          text="Lang"
          class="m-2"
          left
        >
          <b-dropdown-item href="#">EN</b-dropdown-item>
          <b-dropdown-item href="#">ES</b-dropdown-item>
          <b-dropdown-item href="#">RU</b-dropdown-item>
        </b-nav-item-dropdown>

        <b-navbar-nav class="ml-auto">
          <b-nav-item> My Wishlist </b-nav-item>
          <b-nav-item> | </b-nav-item>
          <b-nav-item> Sign In </b-nav-item>
          <b-nav-item> | </b-nav-item>
          <b-nav-item> Register </b-nav-item>
          <b-nav-item> | </b-nav-item>
          <b-nav-item> Store Locator </b-nav-item>
          <b-nav-item> | </b-nav-item>
          <b-nav-item> Facebook </b-nav-item>
        </b-navbar-nav>
      </b-navbar>

      <b-navbar class="two" toggleable="lg" type="light" variant="dark">
        <b-avatar
          variant="info"
          src="https://placekitten.com/300/300"
          size="3rem"
        ></b-avatar>
        <b-navbar-brand href="#" style="margin-left: 20px">
          Title Here</b-navbar-brand
        >

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="ml-auto">
            <b-nav-form center>
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
            <b-nav-item> Some Text Head </b-nav-item>

            <b-nav-item
              ><b-button variant="outline-primary"
                >Cart<b-icon icon="cart-fill"></b-icon
                ><b-badge pill variant="success">4</b-badge></b-button
              ></b-nav-item
            >

            <b-nav-item-dropdown right>
              <!-- Using 'button-content' slot -->
              <template #button-content>
                <em><b-avatar></b-avatar>User</em>
              </template>
              <b-dropdown-item href="#">Profile</b-dropdown-item>
              <b-dropdown-item href="#">Sign Out</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped>
.one.navbar.navbar-light.bg-light {
  background-color: #f7f8f4 !important;
  height: 35px;
  border-bottom: 1px solid #cfd2c9f2;
}
.two.navbar.navbar-light.bg-dark {
  background-color: #fff !important;
  height: auto;
  padding: 20px;
}
.three.navbar.navbar-dark.bg-dark {
  background-color: #28a745 !important;
  height: auto;
}
</style>