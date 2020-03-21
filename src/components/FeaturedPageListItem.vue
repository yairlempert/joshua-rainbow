<template>
  <li class="featured-page-list-item">
    <g-image :alt="title" :src="image_path"/>
    <g-link :to="path" class="read" >{{ title }}</g-link>
  </li>
</template>

<script>
export default {
  props: ["title","image_path","path"],
};
</script>

<style scoped>
</style>