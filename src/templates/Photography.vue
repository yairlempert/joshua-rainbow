<template>
  <Layout>
    <h2>
      {{$page.photography.title}} ({{$page.photography.category}})
    </h2>
    <router-link class="link" to="../.." append>Back</router-link>
    <div class="gallery" v-html="$page.photography.content"/>
    <p v-if="$page.photography.description.length > 0" id="description" v-html="$page.photography.description"/>
  </Layout>
</template>

<page-query>
query Photography ($path: String!) {
   photography: photography (path: $path) {
    id
    title
    category
    description
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Photography'
  }
}
</script>

<style lang="scss">
.gallery {
  p {
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: var(--spacer) 0;
    white-space: pre;
  }
  p img {
    max-height: 70vh;
    max-width:100%;
    width:auto;
    margin: var(--spacer);
  }
}

#description {
  padding: calc(var(--spacer)*2);

border-style:solid;
  border-width:1px;

  background: var(--light-grey);
}
</style>