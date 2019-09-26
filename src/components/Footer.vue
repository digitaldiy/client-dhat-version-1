
import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles
Vue.use(Vuesax, {
  // options here
})




<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            Vue.use(Vuesax, {
   <vs-list>
    <vs-list-item title="One text"></vs-list-item>
    <vs-list-item title="Another text" subtitle="A little text"></vs-list-item>
    <vs-list-item title="Some more text"></vs-list-item>
    <vs-list-item title="Even more text" subtitle="Another little text"></vs-list-item>
  </vs-list>
})
        
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
</style>
