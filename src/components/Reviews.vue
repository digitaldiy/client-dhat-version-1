<template>
<div>
     <h4 class="md-display-4 center">What are people saying</h4>
      <md-divider class="md-inset"></md-divider>
    <div id='ndrsl-5dfbad0887d3740573fd79e2' class='ndrsl-widget smaller'></div>
</div>
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

<style lang="scss" scoped>
  .smaller {
    padding: 5vh, 5vh, 5vh, 5vh;
    max-width: 80vh;
    max-height:80vh;
  }
</style>