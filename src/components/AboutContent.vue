<template>
  <div class="hello">
    <div v-for="post in posts" v-bind:key="post.id">
      <!-- business -->
      <div class="business">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>{{ post.section_1_top_title }}</span>
                <h2>
                  {{ post.section_1_title }}
                </h2>
                <p>
                  {{ post.section_1_sub_title }}
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
                        srcset="../assets/images/business_img1.webp"
                        alt=""
                      />
                      <img src="../assets/images/business_img1.jpg" alt="" />
                    </picture>
                    <p>
                      Sourcico was established to supply high quality, cost
                      effective offshore software development services. Sourcico
                      was established to meet the growing need of highly skilled
                      software engineers. Sourcico’s purpose is to enable you to
                      speed-up your development pace while maintaining
                      cost-efficiency and flexibility. Sourcico is an
                      international company with headquarters in Israel that
                      includes management, administration, sales and a CTO, and
                      offshore competence centers that include local management,
                      technical leadership, recruiting, software engineers and
                      quality assurance. In short Our Mission is to tailor the
                      best fit solution, very fast and at a very competitive
                      cost.
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
      <div class="projects">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="titlepage">
                <span>Leadership</span>
                <h2>People Make the Difference</h2>
                <p>
                  Sourcico‘s founders and directors have been at the forefront
                  of outsourcing R&D for many years, and have leveraged this
                  extensive experience on numerous outsourcing projects facing
                  many challenges to establish Sourcico as a fault-tolerant
                  operation with firm and success proven methodologies.
                </p>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-6">
                  <div class="projects_box">
                    <div class="col-md-12">
                      <div class="projects_box">
                        <h2>
                          <strong>Ilan Aroush</strong> <br />CEO & Founder
                        </h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Ilan has more than 2 decades of experience as a
                          manager, business developer, sales executive,
                          technology enthusiast, outsourcing expert and a
                          leading evangelist of offshore product development.
                          Ilan has many years of experience in delivering
                          complex outsourcing solutions for the hi-tech industry
                          in Israel and worldwide. Ilan’s vision of service is
                          to “always excel providing the best resources while
                          covering all angles all the way to client’s
                          satisfaction”. Ilan gathered all of his extensive
                          experience and embedded it into an optimized
                          outsourcing system that enables our clients to reach
                          the cutting edges of technology. Ilan has successfully
                          implemented the science of distributed software
                          development in many organizations. Ilan drives
                          motorcycles and plays the drums.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="projects_box">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="projects_box">
                        <h2><strong>Arik Siegel</strong> <br />Founder</h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Arik is an experienced entrepreneur and a veteran of
                          the outsourcing industry in Israel since 1995. Arik’s
                          former experience includes CEO of NGSoft, formerly
                          Giant Steps, leading Israeli outsourcing services
                          company, sold to BATM (LSE: BATM). Arik is involved in
                          the high-tech industry in Israel both as an investor
                          and in active management roles. After using and
                          providing outsourcing services in the last 20 years –
                          Arik took this experience in technology and in
                          management and implanted into Sourcico and established
                          it as an optimal offshore services organization.Arik
                          holds BSc in Electronics from the Tel Aviv University.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-6">
                  <div class="projects_box">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="projects_box">
                        <h2>
                          <strong>Ilija Stevkov</strong> <br />GM, Macedonia
                        </h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Ilija is an experienced manager in the IT industry in
                          Macedonia. Ilija has specialized in locating and
                          hiring the right resources for projects that he
                          successfully managed. Ilija has a deep knowledge of
                          the IT industry in Macedonia and South East Europe. He
                          has hired, trained and inspired a lot of IT
                          professionals with proven track record and results.
                          Ilija is considered to be one of the top leaders of
                          Macedonia’s technology community and has served on the
                          MASIT executive board and on the Macedonian Customs
                          advisory board. Ilija holds a Bachelor of Science at
                          the Faculty of Electrotechnics and Information
                          Technologies at the University of “St.Cyril and
                          Methodius” Skopje, computer technology, informatics
                          and automation group.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="projects_box">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="projects_box">
                        <h2>
                          <strong>Wekoslav Stefanovski</strong> <br />Head of
                          Software
                        </h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Wekoslav has extensive experience at technical
                          leadership positions along with more than a decade of
                          hand-on experience as a senior developer and team
                          leader on various sizable projects, leading their
                          design, implementation and delivery. His two main
                          professional passions are making better programs, and
                          making better programmers. Wekoslav specializes in the
                          SDLC process, especially continuous integration and
                          delivery, he is also an expert on Microsoft
                          development stack. As a mentor he is also a lecturer
                          on various programming courses and has been presenting
                          his work on major IT conferences in Macedonia and
                          South East Europe. Additionally, he is very active in
                          the local IT community and on various developer
                          groups. Wekoslav holds a Bachelor of Science at the
                          Faculty of Electrotechnics and Information
                          Technologies at the University of “St.Cyril and
                          Methodius” Skopje, computer technology, informatics
                          and automation group.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-10 offset-md-1">
              <div class="row">
                <div class="col-md-6">
                  <div class="projects_box ">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="projects_box ">
                        <h2>
                          <strong>Bojan Stojanovic</strong> <br />Chief Project
                          Officer
                        </h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Bojan is an experienced IT Professional. His IT
                          knowledge is supported by Bachelor degree in Computer
                          science. Bojan started his career as QA engineer
                          eventually moved to management. He is a founder and
                          one of the leaders in Macedonian QA Community. As a
                          Head of QA Department in Endava and Group Head of QA
                          in Transactor he was leading extensive and distributed
                          teams, working on a large projects in Banking and
                          Insurance domains, managing people, process and
                          especially responsible for delivery. Working in AGILE
                          environments, for more then 5 years, he is striving to
                          enable people to be the best that they can be and to
                          deliver to the client what he really needs, not what
                          he originally requested and trying to add additional
                          value to any delivered project.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="projects_box ">
                    <!-- <figure><img src="../assets/images/projects_img.png" alt="#"></figure> -->

                    <div class="col-md-12">
                      <div class="projects_box ">
                        <h2>
                          <strong>Zarko Simonovski</strong> <br />
                          Front-end Division Guru
                        </h2>
                        <a href="#"
                          ><i class="fa fa-linkedin" aria-hidden="true"></i
                        ></a>
                        <p>
                          Zarko has a lot of experience as a software architect
                          and developer. He possesses a wide vision
                          architectural skills enabling him to find the right
                          solution between system requirements and the best
                          suited platform. Zarko is also teaching and leading
                          teams. His software development experience includes
                          variety of different popular and trendy technology
                          stacks along with traditional wide knowledge and
                          experience. He is also an expert on technologies that
                          enable full stack development. Zarko is very active
                          and recognized member of the local and global
                          development communities, providing and sharing
                          knowledge in form of code snippets, plugins and
                          components and also lecturing on conferences. Zarko is
                          avid basketball player. His other passions are
                          collecting/translating JS algorithms, learning new
                          technologies and creating and playing 2/3D games.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                    <picture>
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
  name: "Aboutontent",
  data: function() {
    return {
      posts: []
    };
  },

  created: function() {
    var pageId = 196;
    this.$http
      .get("https://source.mk/sourcico.com/wp-json/acf/v3/pages/258", {
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
