<template>
    <div class="hero">
        <h1 class="hero-title" v-html="info.opening" />
    
    </div>
</template>

<script>
export default {
  data() {
    return {
      info: require("../../data/home.json")
    }
  }
}
</script>

<style>
.hero {
    text-align: center;
    text-emphasis: wrap;
    height:100vh;
    width: 480px;
    max-width: 100vw;
    margin: 0 auto;
    padding: 4rem 0 8rem 0;
    background-color: white;
     word-break: break-all;
        word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
}
.hero-title {
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
    font-family: 'Cookie', cursive;
    color:black;
      word-break: break-all;
        word-wrap: break-word; /* old name */
  overflow-wrap: break-word;
    
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