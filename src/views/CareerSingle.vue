<template>
  <div class="hello">
   
      <div  v-for="(post, index) in posts" :key="post.id">
        <span>{{post[10] }}</span><span v-if="index+1 < posts.length">, </span>
      <!-- business 2-->
      <div class="business">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <div>Career {{ id }}</div>
                <div>{{ [post.id].rendered }} </div>
                <span>we are looking for </span>
                <h2>Front-End Developer</h2>
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
                        srcset="images/career.webp"
                        alt=""
                      />
                      <img src="images/career.jpg" alt="" />
                    </picture>
                    <p>
                      As a Frontend/JavaScript Engineer, you will help us build
                      beautiful and quick interfaces that play a daily mission
                      critical role for some of our biggest client companies.
                      You will work closely with a small or mid team of frontend
                      and backend developers and have a say in the design future
                      and in the functional and visual design of what you build
                      day-to-day.You will collaborate with strategy, design, and
                      development teams to convert prototypes into websites and
                      web-based applications using your mastery of the
                      JavaScript environment.
                    </p>
                    <div class="col-xs-12 col-md-10 offset-md-1 internship">
                      <p><strong>Requirements:</strong></p>
                      <ul>
                        <li>
                          Strong JavaScript/TypeScript development skills,
                          understanding of new ES6 concepts, and experience in
                          at least one of their most used frameworks such as
                          React, Vue or Angular (both JS or 2+)
                        </li>
                        <li>
                          Knowledge of jQuery, Bootstrap and HTML5/CSS3 as well
                          as experience working with REST APIs
                        </li>
                        <li>Experience with GIT source control systems</li>
                        <li>
                          1+ years of professionally building production-grade,
                          mid or large-scale web software
                        </li>
                        <li>Experience working in an Agile environment</li>
                        <li>
                          Have passion and experience for building responsive,
                          elegant and engaging experiences with future friendly
                          web technologies.
                        </li>
                        <li>
                          Building complex user interactions either from scratch
                          or within existing frameworks
                        </li>
                        <li>
                          Practice disciplined software engineering (e.g.
                          debugging, automated testing, code reviews, document,
                          writing clean and pragmatic code)
                        </li>
                        <li>
                          Understanding of further reaching technical concepts
                          (API design, modular code structures, functional vs
                          object-oriented programming, design patterns.)
                        </li>
                      </ul>

                      <p><strong>Pre-requests:</strong></p>

                      <ul>
                        <li>
                          Happy and ambitious personality and character
                          (non-negotiable!)
                        </li>
                        <li>
                          A natural curiosity for new scripting languages,
                          frameworks, and technologies
                        </li>
                        <li>Self-motivated and passionate about development</li>
                        <li>
                          A team player who is friendly and open-minded but also
                          a result-driven and committed person
                        </li>
                        <li>
                          Self-awareness and continuous improvement mindset
                        </li>
                        <li>
                          BS Degree in Computer Science, Information Systems or
                          equivalent work experience/education combination
                        </li>
                        <li>Fluent English (reading, writing and speaking)</li>
                        <li>
                          You know something very good? Share it so the other
                          colleagues could learn from you. Knowledge transfer is
                          one of the things we invest most of our time.
                        </li>
                      </ul>

                      <p><strong>What do we offer </strong></p>
                      <ul>
                        <li>
                          You will work with many amazing Senior Developers and
                          have opportunities to learn and teach everyday
                        </li>
                        <li>
                          You'll advance in a high-growth company, building
                          high-traction products, in a high-growth industries
                          and domains
                        </li>
                        <li>
                          You will get to work on challenging projects using
                          modern technology and frequently ship real code to
                          production.
                        </li>
                        <li>
                          We offer a full slate of benefits including
                          competitive salaries, the standard health benefits and
                          insurance package, paid time off, remote flexibility
                          and numerous other benefits to improve company
                          culture/morale. And… we offer some not-so-standard,
                          extra-fun benefits, including learning &amp;
                          development programs to improve your skills, lunch
                          discounts in our surrounding, PlayStation
                          corner,basketball, and of course, fully stocked
                          fridges and free coffee, juices, fruit and
                          snacks.&nbsp;
                        </li>
                        <li>
                          Private health insurance with access to every private
                          hospital in the country
                        </li>
                        <li>
                          Friendly, professional, stable working environment
                          where one can grow in their career
                        </li>
                        <li>
                          Work/life balance. Life happens, and here you have the
                          time and freedom to deal with it
                        </li>
                        <li>
                          Mobile work, working from home and flexible working
                          hours during the day
                        </li>
                        <li>
                          Office in the city center and cozy atmosphere during
                          the working hours
                        </li>
                      </ul>
                    </div>
                    <!-- <a class="read_more" href="#">Read more</a> -->
                    <p class="business business_box">
                      <a
                        class="read_more"
                        href="mailto:jobs@sourcico.com?subject=FrontEnd%20Developer"
                      >
                        Apply Now
                      </a>
                    </p>
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
  </div>
  <!-- end posts -->
</template>

<script>
export default {
  name: "CareersSingleContent",
  data: function() {
    return {
      posts: []
    };
  },
  props: ["id"],

  created: function() {
    if (this.$props.id == "front-end-developer") {
      var $job_id = 273;
      console.log($job_id);
    }
    this.$http
      .get("https://source.mk/sourcico.com//wp-json/wp/v2/careers/273")
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
