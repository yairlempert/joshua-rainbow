<template>
  <Layout>
    <h1>
        <router-link class="link" to=".." append>Guide</router-link>: 
        {{$page.darkroom.title}}
    </h1>
    <div id="guide" v-html="$page.darkroom.content"/>
  </Layout>
</template>

<page-query>
query Darkroom ($path: String!) {
   darkroom: darkroom (path: $path) {
    id
    title
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Guide'
  }
}
</script>

<style lang="scss">
#guide {
    text-align: left;
    max-width:calc(min(100vh, 100%));

    * {
      overflow-wrap: break-word;
      max-width:100%;
    }
    
    >* {
      margin: calc(var(--spacer) * 4) 0; 
      display:block;
    }

    h1, h2, h3, h4, h5 {
      margin-top: calc(var(--spacer) * 10);
    }

    img {
        margin: calc(var(--spacer) * 4) auto;
        max-height:70vh;
        max-width:calc(min(70vh, 100%));
        width:auto;
        display:block;
    }

    table { 
        overflow-x: auto;
        width:fit-content;
        margin-left: auto;
        margin-right: auto;
    }
    th, td {
        padding: var(--spacer);
        border:1px solid var(--background-colour);
    }
    th { 
        font-weight: bold;
        background:var(--light-grey);
    }
    tr:nth-child(even) {
        background:var(--light-grey);
    }
}
</style>