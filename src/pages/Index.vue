<template>
  <Layout>
    <g-image alt="A photograph of Josh" src="~/assets/img/index.jpg" immediate="true"/>
    <h1>Joshua Rainbow O'Sullivan</h1>
    <p>
      Here you can find my photography, programming projects, and darkroom guides.
    </p>
    <hr>
    <ul>
      <li>
        <g-image :alt="title" src="~/assets/img/thelittlebell.jpg" immediate="true"/>
        <g-link to="/photography/2020/the-little-bell/">The Little Bell</g-link>
      </li>
      <li>
        <g-image :alt="title" src="~/assets/img/corrineleland.jpg" immediate="true"/>
        <g-link to="/photography/galleries-and-artists-and-musicians/corrine-leland/">Corrine Leland</g-link>
      </li>
      <li>
        <g-image :alt="title" src="~/assets/img/databending.jpg" immediate="true"/>
        <g-link to="/photography/old-school-work/databending/">Databending</g-link>
      </li>
      <li>
        <g-image :alt="title" src="~/assets/img/cyprus.jpg" immediate="true"/>
        <g-link to="/photography/personal/cyprus/">Cyprus</g-link>
      </li>
    </ul>
  </Layout>
</template>

<script>
import FeaturedPageListItem from "@/components/FeaturedPageListItem";
export default {
  components: {
    FeaturedPageListItem
  },
  metaInfo: {
    title: 'Index'
  }
}
</script>

<style lang="scss" scoped>
ul {
  display:flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
li {
  display:inline-block;
  padding: var(--spacer);

  * {
    display:block;
  }

  img {
    max-width:20vw;
    height:auto;
  }
  @media(orientation:portrait) {
    img{
        max-width:40vw;
    }
  }
}
ul li:first-child {
  margin-top: var(--spacer);
}
</style>