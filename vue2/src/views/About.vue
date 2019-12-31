<template>
  <div class="about">
    <h1>{{text}}</h1>
    <h1>{{object.a}}</h1>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: 1,
      a: 1,
      object: {},
    };
  },
  created() {
    setInterval(() => {
      this.$set(this.object, 'a', 5);
      this.a = 33333;
    }, 1000);
    setInterval(() => {
      this.$delete(this.object, 'a');
    }, 7000);
  },
  methods: {
    someMethod(newText, oldText) {
      console.log(newText, oldText);
    },
  },
  watch: {
    text(newText, oldText) {
      console.log(newText, oldText);
    },
    a: {
      handler: 'someMethod', // 方法名,调用methods中定义的方法
      immediate: true, // 立即执行一次函数,侦听开始之后被立即调用
      deep: true, // 只要是改变了就会触发方法
    },
  },
};
</script>
