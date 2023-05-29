import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "MainHome",
    component: ()=> import('@/pages/HomePage')  //.vue는 생락됨
  },
  {
    path: "/sub",
    name: "SubPage",
    component: ()=> import('@/pages/SubPage')
  },
]

const router = createRouter ({
  history: createWebHistory(),
  routes
})

export default router;
