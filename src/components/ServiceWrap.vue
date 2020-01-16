<template>
    
        
  
 <div class="md-layout md-size-90 md-alignment-vertical-vertical">
   <div v-for="item in content" :key="item.node.id">
      <span class="md-subheading" v-html="item.node.title"/>
            <g-link :to="item.node.path">
              <md-button class="md-primary md-simple"> More Info</md-button>
            </g-link>
         
              <md-button class="md-primary md-simple"><div class="powr-contact-form" id="0c1e130f_1579201566"></div></md-button>
  
</div></div>
    
</template>

<script>
export default {
  props: {
        content: {
            type: Array,
            required: true
        }
    
}}
</script>

