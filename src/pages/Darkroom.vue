<template>
  <Layout>
    <h1>Darkroom Guides</h1>
    <p>
      Here you can find a few guides to help you with using The University of Sheffield's 
      <a href="https://www.facebook.com/groups/sheffieldphotosoc/">Photographic Society</a> darkroom.
    </p>
    <ul class="guides">
        <DarkroomListItem v-for="edge in $page.allDarkroom.edges" 
                      :key="edge.node.id" 
                      :title="edge.node.title"
                      :path="edge.node.path"/>
    </ul>
    <g-image alt="An image of the darkroom" src="~/assets/img/darkroom.jpg" immediate="true" quality="100"/>
  </Layout>
</template>

<page-query>
query {
  allDarkroom(sortBy: "title", order: ASC) {
    totalCount
    edges {
      node {
        id
        title
        path
      }
    }
  }
}
</page-query>

<script>
import DarkroomListItem from "@/components/DarkroomListItem";

export default {
  components: {
    DarkroomListItem,
  },
  metaInfo: {
    title: 'Darkroom'
  }
}
</script>

<style scoped>
li {
    text-align: left;
}
</style>