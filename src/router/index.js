import Home from "@/views/Home.vue";
import { createRouter, createWebHashHistory } from "vue-router";

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
  {
    path: "/game",
    name: "Game",
    component: () => import(/* webpackChunkName: "game" */ "@/views/Game.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach((to) => {
  localStorage.activeRoute = to.path;
});

export default router;
