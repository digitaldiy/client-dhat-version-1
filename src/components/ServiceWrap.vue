<template>
    



 <div class="md-layout md-gutter md-alignment-center neat">
   <div class="md-layout-item md-medium-size-33 md-small-size-50 md-xsmall-size-100" v-for="item in content" :key="item.node.id">
     <br/>
     <g-link :to="item.node.path">
      <span v-html="item.node.title"/>
      </g-link>
    </div>

    
  </div>

</template>

<script>
import Booking from "@/components/Booking"
export default {
   components: {
    Booking
  },
  props: {
        content: {
            type: Array,
            required: true
        }
}}
</script>

<style>
.neat{
text-align: center;


}
</style>