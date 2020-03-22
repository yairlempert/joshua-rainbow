<template>
  <ul>
    <strong>{{ category }}</strong>
    <SimpleListItem 
        v-for="edge in pageEdges"
        :key="edge.node.id"
        :title="edge.node.title"
        :path="edge.node.path"/>
  </ul>
</template>

<script>
import SimpleListItem from "@/components/SimpleListItem";

export default {
  components: {
    SimpleListItem
  },
  props: ["title","category","path"],
  computed: {
    pageEdges() {
      return this.$page.allPhotography.edges
        .filter(
          function (edge, i, self) {
            return edge.node.category === this.category
            }.bind(this)
        ).sort(
          function (a, b) {
            return (a.node.title < b.node.title) ? -1 : 1
            }
        )
    }
  }
};
</script>

<style scoped>
strong {
  display: block;
}
</style>