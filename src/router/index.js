// index.js
import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ArticleView from "@/views/ArticleView.vue";
import SingleArticleView from "@/views/SingleArticleView.vue";


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
        component: SingleArticleView,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;