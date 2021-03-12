import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/add-new",
    name: "Adicionar",
    component: () =>
      import(/* webpackChunkName: "all" */ "../views/AddNew.vue")
  },
  {
    path: "/",
    name: "Todos",
    component: () =>
      import(/* webpackChunkName: "all" */ "../views/All.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
