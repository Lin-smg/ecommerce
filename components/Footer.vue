<template>
  <div class="footer font-small lighten-3 pt-4">
  
    <hr>
    <b-container class="text-center text-md-left">
      <b-row class="text-center text-md-left mt-3 pb-3">
        <b-col md="3" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Company name</h6>
          <p>
            Here you can use rows and columns here to organize your footer
            content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </b-col>
        <hr class="w-100 clearfix d-md-none" />
        <b-col md="2" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Products</h6>
          <p><a href="#!">MDBootstrap</a></p>
          <p><a href="#!">MDWordPress</a></p>
          <p><a href="#!">BrandFlow</a></p>
          <p><a href="#!">Bootstrap Angular</a></p>
        </b-col>
        <hr class="w-100 clearfix d-md-none" />
        <b-col md="3" lg="2" xl="2" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Useful links</h6>
          <p><a href="#!">Your Account</a></p>
          <p><a href="#!">Become an Affiliate</a></p>
          <p><a href="#!">Shipping Rates</a></p>
          <p><a href="#!">Help</a></p>
        </b-col>
        <hr class="w-100 clearfix d-md-none" />
        <b-col md="4" lg="3" xl="3" class="mx-auto mt-3">
          <h6 class="text-uppercase mb-4 font-weight-bold">Contact</h6>
          <p><i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
          <p><i class="fas fa-envelope mr-3"></i> info@gmail.com</p>
          <p><i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
          <p><i class="fas fa-print mr-3"></i> + 01 234 567 89</p>
        </b-col>
      </b-row>
      <hr />
      <b-row class="d-flex align-items-center">
        
        <b-col md="12" lg="12" class="ml-lg-0">
          <div class="text-center text-md-center">
            <ul class="list-unstyled list-inline">
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1"
                  ><i class="fab fa-facebook" style="font-size: 30px"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1"
                  ><i class="fab fa-twitter" style="font-size: 30px"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1"
                  ><i class="fab fa-google-plus" style="font-size: 30px"></i
                ></a>
              </li>
              <li class="list-inline-item">
                <a class="btn-floating btn-sm rgba-white-slight mx-1"
                  ><i class="fab fa-linkedin-in" style="font-size: 30px"></i
                ></a>
              </li>
            </ul>
          </div>
        </b-col>
      </b-row>

      <div class="footer-copyright text-center py-3">
        <b-container fluid>
          &copy; 2020 Copyright:
          <a href="https://www.MDBootstrap.com"> MDBootstrap.com </a>
        </b-container>
      </div>
    </b-container>
  </div>
</template>

<style scoped>
.footer {
  background-color: #e9ecef;
}
.fluid-container.footer {
  background: blue;
}
.fluid-container.footer > *:last-child {
  margin-bottom: 0px;
  color: #fff;
}
</style>