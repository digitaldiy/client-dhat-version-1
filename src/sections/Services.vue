<template>
  <Layout>
    <div>
      <h1 id="sec1" v-html="sectionInfo.FirstService" />
        <span class="md-caption" v-html="sectionInfo.FirstWhy"/>
        <ServiceWrap  :content="$page.acupuncture.edges" />

      <h1  v-html="sectionInfo.SecondService" />
        <span class="md-caption" v-html="sectionInfo.SecondWhy"/>
        <ServiceWrap  :content="$page.aesthetics.edges" />
      <h1   v-html="sectionInfo.ThirdService" />
         <span class="md-caption" v-html="sectionInfo.ThirdWhy"/>
         <ServiceWrap  :content="$page.therapies.edges" />
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

}
</style>