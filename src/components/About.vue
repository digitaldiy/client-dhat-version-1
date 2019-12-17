<template>
   <vs-list vs-align="center">
    <vs-list-item title="Even more text" subtitle="Another little text">{{ content.opening }}</vs-list-item>

   <vs-progress :percent="100" color="primary">primary</vs-progress>
  <vs-progress :percent="90" color="warning">warning</vs-progress>
  <vs-progress :percent="75" color="danger">danger</vs-progress>
 
  <vs-progress :percent="45" color="dark">dark</vs-progress>
  <vs-progress :percent="30" color="rgb(164, 69, 15)">RGB</vs-progress>
   </vs-list>
</template>

<script>
export default {
  data() {
    return {
      content: require("../../data/about.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: center;
    width: 480px;
    max-width: 100%;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
}

.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
}
.hero-title p,
.hero-subtitle p {
    margin: 0;
    padding: 0;
}
.hero-subtitle {
    font-size: 1.15em;
    font-weight: 400;
    line-height: 1.68;
    padding: 0;
    margin: 0;
    opacity: 0.6;
}
</style>
