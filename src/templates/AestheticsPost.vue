<template>
  <Layout>
    <div class="project">

      <div class="container">

        <div class="project-header">
          <vs-row vs-type="flex" vs-justify="space-around" vs-xs="12">
    <vs-col  type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-lg="3" vs-sm="4" vs-xs="12">
   
          <h1 class="project-title" v-html="$page.post.title" />
          </vs-col>
             <vs-col   type="flex" vs-justify="center" vs-align="center" vs-w="3" vs-lg="3" vs-sm="4" vs-xs="12">
   
          <vs-button :color="colorx" type="flat">Go Back</vs-button>
      <vs-button :color="colorx" type="flat">Book</vs-button>
          </vs-col>
          </vs-row>
          <vs-divider/>
          <vs-row vs-type="flex" vs-justify="space-around" vs-xs="12">
      
     <vs-chip
                  class="category"
                  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  v-text="category"
                />
            
   </vs-row>
        </div>
 

        <div v-html="$page.post.content" class="content" />

      </div>

    </div>
  </Layout>
</template>

<page-query>
query AestheticsPost ($path: String!) {
  post: aestheticsPost (path: $path) {
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
  padding: 20vh 0 4rem 0;
  max-width: 75vw;
}

@media (min-width: 860px) {
  .container {
     max-width: 55vw;
  }
}
</style>
