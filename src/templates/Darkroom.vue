<template>
  <Layout>
    <h1>
        <router-link class="link" to=".." append>Guide</router-link>: 
        {{$page.darkroom.title}}
    </h1>
    <div id="guide-content" v-html="$page.darkroom.content"/>
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
#guide-content {
    text-align: left;
    max-width:calc(min(100vh, 100vw));

    h1, h2, h3, h4, h5 {
        margin-top: calc(var(--spacer) * 5);
    }

    img {
        width:auto;
        display:block;
        margin: var(--spacer) auto;
        max-width:100%;
        max-height:70vh;
    }

    p, table {
        box-sizing: border-box;
        padding: var(--spacer) 0; 
    }

    table { 
        width:fit-content;
        display:block;
        margin: 0 auto;
        max-width:100%;
        overflow-x: auto;
    }
    th, td {
        padding: calc(var(--spacer) / 2);
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