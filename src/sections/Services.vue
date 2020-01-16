<template>
  <Layout>
  <div class=wrap>
  <h1  v-html="sectionInfo.FirstService" />
  <ServiceWrap  :content="$page.acupuncture.edges" />
  <h1  v-html="sectionInfo.SecondService" />
  <ServiceWrap  :content="$page.aesthetics.edges" />
  <h1  v-html="sectionInfo.ThirdService" />
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
    
    background-color: white;
    word-spacing: 100vw;
    overflow: hidden; 
 
background: linear-gradient(125deg, #FFFFFF 0%, #000000 100%), linear-gradient(200deg, #FFD9E8 0%, #FFD9E8 50%, #DE95BA calc(50% + 1px), #DE95BA 60%, #7F4A88 calc(60% + 1px), #7F4A88 75%, #4A266A calc(75% + 1px), #4A266A 100%), linear-gradient(113deg, #FFD9E8 0%, #FFD9E8 40%, #DE95BA calc(40% + 1px), #DE95BA 50%, #7F4A88 calc(50% + 1px), #7F4A88 70%, #4A266A calc(70% + 1px), #4A266A 100%);
background-blend-mode: overlay, overlay, normal;

    
}
.wrap {
  
    font-size: 3rem;
    font-weight: 700;
    padding: 0;
    margin: 0 0 2rem 0;
    font-family: 'Cookie', cursive;
    color:black;  
    top:45vh;
    position: absolute;
    left: 50%;
    right: -50%;
    transform: translate(-50%, -50%) 
}

</style>