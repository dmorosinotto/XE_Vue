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
export default {};
</script>

<style scoped>
</style>