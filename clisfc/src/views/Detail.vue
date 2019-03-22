<template>
  <div v-if="evt && evt.EventId">
    <xe-card v-bind.sync="evt"><!-- v-bind object + two-way .sync --></xe-card>
  </div>
  <div v-else>EVENT {{ $route.params.id }} NOT FOUND!</div>
</template>

<script lang="ts">
import { Component, Prop, Watch, Vue } from "vue-property-decorator";
import * as http from "../utils/service";
import XeCard from "@/components/XeCard.vue";

@Component({
  components: {
    XeCard
  }
})
export default class Detail extends Vue {
  evt?: http.EventOrNull = null;

  //DATA FETCH https://router.vuejs.org/guide/advanced/data-fetching.html#fetching-before-navigation
  @Watch("$route", { immediate: true })
  async fetchData() {
    const eid = this.$route.params.id;
    this.evt = await http.getById(eid);
  }
}
</script>
