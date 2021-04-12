import Vue from "vue";
import VueRouter from "vue-router";
import Aufgaben from "../views/Aufgaben.vue";
import Stellenanzeigen from "../views/Stellenanzeigen.vue";
import Bewerber from "../views/Bewerber.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "aufgaben",
    component: Aufgaben,
  },
  {
    path: "/stellenanzeigen",
    name: "Stellenanzeigen",
    component: Stellenanzeigen,
  },
  {
    path: "/bewerber",
    name: "Bewerber",
    component: Bewerber,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
