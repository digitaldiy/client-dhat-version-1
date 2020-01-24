<template>
 <div class="md-layout md-gutter md-alignment-center neat">
   <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="item in content" :key="item.node.id">
     <div id='ndrsl-5dfbad0887d3740573fd79e2' class='ndrsl-widget md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100 smaller'/>
    </div></div>
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
</style>x