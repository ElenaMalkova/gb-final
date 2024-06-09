import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleView from "@/views/ArticleView.vue";
// import ProjectView from "@/views/ProjectView.vue";


const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: "/articles",
        name: "articles",
        component: ArticleView,
    },

    {
        path: "/articles/:id",
        name: "article",
        component: ArticleView,
    },
    /*{
        path: "/projects",
        name: "projects",
        component: ProjectView,
    }*/
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ '../views/AboutView.vue')
    }*/
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
