<template>
  <Layout id="layout">
    <h1>Programming Projects</h1>
    <ul>
        <ProgrammingProject v-for="edge in $page.allProgramming.edges" 
                      :key="edge.node.id"
                      :title="edge.node.title"
                      :description="edge.node.content"
                      :date="edge.node.date"
                      :link="edge.node.link"/>
    </ul>
  </Layout>
</template>

<page-query>
query {
  allProgramming(sortBy: "date") {
    totalCount
    edges {
      node {
        id
        title
        content
        link
        date
      }
    }
  }
}
</page-query>

<script>
import ProgrammingProject from "@/components/ProgrammingProject";

export default {
  components: {
    ProgrammingProject
  },
  metaInfo: {
    title: 'Programming Projects'
  }
}
</script>

<style scoped>
ul {
  list-style: none;
}
ul li {
  margin-top: calc(var(--spacer) * 2);
}
</style>