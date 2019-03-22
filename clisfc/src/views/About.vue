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
  //
}
</script>