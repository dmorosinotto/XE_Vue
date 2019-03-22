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

  // 206b props -> fields with @Prop decorator + options
  @Prop() Abstract!: string;
  @Prop({ type: String }) Title!: string;
  @Prop({ required: true }) EventId!: number;
  @Prop({
    validator: function(value: string | Date) {
      // The value must be a valid Date string
      let d = new Date(String(value));
      return d && !isNaN(d.getTime());
    }
  })
  EventDate!: string;

  // 206c computed -> getters + TS return annotation
  get timeAgo(): string {
    return this.diffDays > 0
      ? `tra ${this.diffDays}gg`
      : this.diffDays < -1
      ? `era ${-this.diffDays}gg fà`
      : "oggi";
  }

  get diffDays(): number {
    const today = new Date().getTime(); //millisecs of today
    const event = new Date(String(this.EventDate)).getTime();
    return Math.floor((event - today) / 1000 / 60 / 60 / 24); //gg
  }

  // 206d methods -> simple method + TS annotation
  addDay(n: number) {
    let d = new Date(String(this.EventDate));
    d.setDate(d.getDate() + n);
    //this.EventDate = d.toISOString(); //DON'T WORK props IS ONE-WAY DOWN
    // 16+bonus //TODO: MUST USE $emit EVENT update:EventDate -> .sync
    this.$emit("update:EventDate", d.toISOString());
  }

  // 206e watcher -> method + @Watch decorator (+ options if needed)
  @Watch("like") storeLike() {
    window.localStorage.setItem(
      "XE_" + (this.EventId || 0),
      this.like.toString()
    );
  }

  // 206f life-cycle hooks READ MORE: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  beforeCreate() {
    console.log("@BEFORECREATE it's not jet initialized ", this.like);
  }
  created() {
    let saved = parseInt(
      window.localStorage.getItem("XE_" + (this.EventId || 0)) || "",
      10
    );
    this.like = !isNaN(saved) ? saved : 0;
    console.log("@CREATED load from localStorage", this.EventId, this.like);
  }
  destroyed() {
    console.log("@DESTROYED save to localStorage", this.EventId, this.like);
    this.storeLike();
  }
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