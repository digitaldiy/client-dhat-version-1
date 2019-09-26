<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
              <vs-button @click="popupActivo=true" color="primary" type="border">Open Default popup</vs-button>
        </div>
    </footer>
     <div class="centerx">
    <vs-popup class="holamundo"  title="Lorem ipsum dolor sit amet" :active.sync="popupActivo">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

      </p>
    </vs-popup>
  </div>
</template>


<script>

import Vue from 'vue'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css' //Vuesax styles

export default {
    data() {
        return {
            settings: require("../../data/theme.json"),
            popupActivo:false
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
