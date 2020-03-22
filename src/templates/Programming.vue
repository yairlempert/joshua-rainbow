<template>
  <Layout>
    <h1>
        <router-link class="link" to=".." append>Project</router-link>: 
        {{$page.programming.title}}
    </h1>
    <p :v-if="$page.programming.github.length > 0">Available on <a :href="$page.programming.github">GitHub</a></p>
    <div id="content" v-html="$page.programming.content"/>
  </Layout>
</template>

<page-query>
query Programming ($path: String!) {
   programming: programming (path: $path) {
    id
    title
    github
    content
  }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Programming Project'
  }
}
</script>

<style lang="scss">
#content {
    text-align: left;
    max-width:calc(min(100vh, 100%));

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

    pre {
        max-width:100%;
        border: 1px solid;
        margin: var(--spacer) 0; 
        padding: var(--spacer);
        overflow-x: auto;
    }
    code {
        word-wrap: break-word;
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