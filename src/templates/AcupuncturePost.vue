<template>
  <Layout>
   <div class="container">
 <div class="md-layout md-gutter md-alignment-center neat">
    <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
        <div class="md-layout-item md-medium-size-80 md-small-size-100 md-xsmall-size-100">
        <span class="md-display-3" v-html="$page.post.title"/>
        </div>
        <div class="md-layout-item md-medium-size-20 md-small-size-100 md-xsmall-size-100">
          <span class="md-subheading"><g-link class="md-subheading" to="/#sec1">Back</g-link></span>
        </div>
        <div class="md-layout-item md-medium-size-100 md-small-size-100 md-xsmall-size-100">
      
        <h2>What Is It?</h2>
        <span class="md-headline" v-html="$page.post.content"/>
        <h2> How Can It Help?</h2>
        <h2> What can it be used to treat?</h2>
        <span class="md-subheading"  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  >{{category}} </span>
    

    </div> </div></div></div>
  </Layout>
</template>


   

<page-query>
query AcupuncturePost ($path: String!) {
  post: acupuncturePost (path: $path) {
    title
 
    content
    categories
    project_bg_color
    project_fg_color
  }
}
</page-query>

<script>
export default {
  metaInfo () {
    return {
      title: this.$page.post.title,
      
      bodyAttrs: {
        style: `background-color: ${this.$page.post.project_bg_color ? this.$page.post.project_bg_color : 'var(--color-base)'}; color: ${this.$page.post.project_fg_color ? this.$page.post.project_fg_color : 'var(--color-contrast)'}`
      }
    }
  }
}
</script>

<style scoped>
.container {
min-height:90vh;
 
}

@media (min-width: 860px) {
  .container {
     min-height: 80vw;
  }
}
</style>
