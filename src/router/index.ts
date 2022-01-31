import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import Start from "../components/Start.vue";

const routes: Array<RouteRecordRaw> = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/start",
		name: "Start",
		component: Start
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;
