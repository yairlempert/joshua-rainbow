<template>
  <li class="programming-project-list-item">
    <h2><g-link :to="path">{{ title }}</g-link></h2>
    <strong>{{ date }}</strong>
    <p v-html="description"/>
  </li>
</template>

<script>
export default {
  props: ["title","description","date","path"],
};
</script>

<style scoped>
</style>