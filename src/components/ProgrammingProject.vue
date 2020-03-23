<template>
  <li class="programming-project-list-item">
    <strong><g-link :to="link">{{ title }}</g-link></strong>
    <strong>{{ date }}</strong>
    <p v-html="description"/>
  </li>
</template>

<script>
export default {
  props: ["title","description","date","link"],
};
</script>

<style scoped>
strong {
  display:block;
}
</style>