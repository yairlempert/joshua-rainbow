<template>
  <Layout id="layout">
    <h1>My Pictures!</h1>
    <ul>
      <PhotographyCategory v-for="category in categories"
                    :key="category"
                    :category="category"/>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allPhotography(sortBy: "category", order: DESC) {
    totalCount
    edges {
      node {
        title
        category
        path
      }
    }
  }
}
</page-query>

<script>
import PhotographyCategory from "@/components/PhotographyCategory";

export default {
  components: {
    PhotographyCategory
  },
  metaInfo: {
    title: 'Photography'
  },
  computed: {
    categories() {
      return this.$page.allPhotography.edges
        .map(edge => edge.node.category)
        .filter(
          function (v, i, self) {
            return self.indexOf(v) === i
          }
        )
    }
  }
}
</script>

<style scoped>
ul {
    display:flex;
    flex-direction:row;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-around;
    list-style: none;
}
ul li {
    text-align:left;
}
@media(orientation: portrait) {
  ul {
      flex-direction:column;
      align-items: flex-start;
  }  
}
</style>