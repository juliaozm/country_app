import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About" },
  { path: "/login", name: "Login" },
  {
    path: "/:cca2",
    component: () => import("../views/ExpandedCountryWrapper.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "active",
});

export default router;
