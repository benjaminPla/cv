import { createRouter, createWebHashHistory } from "vue-router";
import Profile from "./components/Profile.vue";
const routes = [
    {
        path: "/",
        component: Profile,
    },
    {
        path: "/profile",
        component: Profile,
    },
    {
        path: "/education",
        component: () => import("./components/Education.vue"),
    },
    {
        path: "/technical-skills",
        component: () => import("./components/TechnicalSkills.vue"),
    },
    {
        path: "/work-experience",
        component: () => import("./components/WorkExperience.vue"),
    },
    {
        path: "/contact",
        component: () => import("./components/Contact.vue"),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;
//# sourceMappingURL=router.js.map