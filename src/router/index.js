import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

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
    path: "/locations/:id",
    name: "locations",
    component: () => import("../views/LocationsView.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
