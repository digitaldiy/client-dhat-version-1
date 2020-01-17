
<template>
  <Layout>


<div >

      <Services/>
      <Contact/>
</div>








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
import Services from "@/sections/Services"
import Contact from "@/sections/Contact"
import Hero from "@/components/Hero"

export default {
  components: {

    Services,
    Contact
  }
}
</script>



