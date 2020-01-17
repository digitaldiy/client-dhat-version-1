<template>
  <div class="layout" :class="{ 'sticky-header': $route.path === '/' }">
    <Header />
    <div class=container>
    <slot/>
</div>
  </div>
</template>

<script>
import Header from "@/components/Header"
import Footer from "@/components/Footer"
export default {
  components: {
    Header
  }
}
</script>


<style>
* {
  box-sizing: border-box;
}
body {
font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  
  margin:0;
  padding: 0;
  font-size: 10vh;


}

h1 {
  letter-spacing: -0.01em;
}
.layout {
  padding: 0;
}
.layout.sticky-header {
  padding: 6rem 0 0 0;
}

@media (min-width: 860px) {
  .container {
    padding: 0 6rem;
  }
}

img {
  max-width: 100%;
}
.label {
  display: block;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
</style>