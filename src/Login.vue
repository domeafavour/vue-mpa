<template lang="html">
  <div class="container">
    <h2>{{ motto }}</h2>
  </div>
</template>

<script>
export default {
  name: 'login',
  props: {
    motto: {
      type: String,
      default: 'Login',
      required: true
    }
  }
}
</script>

<style lang="css" scoped>
</style>
