<template>
  <Layout>
    <div class="project">
      <div class="container">
        <div class="project-header">
          <vs-row vs-type="flex" vs-justify="space-around" vs-xs="12">
          <vs-col  type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">

          <h1 class="project-title" v-html="$page.post.title" />
             
          </vs-col>
         
             <vs-col   type="flex" vs-justify="center" vs-align="center" vs-w="12" vs-lg="12" vs-sm="12" vs-xs="12">
   
          <md-button :color="colorx" type="flat">Go Back</md-button>
      <vs-button :color="colorx" type="flat">Book</vs-button>
          </vs-col>
          </vs-row>
          <vs-divider/>
          <vs-row vs-type="flex" vs-justify="space-around" vs-xs="12">
            
   </vs-row>
        </div>
 <h1> What Is It? </h1>

        <div v-html="$page.post.content" class="content" />
<h2> How Can It Help?</h2>
  <md-chip
                  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  v-text="category" />
                      </div>

    </div>
     
  </Layout>
</template>



<page-query>
query TherapiesPost ($path: String!) {
  post: therapiesPost (path: $path) {
    title
    content
    categories
    thumbnail
  
  }
}
</page-query>

<script>


export default {

  metaInfo () {
    return {
      title: this.$page.post.title
    }
  }
}
</script>


