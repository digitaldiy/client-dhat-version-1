<template>
  <Layout>
  
      

      <CardsSection :projects="$page.projects.edges" />
      <Reviews/>
 
  </Layout>
</template>

<page-query>
query Posts {
	projects: allProjectPost {
    edges {
      node {
        id
        date (format: "YYYY")
        title
        categories
        thumbnail (quality: 90)
        path
      }
    }
  }
}
</page-query>

<script>
import Hero from "@/components/Hero"
import MoreInfoModal from "@/components/MoreInfoModal"
import Reviews from "@/components/Reviews"
import CardWrap from "@/components/CardWrap"
import CardsSection from "@/components/CardsSection"

export default {
  components: {
    Hero,
    MoreInfoModal,
    CardWrap,
    CardsSection,
    Reviews
  }
}
</script>