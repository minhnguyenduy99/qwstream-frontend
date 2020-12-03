import Vue from "vue";
import VueRouter from "vue-router";

import {
  HomePage,
  StreamPage,
  CreateStreamPage,
  LoginPage,
  RegisterPage,
  ProfilePage,
  SearchPage
} from "@/views";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage
  },
  {
    path: "/stream",
    name: "Stream",
    component: StreamPage
  },
  {
    path: "/stream/create",
    name: "CreateStream",
    component: CreateStreamPage
  },
  {
    path: "/register",
    name: "Register",
    component: RegisterPage
  },
  {
    path: "/login",
    name: "Login",
    component: LoginPage
  },
  {
    path: "/search",
    name: "Search",
    component: SearchPage
  },
  {
    path: "/user/profile/:user_id",
    name: "Profile",
    component: ProfilePage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
