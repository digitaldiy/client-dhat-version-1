
import Vue from 'vue'
import { vsButton, vsSelect, vsPopup } from 'vuesax'
import 'vuesax/dist/vuesax.css'



<template>
    <footer class="footer">
        <div class="container">
            <span v-html="settings.footer" />
            Vue.use(vsButton)
Vue.use(vsSelect)
Vue.use(vsPopup)
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
