import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import FirstParent from "@/views/FirstParent.vue";
import SecondParent from "@/views/SecondParent.vue";
import ThirdParent from "@/views/ThirdParent.vue";
import FourthParent from "@/views/FourthParent.vue";
import FifthParent from "@/views/FifthParent.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/sample1",
    component: FirstParent
  },
  {
    path: "/sample2",
    component: SecondParent
  },
  {
    path: "/sample3",
    component: ThirdParent
  },
  {
    path: "/sample4",
    component: FourthParent
  },
  {
    path: "/sample5",
    component: FifthParent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
