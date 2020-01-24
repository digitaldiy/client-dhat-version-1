<template>
<mobile-menu nav-mobile-section="true">
  <md-list-item href="javascript:void(0)">
    <p>Link</p>
  </md-list-item>

  <md-list-item href="javascript:void(0)">
    <p>Link</p>
  </md-list-item>
</mobile-menu>

</template>

<script>
export default {
  name: "MobileMenu",
  props: {
    navMobileSection: {
      type: String,
      default: "false"
    }
  }
};
</script>
