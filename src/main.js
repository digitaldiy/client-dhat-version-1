import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";
import Vue from "vue";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.min.css";
import "@/assets/scss/material-kit.scss";
import "@/assets/demo.css";
import "@/assets/code-highlight.css"




Vue.use(VueMaterial);


export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
 
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Roboto:400,500,700,400italic|Material+Icons'
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Cookie|El+Messiri&display=swap'
  }
  )
}