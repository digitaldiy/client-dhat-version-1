<template >
  <div>
    <vs-textarea v-model="textarea" />
  </div>
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
