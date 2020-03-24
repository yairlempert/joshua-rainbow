<template>
  <li>
    <ul>
      <strong>{{ category }}</strong>
      <SimpleListItem 
          v-for="edge in pages"
          :key="edge.node.id"
          :title="edge.node.title"
          :path="edge.node.path"/>
    </ul>
  </li>
</template>

<script>
import SimpleListItem from "@/components/SimpleListItem";

export default {
  components: {
    SimpleListItem
  },
  props: ["title","category","pages","path"]
};
</script>

<style scoped>
strong {
  display: block;
}
ul {
    flex-direction:column;
    margin-top: calc(var(--spacer) * 2);
    margin-bottom: calc(var(--spacer) * 2);
}
</style>