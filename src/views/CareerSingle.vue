<template>
  <div class="hello">
    <div>
      <!-- business 2-->
      <div class="business">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <h1>{{ contents.title.rendered }}</h1>
                <span>we are looking for </span>
                <!-- <h2>{{ posts.[10].rendered }}</h2> -->
                <p>
                  Friendly, professional, stable working environment where one
                  can grow in their career
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-12">
                  <div class="business_box ">
                    <picture>
                      <source
                        type="image/webp"
                        srcset="../assets/images/career.webp"
                        alt=""
                      />
                      <img src="../assets/images/career.jpg" alt="" />
                    </picture>
                    <span v-html="contents.content.rendered"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row business">
          <div class="col-md-12">
            <div class="titlepage">
              <span>Sending you CV</span>
              <h2>Join us</h2>
              <p>
                Please send your Curriculum Vitae (in English) to
                <a href="mailto:jobs@sourcico.com"
                  ><strong>jobs@sourcico.com</strong></a
                >.<br />
                Please mention the position you are applying to.<br />
                All applications will be treated with the strictest
                confidentiality
              </p>
              <p class="business business_box">
                <a href="/careers">&lt;&lt; Back To Job Listings </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end business 2-->
  </div>

  <!-- end posts -->
</template>

<script>
export default {
  name: "CareersSingle",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },
  data: function() {
    return {
      contents: [],
      loading: true
    };
  },
  props: ["id"],

  created: function() {
    if (this.$props.id == "front-end-developer") {
      var $job_id = 273;
      // console.log($job_id);
    } else if (this.$props.id == "full-stack-developer") {
      $job_id = 279;
      // console.log($job_id);
    } else if (this.$props.id == "android-developer") {
      $job_id = 278;
      // console.log($job_id);
    } else if (this.$props.id == "ios-developer") {
      $job_id = 277;
      // console.log($job_id);
    } else if (this.$props.id == "back-end-developer") {
      $job_id = 276;
      // console.log($job_id);
    } else if (this.$props.id == " c-developer") {
      $job_id = 275;
      // console.log($job_id);
    }

    this.$http
      .get(
        "https://source.mk/sourcico.com/wp-json/wp/v2/careers/" + $job_id + "/"
      )
      .then(function(response) {
        this.contents = response.data;
      });
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
  color: #0891f8;
}
</style>
