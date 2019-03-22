<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- 203d copy from 116 #app -->
    <hr />
    <div v-if="arr">
      <!-- 17 -->
      <xe-event :title="msg" v-bind:event-date.sync="date" @like.once="alert"
        ><!-- 12 + 14 --></xe-event
      >
      <!-- 15 + 16+bonus .sync -->
    </div>
    <hr />
    <label>On parent DATE = <input v-model="date"/></label>
    <button @click="arr = !arr"><!-- 17 -->TOGGLE</button>
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

  // 203c copy from 116 methods // 6
  doSomething(txt: any) {
    this.msg = "XE" + (txt || "java"); // 6+bonus
  }
  // 14
  alert(e: any) {
    this.doSomething(e);
    window.alert(`Handled LIKE $event ->${e}`);
  }
}
</script>