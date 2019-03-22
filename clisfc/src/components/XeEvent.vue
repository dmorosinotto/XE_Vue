<template>
  <div>
    <!-- 201a copy from 116 x-template 11+bonus -->
    <h2>
      You can use
      <a href="https://vuejs.org/v2/guide/single-file-components.html#ad">
        SFC = Single File Component
      </a>
    </h2>
    {{ speaker }}
    <!-- 14 -->
    <button @click="$emit('like', speaker)">I &hearts;</button>
    <!-- 12 -->
    <article>
      {{ title }}
      <!-- 13 -->
      <i
        :style="{
          color: diffDays < 0 ? 'red' : 'green',
          'font-size': 24 / diffDays + 'px'
        }"
        ><!-- 21 -->
        {{ timeAgo }}
      </i>
    </article>
    <aside>{{ eventDate | dateformat("dd/MM/yy alle HH:mm") }}</aside>
    <!-- 16 -->
    <button @click="addDay(+1)">+</button>
    <button @click="addDay(-1)">-</button>
  </div>
</template>

<script>
// 201b copy from 116 // 11 + add Vue.export to enable TS intellisence
export default {
  //data: { speaker: "Pluto" }, //THIS DOESN'T WORKS!
  //MUST BE A FUNCITION THAT RETURN INSTANCE DATA !!!
  data() {
    return { speaker: "Pluto" };
  },
  props: {
    // 12 ["title", "eventDate"],
    title: String,
    eventDate: {
      //18    https://vuejs.org/v2/guide/components-props.html#Prop-Validation
      type: String,
      //required: true
      //default: new Date().toISOString()
      validator: function(value) {
        // The value must be a valid Date string
        let d = new Date(String(value));
        return d && !isNaN(d.getTime());
      }
    }
  },
  computed: {
    // 13
    timeAgo: function() {
      return this.diffDays > 0
        ? `tra ${this.diffDays}gg`
        : this.diffDays < -1
        ? `era ${-this.diffDays}gg fà`
        : "oggi";
    },
    diffDays: function() {
      const today = new Date().getTime(); //millisecs of today
      const event = new Date(String(this.eventDate)).getTime();
      return Math.floor((event - today) / 1000 / 60 / 60 / 24); //gg
    }
  },
  methods: {
    // 16
    addDay: function(n) {
      let d = new Date(String(this.eventDate));
      d.setDate(d.getDate() + n);
      //this.eventDate = d.toISOString(); //DON'T WORK props IS ONE-WAY DOWN
      // 16+bonus //TODO: MUST USE $emit EVENT update:eventDate -> .sync
      this.$emit("update:eventDate", d.toISOString());
    }
  },
  // 17 READ MORE: https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram
  beforeCreate() {
    console.log("life-cycle hooks BEFORECREATE @" /*, this.eventDate */); //NOT JET INITIALIZED!!!
  },
  created() {
    console.log("life-cycle hooks CREATED @", this.eventDate);
  },
  updated() {
    console.log("life-cycle hooks UPDATED @", this.eventDate, this.title);
  },
  destroyed() {
    console.log("life-cycle hooks DESTROYED @", this.eventDate);
  },
  template: "#xe-event-tpl" //"<div>{{speaker}}</div>" // 11+bonus "#xe-event-tpl"
};
</script>

<style scoped>
</style>