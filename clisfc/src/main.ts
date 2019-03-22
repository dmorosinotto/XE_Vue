import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import registerGlobalFilter from "./utils/filter";
// 202b import and run global filter registration
registerGlobalFilter();

Vue.config.productionTip = false;

new Vue({
	router,
	render: h => h(App)
}).$mount("#app");
