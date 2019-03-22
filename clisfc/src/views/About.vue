<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 203d copy from 116 #app -->
    <hr />
    <div v-if="arr">
      <!-- 205c for loop to show all events -->
      <xe-event
        v-for="evt in arr"
        :key="evt.EventId"
        :title="evt.Title"
        v-bind:event-date.sync="evt.EventDate"
        @like="alert(evt)"
      ></xe-event>
    </div>
    <div v-else>NO XE SESSIONS...</div>
    <hr />
    <!-- 205c force reload data -->
    <button @click="load(true)">RELOAD</button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// 203a import XeEvent component and register it
import XeEvent from "../components/XeEvent.vue";
// 205a import service for http + _cache
import * as http from "../utils/service";

@Component({
  components: { XeEvent } //203a
})
export default class About extends Vue {
  // 203b copy from 116 data // 10
  arr: http.IEvent[] = [];
  date = "2019-03-22T20:00:00"; // 15
  msg = "World"; // 3

  // 203c copy from 116 methods // 6
  doSomething(e: http.IEvent) {
    //205b print-out the current event data
    console.group(e.Title);
    console.warn(e.EventId, e.Abstract);
    e.Sessions.forEach(s => {
      console.group(s.Title);
      console.dir(s);
      console.groupEnd();
    });
    console.groupEnd();
  }
  // 14
  alert(e: http.IEvent) {
    this.doSomething(e);
    window.alert(`Handled LIKE $event ->${e.Abstract}`);
    // 209 imperative navigate to detail page -> passing id = e.EventId
    this.$router.push({ name: "detail", params: { id: e.EventId.toString() } });
  }

  // 205a use logic to call http API + handle _cache
  async load(force = false) {
    this.arr = await http.getAll(force);
  }

  mounted() {
    this.load();
  }
}
</script>