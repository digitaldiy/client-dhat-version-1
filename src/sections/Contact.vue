<template>
  <Layout>
    <div class="md-layout hero md-gutter md-layout-item md-xsmall-size-100">
  <div class="md-alignment-center-center">
  <h1  v-html="sectionInfo.FirstService" />
  

  </div></div>
      <div class="md-layout hero md-gutter md-layout-item md-xsmall-size-100">
 <div class="powr-map" id="2c67a51f_1579212806"/>

  </div>
  </Layout>
</template>



<script>
import ServiceWrap from "@/components/ServiceWrap"
export default {
          data() {
    return {
      sectionInfo: require("../../data/services.json")
    }
  },
  components: {
    ServiceWrap
  }
}
</script>


<style>
.hero {
    text-align: center;
    text-emphasis: wrap;
    min-height:90vh;
    max-width: 100vw;
    margin: 0 auto;
    
    
    word-spacing: 100vw;
    overflow: hidden; 
 


    
}


</style>