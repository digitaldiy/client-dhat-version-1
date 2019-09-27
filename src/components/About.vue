<template>
<vs-row
  vs-align="center"
  vs-type="flex" vs-justify="space-around" vs-w="12">
  <vs-col :key="index" v-for="col,index in 4" vs-type="flex" vs-justify="center" vs-align="center" vs-w="2">
   <vs-list >
    <vs-list-item title="One text">{{ content.opening }}</vs-list-item>
    <vs-list-item title="Another text" subtitle="A little text">{{ content.opening }}</vs-list-item>
    <vs-list-item title="Some more text">{{ content.opening }}</vs-list-item>
    <vs-list-item title="Even more text" subtitle="Another little text">{{ content.opening }}</vs-list-item>
  </vs-list>
  </vs-col>
  </vs-row>
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
