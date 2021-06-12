import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/edit/:name",
    name: "Edit",
    component: () => import(/* webpackChunkName: "edit" */ "@/views/Edit.vue"),
  },
  {
    path: "/setup",
    name: "Setup",
    component: () =>
      import(/* webpackChunkName: "setup" */ "@/views/Setup.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
