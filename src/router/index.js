import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    meta: {
      title: "Sourcico - We translate your vision into reality",
      metaTags: [
        {
          name: "description",
          content:
            "Our Mission is to tailor the best fit solution, very fast and at a very competitive cost."
        },
        {
          property: "og:description",
          content: "We translate your vision into reality."
        }
      ]
    }
  },
  {
    path: "/about/",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/services/",
    name: "services",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Services.vue")
  },
  {
    path: "/careers/",
    name: "careers",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Careers.vue")
  },
  {
    path: "/contact/",
    name: "contact",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Contact.vue")
  },

  // for routes with named views, you have to define the `props` option for each named view:
  {
    path: "/career/:id/",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/CareerSingle.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
