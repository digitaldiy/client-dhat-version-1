<template>
<vs-row vs-type="flex" vs-justify="space-around" vs-xs="12">
    <vs-col  class="colcard" type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-lg="3" vs-sm="4" vs-xs="12">
      <vs-card  v-for="item in projects" :key="item.node.id"  actionable class="cardx" >
        <div slot="header">
          <h3>
           {{ item.node.title }}
          </h3>
        </div>
        <div slot="media">
         <g-image
                :src="item.node.thumbnail"
                :alt="item.node.title"
                class="thumbnail"
            />
        </div>
        
       <div class="centerx">
      <vs-chip  v-for="(item, index) in item.node.categories" :key="index">{{ item }}</vs-chip>
      
   
       </div>
         <vs-button  :to="item.node.path" color="primary" type="flat" size="large" vs-align="right" >How Can It Help Me?</vs-button>
            <vs-button color="danger" type="flat">Book</vs-button>
            <MoreInfoModal :OneTime="item"/>
            
      </vs-card>
    </vs-col>

  </vs-row>

</template>

<script>
import MoreInfoModal from "@/components/MoreInfoModal";
export default {
    props: {
        projects: {
            type: Array,
            required: true
        }
    },
  
components:{
 MoreInfoModal,

}
}
</script>
<style scoped>
.thumbnail {
  height: 25vh;
  object-fit: cover;
  transition: all 0.15s ease;
  box-shadow: 0 0 40px -20px rgba(0,0,0,0.25);
}
.colcard {
  padding: 1vw;
}
</style>
