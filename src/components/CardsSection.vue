<template>
  <div class="wrapper">
    <div id="cards">
        <div class="md-layout"> 
  
      
            <profile-card class="md-layout-item md-gutter md-size-25 md-small-size-50" v-for="item in projects" :key="item.node.id"
              :shadow-normal="false"
              :no-colored-shadow="false"
              :card-image="item.node.thumbnail"
            >
              <template slot="cardContent">
                <h4 class="card-title">
                   {{ item.node.title }}
                </h4>
                <h6 class="card-category text-gray">
                  CEO / Co-Founder
                </h6>
              </template>
              <template slot="cardAction">
                <md-button
                  href="javasript:void(0)"
                  class="md-twitter md-just-icon md-round"
                >
                  <i class="fab fa-twitter" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-facebook md-just-icon md-round"
                >
                  <i class="fab fa-facebook" />
                </md-button>
                <md-button
                  href="javasript:void(0)"
                  class="md-google md-just-icon md-round"
                >
                  <i class="fab fa-google" />
                </md-button>
              </template>
            </profile-card>
          </div>
        </div>
        </div>
        <!-- end Profile Cards -->
   
</template>
        
        


<script>
import ProfileCard from "@/components/cards/ProfileCard";

export default {
  components: {
    ProfileCard,
  },
  props: {
    sectionCardPlain: Boolean,
    sectionMorphingCards: Boolean,
      projects: {
            type: Array,
            required: true
        }
  },
  data() {
    return {
      manualRotateState: false,
      manualRotateState2: false,
      manualRotateState3: false,
      cardBlog: {
        cardBlog1: require("@/assets/img/examples/card-blog1.jpg"),
        cardBlog2: require("@/assets/img/examples/card-blog2.jpg"),
        cardBlog3: require("@/assets/img/examples/blog8.jpg"),
        cardBlog4: require("@/assets/img/examples/blog5.jpg"),
        cardBlog5: require("@/assets/img/examples/blog1.jpg"),
        cardBlog6: require("@/assets/img/examples/blog6.jpg")
      },
      cardProfile: {
        cardProfile1: require("@/assets/img/examples/card-profile4.jpg"),
        cardProfile2: require("@/assets/img/examples/card-profile1.jpg")
      },
      cardFullBg: {
        fullBg1: require("@/assets/img/examples/office1.jpg"),
        fullBg2: require("@/assets/img/examples/card-blog3.jpg")
      },
      cardRotating: {
        cardRotatingBg1: require("@/assets/img/examples/card-blog5.jpg"),
        cardRotatingBg2: require("@/assets/img/examples/card-blog6.jpg")
      },
      dynamicShadows: {
        dynamicShadowsBg1: require("@/assets/img/examples/color1.jpg"),
        dynamicShadowsBg2: require("@/assets/img/examples/color2.jpg"),
        dynamicShadowsBg3: require("@/assets/img/examples/color3.jpg")
      },
      avatarImg: require("@/assets/img/faces/avatar.jpg"),
      christianImg: require("@/assets/img/faces/christian.jpg"),
      marcImg: require("@/assets/img/faces/marc.jpg")
    };
  }
};
</script>
