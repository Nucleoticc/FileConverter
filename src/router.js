import { createRouter, createWebHistory } from "vue-router";

import homeRoute from "./components/pages/Home";

const videoRoute = () => import('./components/pages/Video')

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: homeRoute },
    { path: "/video", component: videoRoute },
  ],
});

export default router;
