<template>
  <Layout>
    <div class="container">
      <Hero />
      <About />
    </div>
   
  </Layout>
</template>



<script>
import Hero from "@/components/Hero"
import About from "@/components/About"

export default {
  components: {
    Hero,
    About
    
  }
}
</script>
