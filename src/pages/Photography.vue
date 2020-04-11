<template>
  <Layout>
    <h1>My Pictures!</h1>
    <ul>
      <PhotographyCategory v-for="category in categories"
                    :key="category"
                    :category="category"
                    :pages="pagesOfCategory(category)"/>
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
  },
  methods: {
    pagesOfCategory(category) {
      return this.$page.allPhotography.edges
        .filter(
          function (edge, i, self) {
            return edge.node.category === category
            }.bind(this)
        ).sort(
          function (a, b) {
            return (a.node.title < b.node.title) ? -1 : 1
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
  margin-top: var(--spacer);
  text-align:left;
}
@media(orientation: portrait) {
  ul {
    flex-direction:column;
    align-items: flex-start;
  }  
}
</style>