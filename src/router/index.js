import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import { auth } from "../plugins/firebase"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/roster",
    name: "roster",

    component: () => import("../views/RosterView.vue"),
  },
  {
    path: "/add-player",
    name: "add-player",

    component: () => import("../views/AddPlayerView.vue"),
  },
  {
    path: "/standings",
    name: "standings",
    component: () => import("../views/StandingsView.vue"),
  },
  {
    path: "/events",
    name: "events",
    component: () => import("../views/EventsView.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/LoginView.vue"),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import("../views/SignUpView.vue"),
  },
  {
    path: "/locations/:id",
    name: "locations",
    component: () => import("../views/LocationsView.vue"),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue'),
    meta: {
      requiresAuth: true
    }
  }
];

const router = new VueRouter({
  routes,
});

router.beforeEach(async (to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !await auth.currentUser) {
    next('login');
  } else {
    console.log(auth.currentUser)
    next();
  }
})

export default router;
