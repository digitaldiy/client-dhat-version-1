
<template>
  <Layout>

<md-layout class="container">
    
    <md-layout md-flex-xsmall="100" md-flex-small="100" md-flex-medium="100" md-flex-large="100" md-flex-xlarge="100">


      <Hero/>
      <Services/>
      <Reviews/>
      <Contact/>
    </md-layout>
    
 
    
  </md-layout>











  </Layout>
</template>

<page-query>
query Posts {
	acupuncture: allAcupuncturePost (perPage: 4) {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
          fileInfo {
          directory
   
        }
      }
    }
  },
  aesthetics: allAestheticsPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
        categories
      }
    }
  },
  therapies: allTherapiesPost (perPage: 4) {
    edges {
      node {
        id
        path
        title
        categories
      }
    }
  }
}
</page-query>

<script>

import Hero from "@/components/Hero"

import Services from "@/sections/Services"
import Reviews from "@/components/Reviews"
import Contact from "@/sections/Contact"



export default {
  components: {
   
    Hero,
    Services,
    Reviews,
    Contact

  }
}
</script>



<style>
.container {
  background-color: white;
  min-height: 100px;
  border-color: black;
  align-items: center;
  justify-content: center;
  /*border-style: dotted;*/
  border-width: 1px;
  padding: 8px;
}

body {
  background: #eee;
}

    



</style>