<template>
  <Layout>
    <div id="wrapper">
      <h1>Programming Projects</h1>
      <p>Here you can find links to a few programming projects of mine.</p>
      <p>You can find out more in the readmes on their github repositories.</p>
      <ul>
          <ProgrammingProject v-for="edge in $page.allProgramming.edges" 
                        :key="edge.node.id"
                        :title="edge.node.title"
                        :description="edge.node.content"
                        :date="edge.node.date"
                        :link="edge.node.link"/>
      </ul>
    </div>
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
#wrapper {
  max-width:calc(min(100vh, 100%));
  margin:0;
}
ul {
  list-style: none;
  padding-left:0;
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
}
ul li {
  margin: calc(var(--spacer) * 2) 0;
  flex-basis:33%;
  padding: 0 5%;
  box-sizing: border-box;
}
@media(orientation: portrait) {
  ul li {
    flex-basis:50%;
  }
}
</style>