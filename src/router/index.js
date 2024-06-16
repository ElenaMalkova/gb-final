import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import CatsView from "@/views/CatsView.vue";
import SingleCatView from "@/views/SingleCatView.vue";
import NewsView from "@/views/NewsView.vue";
import HelpfulView from "@/views/HelpfulView.vue";
import SupportView from "@/views/SupportView.vue";
import AdminCatForm from "@/components/AdminCatForm.vue";
import ContactsView from "@/views/ContactsView.vue";
import NotFound from "@/views/NotFound.vue";

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: "/cats",
        name: "cats",
        component: CatsView,
    },
    {
        path: "/cat/:id",
        name: "cat",
        component: SingleCatView,
    },
    {
        path: "/news",
        name: "news",
        component: NewsView,
    },
    {
        path: "/helpful",
        name: "helpful",
        component: HelpfulView,
    },
    {
        path: "/support",
        name: "support",
        component: SupportView,
    },
    {
        path: "/contacts",
        name: "contacts",
        component: ContactsView,
    },
    {
        path: "/admin",
        name: "admin",
        component: AdminCatForm,
    },
    {
        path: "/:catchAll(.*)",
        component: NotFound,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;