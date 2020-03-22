<template>
  <Layout id="layout">
    <h1>Programming Projects</h1>
    <ul>
        <ProgrammingProjectListItem v-for="edge in $page.allProgramming.edges" 
                      :key="edge.node.id"
                      :title="edge.node.title"
                      :description="edge.node.content"
                      :date="edge.node.date"
                      :path="edge.node.github"/>
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
        date
        github
      }
    }
  }
}
</page-query>

<script>
import ProgrammingProjectListItem from "@/components/ProgrammingProjectListItem";

export default {
  components: {
    ProgrammingProjectListItem
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