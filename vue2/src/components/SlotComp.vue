<template>
  <div class="div_container">
    <slot></slot>
    <h2>
      <!-- 这里是具名插槽的定义 -->
      <slot name="h2">{{h2}}</slot>
    </h2>
    <h3>
      <!-- 作用域插槽 -->
      <!-- 定义插槽时内部一开始调用的是lastName,
          ,如果需要改变显示的话,需要把值作为一个特性绑定上去
          ,这样就可以在外部进行更改显示了 -->
      <slot name="h3" :user="user">{{user.lastName}}</slot>
    </h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      h2:"this is h2插槽内部内容",
      user: {
        lastName:'lastName',
        firstName:'firstName'
      }
    };
  }
};
</script>

<style lang="scss" scoped>
.div_container {
  width: 45%;
  height: 50%;
  background: indianred;
  margin: 0 auto;
}
</style>