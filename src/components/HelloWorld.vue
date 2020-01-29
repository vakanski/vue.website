<template>
  <div class="hello">
    <!-- <h1>{{ msg }}</h1> -->
    <div v-for="post in posts" v-bind:key="post.id">
      <h1>{{ post.section_1_title }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data: function() {
    return {
      posts: []
    };
  },
  created: function() {
    this.$http
      .get("http://source.mk/sourcico.com/wp-json/acf/v3/pages/196")
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
