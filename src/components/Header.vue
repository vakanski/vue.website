<template>
  <header>
    <!-- header inner -->
    <div class="head_top">
      <div class="header">
        <div class="container-fluid">
          <div class="row">
            <div class="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
              <div class="full">
                <div class="center-desk">
                  <div class="logo">
                    <a href="index.html">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="../assets/images/logo.webp"
                          alt=""
                        />
                        <img src="../assets/images/logo.png" alt="" />
                      </picture>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9">
              <nav class="navigation navbar navbar-expand-md navbar-dark">
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarsExample04"
                  aria-controls="navbarsExample04"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarsExample04">
                  <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                      <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                      <router-link to="/about" class="nav-link"
                        >About</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <router-link to="/services" class="nav-link"
                        >Services</router-link
                      >
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="careers.html">Careers</a>
                    </li>
                    <li class="nav-item">
                      <a class="nav-link" href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <!-- end header inner -->
      <!-- end header -->
      <!-- banner -->
      <hp-HomeBanner v-if="homePage()"></hp-HomeBanner>
    </div>
  </header>
</template>

<script>
import HomeBanner from "./HomeBanner";
export default {
  components: {
    "hp-HomeBanner": HomeBanner
  },
  methods: {
    homePage() {
      if (this.$route.path == "/" || this.$route.path == "/home") {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
