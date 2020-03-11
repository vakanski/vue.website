<template>
  <div class="hello">
    <div v-for="post in posts" v-bind:key="post.id">
      <!-- business -->
      <div class="business">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>Contact Us</span>
                <h2>
                  Please feel free to drop us a message or call us with any
                  question, We would love to hear from you!
                </h2>
                <p>
                  Our Mission is to tailor the best fit solution, very fast and
                  at a very competitive cost.
                </p>
              </div>
            </div>
          </div>
          <!-- contact -->
          <div id="contact" class="contact c_page">
            <div class="container">
              <div class="row">
                <div class="col-md-12 ">
                  <form
                    class="main_form"
                    action="https://submit-form.com/0yxyk0y-APLxxLJ-q7Pmv"
                    target="_self"
                    method="POST"
                  >
                    <div class="row">
                      <div class="col-md-12 ">
                        <input
                          class="form_contril"
                          placeholder="Name "
                          type="text"
                          name="Name "
                          required="true"
                        />
                      </div>
                      <div class="col-md-12">
                        <input
                          class="form_contril"
                          placeholder="Phone Number"
                          type="text"
                          name=" Phone Number"
                          required="true"
                        />
                      </div>
                      <div class="col-md-12">
                        <input
                          class="form_contril"
                          placeholder="Email"
                          type="email"
                          name="Email"
                          required="true"
                        />
                      </div>
                      <div class="col-md-12">
                        <textarea
                          class="textarea"
                          placeholder="Message"
                          type="text"
                          name="Message"
                          required="true"
                        ></textarea>
                      </div>
                      <input
                        type="hidden"
                        name="_next"
                        value="https://mysite.com/thanks.html"
                      />
                      <div class="col-sm-12">
                        <button type="submit" class="send_btn">Send</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <!-- end contact -->
        </div>
      </div>
      <!-- end business -->

      <!-- Testimonial -->
      <div class="section Testimonial_sec">
        <div class="container">
          <div id="" class="contact_sec">
            <div class="row">
              <div class="col-md-12">
                <div class="contact_i text-center">
                  <h2>Israel office</h2>
                  <i><img src="../assets/images/plan1.png" alt="#"/></i>
                  <h4 class="text-center">Israel, Tel Aviv</h4>
                  <p class="text-center">
                    Phone: +972-3-9118888<br />
                    Email:
                    <a href="mailto:info@sourcico.com">info@sourcico.com</a
                    ><br />Address: 3 Hashfela St., Tel Aviv, Israel
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- end Testimonial -->

      <!-- business 2-->
      <div class="business">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>Our Mission</span>
                <h2>
                  We enable our client to “go-to-market” quickly and affordably
                </h2>
                <p>
                  We build and nourish long lasting relationships with our
                  clients via giving them the best service possible
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-12">
                  <div class="business_box ">
                    <picture class="mission">
                      <source
                        type="image/webp"
                        srcset="../assets/images/mission.webp"
                        alt=""
                      />
                      <img src="../assets/images/mission.jpg" alt="" />
                    </picture>
                    <p>
                      Our mission is to enable our clients to go-to-market ASAP
                      with the highest technical skills and at the lowest cost.
                      Our mission is to build and nourish long lasting
                      relationships with our clients via giving them the best
                      service possible. Our mission is to cultivate and motivate
                      our talents to enable them to flourish and progress along
                      with our clients. As we are cultivating our talents and
                      investing continuously in our human capital, we
                      continuously create high value for our clients. We have
                      our incubator plan where we execute the craziest ideas by
                      our interns and junior developers so that later they will
                      be able to contribute from their experience and innovative
                      thinking to our client’s projects
                    </p>
                    <!-- <a class="read_more" href="#">Read more</a> -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end business 2-->
    </div>
  </div>
  <!-- end posts -->
</template>

<script>
export default {
  name: "ContactContent",
  data: function() {
    return {
      posts: []
    };
  },

  created: function() {
    var pageId = 196;
    this.$http
      .get("https://source.mk/sourcico.com/wp-json/acf/v3/pages/260", {
        params: { page: pageId }
      })
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
