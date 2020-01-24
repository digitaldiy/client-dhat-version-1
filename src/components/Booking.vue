<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
    <div class="powr-contact-form" id="0c1e130f_1579201566"></div>
    </md-dialog>
    <md-button class="md-primary md-simple" @click="showDialog = true">Book</md-button>
  </div>
</template>

<script>
  export default {
    name: 'DialogCustom',
    data: () => ({
      showDialog: false
    })
  }
</script>

<style lang="scss" scoped>
  .md-dialog {
    padding: 5vh, 5vh, 5vh, 5vh;
    max-width: 80vh;
    max-height:80vh;
  }
</style>
