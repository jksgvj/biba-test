import { createRouter, createWebHistory } from "vue-router"
import Main from "@/pages/Main"
import AboutUs from "@/pages/AboutUs"

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/aboutus',
        component: AboutUs
    },
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})

export default router;