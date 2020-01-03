<template>
    <div>
      <p>title: {{blog.title}}</p>
      <p>avator: {{blog.avator}}</p>
      <button @click="enlargeText">增大字体</button>
    </div>
</template>

<script>
  export default {
    props:['blog'],
    methods:{
      // 触发事件 传值
      enlargeText(){
        this.$emit('enlargeText',1)
        // this.$emit('enlargeText',1)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>