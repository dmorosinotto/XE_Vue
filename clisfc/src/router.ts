import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: "/",
			name: "home",
			component: Home
		},
		{
			path: "/about",
			name: "about",
			// route level code-splitting
			// this generates a separate chunk (about.[hash].js) for this route
			// which is lazy-loaded when the route is visited.
			component: () => import(/* webpackChunkName: "about" */ "./views/About.vue")
		},
		{
			path: "/detail/:id", // 208 route with params
			name: "detail",
			// lazy load component (separete chunk detail.[hash].js thanks to WebPack + Vue CLI)
			component: () => import(/* webpackChunkName: "detail" */ "./views/Detail.vue")
		}
	]
});
