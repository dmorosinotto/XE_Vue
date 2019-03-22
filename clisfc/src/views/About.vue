<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
// 203a import XeEvent component and register it
import XeEvent from "../components/XeEvent.vue";

@Component({
  components: { XeEvent } //203a
})
export default class About extends Vue {
  // 203b copy from 116 data // 10
  arr = true;
  date = "2019-03-22T20:00:00"; // 15
  msg = "World"; // 3
}
</script>