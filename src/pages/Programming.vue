<template>
  <Layout id="layout">
    <h1>Programming Projects</h1>
    <p>Here you can find links to a few programming projects of mine.</p>
    <p>I'm not going to waste my time writing self important egotistical blog posts about them. 
      If you want to know more, they all have readmes on their github repositories.</p>
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
    title: 'Programming'
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