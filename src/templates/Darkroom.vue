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

    h1, h2, h3, h4, h5 {
        margin-top: calc(var(--spacer) * 10);
    }

    img {
        width:auto;
        display:block;
        margin: calc(var(--spacer) * 4) auto;
        max-width:100%;
        max-height:70vh;
    }

    p, table {
        box-sizing: border-box;
        margin: calc(var(--spacer) * 4) 0; 
    }

    table { 
        width:fit-content;
        display:block;
        margin: 0 auto;
        max-width:100%;
        overflow-x: auto;
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