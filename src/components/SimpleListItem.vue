<template>
  <li class="page-list-item">
    <g-link :to="path" class="read" >{{ title }}</g-link>
  </li>
</template>

<script>
export default {
  props: ["title","path"],
};
</script>

<style scoped>
strong {
  display: block;
}
</style>