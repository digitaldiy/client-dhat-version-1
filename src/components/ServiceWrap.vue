<template>
    
<div>
   <div v-for="item in content" :key="item.node.id">
      <span class="md-subheading" v-html="item.node.title"/>
            <g-link :to="item.node.path">
              <md-button class="md-primary md-simple"> More Info</md-button>
            </g-link>
            <Booking/>
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

