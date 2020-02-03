<template>
  <section class="banner_main">
    <div class="container-fluid">
      <div class="row d_flex">
        <div class="col-md-6">
          <div class="text-bg">
            <div v-for="post in posts" v-bind:key="post.id">
              <h1>{{ post.homepage_title_1 }}</h1>
            </div>

            <p>
              Sourcico’s purpose is to enable you to speed-up your development
              pace while maintaining cost-efficiancy and flexability.
            </p>
            <a href="services.html">Read More</a>
          </div>
        </div>
        <div class="col-md-6">
          <div class="text-img">
            <picture>
              <source type="image/webp" srcset="images/box_img.webp" alt="" />
              <img src="images/box_img.png" alt="" />
            </picture>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "HomeBanner",
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
<style scoped></style>
