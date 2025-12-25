import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: {
      title: "首页",
    },
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/AboutView.vue"),
    meta: {
      title: "关于",
    },
  },
  {
    path: "/input",
    name: "input",
    component: () => import("../views/input/index.vue"),
  },
  {
    path: "/select",
    name: "select",
    component: () => import("../views/select/index.vue"),
  },
  {
    path: "/popper",
    name: "popper",
    component: () => import("../views/popper/index.vue"),
  },
  {
    path: "/text-open-close",
    name: "text-open-close",
    component: () => import("../views/text-open-close/index.vue"),
    meta: {
      title: "多行文本展开收起",
    },
  },
  {
    path: "/teleport",
    name: "teleport",
    component: () => import("../views/teleport/index.vue"),
    meta: {
      title: "Teleport",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
