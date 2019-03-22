<template>
  <div>
    <aside>{{ EventDate | dateformat("dd/MM/yy alle HH:mm") }}</aside>
    <h2>{{ Title }}</h2>

    <article v-html="Abstract"></article>
    <button @click="like = ++like % 6">I like</button>
    <span v-for="i in [1, 2, 3, 4, 5]" :key="i">
      <i :style="{ color: i <= like ? 'red' : 'gray' }">&hearts;</i>
    </span>
    <footer>
      <button @click="addDay(+1)">+</button>
      <button @click="addDay(-1)">-</button>
      <span :style="{ color: diffDays < 0 ? 'red' : 'green' }">
        {{ timeAgo }}
      </span>
    </footer>
  </div>
</template>

<script lang="ts">
// 206 Vue component using class syntax + TS @decorators ("NG-way")
// READ MORE https://github.com/vuejs/vue-class-component + https://github.com/kaorun343/vue-property-decorator
import { Component, Prop, Watch, Vue } from "vue-property-decorator";

@Component
export default class XeCard extends Vue {
  // 206a data() -> instance fields (must be initialized)
  like: number = 0;
}
</script>

<style scoped>
div {
  border: 2px solid #da3636;
  border-radius: 6px;
  padding: 10px;
  margin: 10px;
}
</style>