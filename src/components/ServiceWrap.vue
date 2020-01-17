<template>
    
 <div class="md-layout-item md-layout md-gutter">
   <div class="md-layout-item" v-for="item in content" :key="item.node.id">
        <g-link :to="item.node.path">
      <span class="md-subheading" v-html="item.node.title"/>
   </g-link>
</div></div>

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

