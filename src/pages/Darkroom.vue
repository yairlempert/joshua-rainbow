<template>
  <Layout>
    <h1>Darkroom Guides</h1>
    <p>
      Here you can find a few guides to help you with using The University of Sheffield's 
      <a href="https://www.facebook.com/groups/sheffieldphotosoc/">Photographic Society</a>
      darkroom.
    </p>
    <ul class="guides">
        <SimpleListItem v-for="edge in $page.allDarkroom.edges" 
                      :key="edge.node.id" 
                      :title="edge.node.title"
                      :path="edge.node.path"/>
    </ul>
    <g-image alt="An image of the darkroom" src="~/assets/img/darkroom.jpg" immediate="true" quality="100"/>
    <h2>Other Resources</h2>
    <p>
      If you want to learn more about darkroom techniques, I'd recommend the following resources:
    </p>
    <ul>
      <li><a href="https://www.ilfordphoto.com/category/learning-zone/">Ilford Photo's Learning Zone</a></li>
      <li><a href="http://www.alternativephotography.com/">AlternativePhotography.com</a></li>
      <li><a href="https://www.youtube.com/user/linabessonova">Lina Bessanova (YouTube)</a></li>
      <li><a href="https://www.youtube.com/user/borutpeterlin">Topshit Photography (YouTube)</a></li>
      <li><a href="https://www.youtube.com/channel/UCUcaft-3hNIuB1L1IgARPoQ">The Naked Photographer (YouTube)</a></li>
      <li><a href="https://www.photrio.com/">Photrio (Forum)</a></li>
      <li><a href="https://www.facebook.com/groups/576750649124280/">The Darkroom (FaceBook Group)</a></li>
    </ul>
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
import SimpleListItem from "@/components/SimpleListItem";

export default {
  components: {
    SimpleListItem,
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