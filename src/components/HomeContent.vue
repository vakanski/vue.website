<template>
  <div class="hello">
    <div v-for="post in posts" v-bind:key="post.id">
      <!-- Projects -->
      <div class="projects">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>{{ post.section_1_top_title }}</span>
                <h2>{{ post.section_1_title }}</h2>
                <p>
                  {{ post.section_1_sub_title }}
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-4">
                  <div class="projects_box">
                    <div class="projects_box">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="../assets/images/1.webp"
                          alt=""
                        />
                        <img src="../assets/images/1.png" alt="" />
                      </picture>
                    </div>
                    <h2>{{ post.section_box1_title }}</h2>
                    <p>
                      {{ post.section_box1_description }}
                    </p>
                    <!-- <a class="read_more " href="# ">Read more</a> -->
                  </div>
                </div>
                <div class="col-md-4 ">
                  <div class="projects_box ">
                    <div class="projects_box ">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="../assets/images/2.webp"
                          alt=""
                        />
                        <img src="../assets/images/2.png" alt="" />
                      </picture>
                    </div>
                    <h2>{{ post.section_box2_title }}</h2>
                    <p>
                      {{ post.section_box2_description }}
                    </p>
                    <!-- <a class="read_more " href="# ">Read more</a> -->
                  </div>
                </div>
                <div class="col-md-4 ">
                  <div class="projects_box ">
                    <div class="projects_box ">
                      <picture>
                        <source
                          type="image/webp"
                          srcset="../assets/images/3.webp"
                          alt=""
                        />
                        <img src="../assets/images/3.png" alt="" />
                      </picture>
                    </div>
                    <h2>{{ post.section_box2_title }}</h2>
                    <p>
                      {{ post.section_box3_description }}
                    </p>
                    <!-- <a class="read_more " href="# ">Read more</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- business -->
      <div class="business ">
        <div class="container ">
          <div class="row ">
            <div class="col-md-12 ">
              <div class="titlepage ">
                <span>{{ post.section_2_top_title }}</span>
                <h2>
                  {{ post.section_2_title }}
                </h2>
                <p>{{ post.section_2_sub_title }}.</p>
              </div>
            </div>
          </div>
          <div class="row ">
            <div class="col-md-10 offset-md-1 ">
              <div class="row ">
                <div class="col-md-12 ">
                  <div class="business_box ">
                    <picture>
                      <source
                        type="image/webp"
                        srcset="../assets/images/business_img.webp"
                        alt=" "
                      />
                      <img src="../assets/images/business_img.jpg" alt=" " />
                    </picture>
                    <p>
                      {{ post.section_2_description }}
                    </p>
                    <a class="read_more " href="/services">Read more</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end business -->
      <!-- Testimonial -->
      <div class="section Testimonial_sec ">
        <div class="container ">
          <div id=" " class="Testimonial ">
            <div class="row ">
              <div class="col-md-12 ">
                <div class="titlepage ">
                  <h2>{{ post.section_3_title }}</h2>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-3 ">
                <div class="Testimonial_box ">
                  <i>
                    <picture>
                      <source
                        type="image/webp "
                        srcset="../assets/images/plan1.webp"
                        alt=" "
                      />
                      <img src="../assets/images/plan1.png" alt=" " />
                    </picture>
                  </i>
                </div>
              </div>
              <div class="col-md-9 ">
                <div class="Testimonial_box ">
                  <h4>Israel, Tel Aviv</h4>
                  <p>
                    Our Israeli branch is located in Tel Aviv and is serving
                    mainly the Israeli high-tech industry, it’s well established
                    clients as well as it’s younger and agile startups. Our
                    Management, sales and Administration is based in Tel Aviv.
                  </p>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-3 ">
                <div class="Testimonial_box ">
                  <i>
                    <picture>
                      <source
                        type="image/webp "
                        srcset="../assets/images/plan2.webp"
                        alt=" "
                      />
                      <img src="../assets/images/plan2.png" alt=" " /> </picture
                  ></i>
                </div>
              </div>
              <div class="col-md-9 ">
                <div class="Testimonial_box ">
                  <h4>Skopje, Macedonia</h4>
                  <p>
                    Our competence center in Macedonia enjoys a huge talent pool
                    of the finest engineers (around 6,000 in Skopje), in a
                    friendly and beautiful country that has a very rapidly
                    growing economy (3rd in growth rate in Europe 2014)
                    specially the IT industry, a vivid developers community, all
                    within a short flight away and only one hour time zone
                    difference from Israel.
                  </p>
                </div>
              </div>
            </div>
            <div class="row ">
              <div class="col-md-3 ">
                <div class="Testimonial_box ">
                  <i>
                    <picture>
                      <source
                        type="image/webp "
                        srcset="../assets/images/plan3.webp"
                        alt=" "
                      />
                      <img src="../assets/images/plan3.png" alt=" " /> </picture
                  ></i>
                </div>
              </div>
              <div class="col-md-9 ">
                <div class="Testimonial_box ">
                  <h4>Chișinău, Moldova</h4>
                  <p>
                    In the heart of Moldova in addition to its famously good
                    wines there is a healthy growing community of engineering &
                    science serving as one of the most important growth engines
                    of the local economy. The local IT community is
                    significantly supported by the government and the Moldavian
                    talent pool proved to be a perfect location for our second
                    competence center.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end Testimonial -->
      <!-- contact -->
      <div id="contact " class="contact ">
        <div class="container ">
          <div class="row ">
            <div class="col-md-12 ">
              <div class="titlepage ">
                <h2>Contact us</h2>
                <span
                  >Please feel free to drop us a message with any question, We
                  would love to hear from you!</span
                >
              </div>
            </div>
          </div>
        </div>
        <div class="container ">
          <div class="row ">
            <div class="col-md-12 ">
              <form class="main_form " method="POST " data-netlify="true ">
                <div class="row ">
                  <div class="col-md-12 ">
                    <input
                      class="form_contril "
                      placeholder="Name "
                      type="text "
                      name="Name "
                    />
                  </div>
                  <div class="col-md-12 ">
                    <input
                      class="form_contril "
                      placeholder="Phone Number "
                      type="text "
                      name=" Phone Number "
                    />
                  </div>
                  <div class="col-md-12 ">
                    <input
                      class="form_contril "
                      placeholder="Email "
                      type="email "
                      name="Email "
                    />
                  </div>
                  <div class="col-md-12 ">
                    <textarea
                      class="textarea "
                      placeholder="Message "
                      type="text "
                      name="Message "
                    ></textarea>
                  </div>
                  <div class="col-md-12 ">
                    <div data-netlify-recaptcha="true "></div>
                  </div>
                  <div class="col-sm-12 ">
                    <button type="submit " class="send_btn ">Send</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- end contact -->
      <!-- end projects -->
    </div>
  </div>
  <!-- end posts -->
</template>

<script>
export default {
  name: "HomeContent",
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    this.$http
      .get("https://source.mk/sourcico.com/wp-json/acf/v3/pages/196")
      .then(
        response => {
          for (let post in response.data) {
            this.posts.push(response.data[post]);
          }
        },
        error => {
          alert(error);
        }
      );
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
