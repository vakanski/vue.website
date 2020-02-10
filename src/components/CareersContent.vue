<template>
  <div class="hello">
    <!-- business -->
    <div class="business">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage">
              <span>Careers</span>
              <h2>
                If you desire personal growth and love technical challenges,
                Sourcico can be your home
              </h2>
              <p></p>
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
                  <p>
                    We are constantly on the lookout for talented, bright and
                    motivated individuals. We offer a supportive and family-like
                    environment with great compensation at a young and growing
                    company that has a lot of room for personal growth, learning
                    new technologies and acquiring managerial experience.
                  </p>
                  <!-- <a class="read_more" href="#">Read more</a> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end business -->
    <!-- Projects -->
    <div class="career">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage">
              <span>New openings</span>
              <h2>Join us</h2>
              <!-- 
                        <p>Sourcico‘s founders and directors have been at the forefront of outsourcing R&D for many years, and have leveraged this extensive experience on numerous outsourcing projects facing many challenges to establish Sourcico as a fault-tolerant
                            operation with firm and success proven methodologies.</p> -->
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-10 offset-md-1">
            <div class="row">
              <div
                v-for="item in contents"
                v-bind:key="item.id"
                class="col-md-6"
              >
                <!-- content -->

                <div>
                  <div class="projects_box ">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="inner_box">
                        <h2>
                          <strong>{{ item.title.rendered }}</strong> <br />R&D
                        </h2>

                        <p>
                          {{ item.excerpt.rendered }}
                        </p>
                      </div>
                      <a class="read_more" v-bind:href="'/career/' + item.slug">
                        Apply Now</a
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!--  end repeet -->
          </div>
        </div>
      </div>
    </div>
    <!-- end projects -->

    <!-- business 2-->
    <div class="business">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="titlepage">
              <span>Internship program</span>
              <h2>
                70% of the people who were interns at Sourcico later on became
                full-time employees at our company
              </h2>
              <p>
                At Sourcico the Interns are treated like full time employees and
                are expected to go above and beyond to meet the customers goals
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
                      srcset="../assets/images/internship-img.webp"
                      alt=""
                    />
                    <img src="../assets/images/internship-img.jpg" alt="" />
                  </picture>
                  <p>
                    If you are enrolled in University or just finishing your
                    education, but also if you’re visiting some of the private
                    Academies in the city, and you are excited about programming
                    or testing – always asking “What if?”, at Sourcico your
                    curiosity matters!We will give you your initial experience
                    with our 4 months Internship program because here the
                    opportunities are endless and the knowledge sharing is one
                    of the most important postulates.
                  </p>
                  <p>
                    At Sourcico the Interns are treated like full time employees
                    and are expected to go above and beyond to meet the
                    customers goals. You will have a chance to work with
                    different clients being shifted to different projects and
                    end up like one of our colleagues. For the four months spent
                    in fast paced environment, training is key. Our internship
                    program is focused completely ondevelopment, besides the
                    welcoming atmosphere we will help you grow professionally,
                    but also privately because we are looking for people that
                    would fit our company culture, not just people that knows
                    how to code. 70% of the people who were interns at Sourcico
                    later on became full-time employees at our company, and 100%
                    of the interns became Developers in the community.&nbsp;
                  </p>
                  <p>
                    So, this is pretty much as a guarantee that in the 4 months
                    that you spend here you’ll get the needed knowledge and
                    experience.
                  </p>
                  <div class="col-xs-12 col-md-8 offset-md-2 internship">
                    <p>
                      <strong
                        >We offer internships with a possibility for a full-time
                        employment in the following areas:</strong
                      >
                    </p>
                    <ul>
                      <li>Front-End development: React, Angular, Vue.</li>
                      <li>Back-End development: Node.js / C++</li>
                      <li>QA</li>
                      <li>
                        Mobile development: Android, iOS, Hybrid and Native
                        application
                      </li>
                    </ul>

                    <p>
                      <strong>Qualities that matter to us the most:</strong>
                    </p>
                    <ul>
                      <li>
                        Passion and enthusiasm for software development, as well
                        as understanding the full development life-cycle and
                        best practices
                      </li>
                      <li>
                        Ability to work and collaborate in team, capable of
                        individual “deep work” as well
                      </li>
                      <li>
                        Strong time-management skills and can meet deadlines
                        consistently
                      </li>
                      <li>
                        Takes direction well, but also able to make decisions
                        and take initiative
                      </li>
                      <li>
                        Up-to-date on the latest web technologies, trends and
                        initiatives
                      </li>
                      <li>
                        Professional, dependable, solid work ethic,
                        detail-oriented, dedication to quality, self-motivated
                      </li>
                    </ul>
                  </div>
                  <!-- <a class="read_more" href="#">Read more</a> -->
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
  name: "CareersContent",
  beforeCreate: function() {
    document.body.className = "main-layout clean";
  },
  data: function() {
    return {
      contents: [],
      loading: true
    };
  },

  created: function() {
    this.$http
      .get("https://source.mk/sourcico.com/wp-json/wp/v2/careers/")
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
  color: #42b983;
}
</style>
