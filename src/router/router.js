import { createRouter, createWebHistory } from "vue-router"
import AboutUs from "@/pages/AboutUs"
import Messenger from "@/pages/Messenger"
import TaskManager from "@/pages/TaskManager"
import Music from "@/pages/Music"
import Main from "@/pages/Main"
import Registration from "@/pages/Registration.vue";
import Account from "@/pages/Account.vue";

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/aboutus',
        component: AboutUs
    },
    {
        path: '/messenger',
        component: Messenger
    },
    {
        path: '/manager',
        component: TaskManager
    },
    {
        path: '/music',
        component: Music
    },
    {
        path: '/registration',
        component: Registration
    },
    {
        path: '/account',
        component: Account
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;