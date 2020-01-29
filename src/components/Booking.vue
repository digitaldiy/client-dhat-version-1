<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
    <iframe src="https://www.powr.io/plugins/contact-form/view/22657594" style="width:100%;" height="529px" frameborder="0"/>
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
