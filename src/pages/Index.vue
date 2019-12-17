<template>
  <Layout>
  
      

      <CardsSection :projects="$page.projects.edges" />
   
 <div id='ndrsl-5df93f3387d3740573fd77a8' class='ndrsl-widget'/>
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
import CardWrap from "@/components/CardWrap"
import CardsSection from "@/components/CardsSection"

export default {
  components: {
    Hero,
    MoreInfoModal,
    CardWrap,
    CardsSection
  }
}
</script>