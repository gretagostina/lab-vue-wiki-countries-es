import { createRouter, createWebHistory } from "vue-router";
import CountriesList from "../components/CountriesList.vue";

const router = createRouter ({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Countries List",
            component: "CountriesList",
        },
        {
            path: "/about"
            name: "about",
        

            component: () => import("../views/AboutView.vue"),
        },
    ],
});

export default router;