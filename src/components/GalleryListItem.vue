<template>
  <li class="page-list-item">
    <g-link :to="path" class="read" >{{ title }}</g-link>
    <strong>{{ category }}</strong>
  </li>
</template>

<script>
export default {
  props: ["title","category","path"],
};
</script>

<style scoped>
strong {
  display: block;
}
</style>