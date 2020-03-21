<template>
  <Layout id="layout">
    <h1>My Pictures!</h1>
    <ul>
        <GalleryListItem v-for="edge in $page.allPhotography.edges" 
                      :key="edge.node.id"
                      :title="edge.node.title"
                      :category="edge.node.category"
                      :path="edge.node.path"/>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allPhotography(sortBy: "category") {
    totalCount
    edges {
      node {
        id
        title
        category
        path
      }
    }
  }
}
</page-query>

<script>
import GalleryListItem from "@/components/GalleryListItem";

export default {
  components: {
    GalleryListItem
  },
  metaInfo: {
    title: 'Photography'
  }
}
</script>

<style scoped>
ul {
    display:flex;
    flex-direction:column;
    align-items: flex-start;
}
ul li {
    text-align:left;
}
</style>