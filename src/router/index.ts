import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FirstParent from "@/views/FirstParent.vue";
import SecondParent from "@/views/SecondParent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/sample1",
    component: FirstParent
  },
  {
    path: "/sample2",
    component: SecondParent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
