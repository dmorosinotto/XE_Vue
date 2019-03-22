import Vue from "vue";

export default function registerGlobalFilter() {
	// 202a copy from 116 // 13+bonus + added TS annotations
	const pad2 = (n: number) => ("00" + n).substr(-2);
	Vue.filter("dateformat", function(value: any, fmt: string) {
		const d = new Date(String(value));
		return (fmt || "dd/MM/yyyy") // 13+bonus
			.replace("dd", pad2(d.getDate()))
			.replace("MM", pad2(d.getMonth() + 1))
			.replace("yyyy", d.getFullYear() + "") //bug fix number -> string
			.replace("yy", pad2(d.getFullYear()))
			.replace("HH", pad2(d.getHours()))
			.replace("mm", pad2(d.getMinutes()));
	});
}
