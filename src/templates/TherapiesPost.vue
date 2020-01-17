<template>
  <Layout>
   
 <div class="md-layout-item md-layout md-gutter">
        <div class="md-layout-item">
        <span class="md-display-3" v-html="$page.post.title"/>
        <span class="md-subheading"><g-link class="md-subheading" to="/#sec1">Back</g-link></span>
        
        <h2>What Is It?</h2>
        <span class="md-headline" v-html="$page.post.content"/>
        <h2> How Can It Help?</h2>
        <h2> What can it be used to treat?</h2>
        <span class="md-subheading"  v-for="(category, index) in $page.post.categories" 
                  :key="index"
                  >{{category}} </span>
      <span class="md-subheading"><g-link class="md-subheading" to="/#sec1">Back</g-link></span>

    </div> </div>
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


