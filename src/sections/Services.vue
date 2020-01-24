<template>
  <Layout>
    <div>
      <h1 class="neat" id="sec1" v-html="sectionInfo.FirstService" />
        <span class="md-caption neat" v-html="sectionInfo.FirstWhy"/>
        <ServiceWrap  :content="$page.acupuncture.edges" />

      <h1  class="neat" v-html="sectionInfo.SecondService" />
        <span class="md-caption neat" v-html="sectionInfo.SecondWhy"/>
        <ServiceWrap  :content="$page.aesthetics.edges" />
      <h1  class="neat"  v-html="sectionInfo.ThirdService" />
         <span class="md-caption neat" v-html="sectionInfo.ThirdWhy"/>
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
.neat {
    text-align: center;
   
  

  

}
</style>