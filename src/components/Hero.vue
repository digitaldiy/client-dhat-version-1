<template>
<div class="mix">
    <div class="hero">
      <div class="hero-title">
        <h1  v-html="info.opening" />
        <Booking/>
    </div></div></div>
</template>

<script>
import Booking from "@/components/Booking"
export default {
   components: {
   
    Booking
  },
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
    min-height:90vh;
    max-width: 100vw;
   
    
    background-color: white;
    word-spacing: 100vw;
    overflow: hidden; 
     background: linear-gradient(125deg, #FFFFFF 0%, #000000 100%), linear-gradient(200deg, #FFD9E8 0%, #FFD9E8 50%, #DE95BA calc(50% + 1px), #DE95BA 60%, #7F4A88 calc(60% + 1px), #7F4A88 75%, #4A266A calc(75% + 1px), #4A266A 100%), linear-gradient(113deg, #FFD9E8 0%, #FFD9E8 40%, #DE95BA calc(40% + 1px), #DE95BA 50%, #7F4A88 calc(50% + 1px), #7F4A88 70%, #4A266A calc(70% + 1px), #4A266A 100%);
    background-blend-mode: overlay, overlay, normal;

    
}
.hero-title {
  
    font-size: 9vh;
    font-weight: 900;
    
   
    font-family: 'Cookie', cursive;
    color:black;  
    top:45vh;
    position: absolute;
    left: 50%;
    right: -50%;
    transform: translate(-50%, -50%) ;
  
}

</style>