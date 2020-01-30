<template>
  <div id="app">
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
                            srcset="images/logo.webp"
                            alt=""
                          />
                          <img src="images/logo.png" alt="" />
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
                        <a class="nav-link" href="index.html">Home</a>
                      </li>
                      <li class="nav-item">
                        <router-link to="/about">About</router-link>
                        <a class="nav-link" href="about.html">About</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="services.html">Services</a>
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
        <section class="banner_main">
          <div class="container-fluid">
            <div class="row d_flex">
              <div class="col-md-6">
                <div class="text-bg">
                  <h1>We translate your vision into reality</h1>
                  <p>
                    Sourcico’s purpose is to enable you to speed-up your
                    development pace while maintaining cost-efficiancy and
                    flexability.
                  </p>
                  <a href="services.html">Read More</a>
                </div>
              </div>
              <div class="col-md-6">
                <div class="text-img">
                  <picture>
                    <source
                      type="image/webp"
                      srcset="images/box_img.webp"
                      alt=""
                    />
                    <img src="images/box_img.png" alt="" />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </header>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/services">Services</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.head_top {
  background: url("assets/images/banner.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
