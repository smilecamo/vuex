<template>
  <div>
    {{msg}}
    <h3 v-show="active">this is active</h3>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    props: {
      msg: {
        type: String,
        required: true
      },
      active:{
        type: Boolean
      },
    },
  }
</script>

<style lang="scss" scoped>

</style>