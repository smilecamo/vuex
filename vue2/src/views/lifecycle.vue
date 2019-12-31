<template>
  <div>
    <h1>生命周期</h1>
    {{ key }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      key: 1
    };
  },
  beforeCreate() {
    console.log(this, "beforeCreate-组件实例化之后,此时数据/事件还没好");
    // 此时通过this.$el 获取不到dom节点
  },
  created() {
    console.log(this, "created-实例创建好了,数据和方法可以使用了,但是还没挂载");
    // 此时通过this.$el 获取不到dom节点
    // 此时可以获取到数据
  },
  beforeMount() {
    console.log(this, "beforeMount-挂载前调用,相关的render函数首次调用");
    // 此时通过this.$el 获取到的是挂载前的dom节点
    // 服务端渲染不能使用
  },
  mounted() {
    console.log(
      this,
      "moutend-挂载到了实例上,但是不会承诺所有组件被挂载好,如果需要等到全部组件挂载好,可以使用vm.$nextTick替换"
    );
     // 此时通过this.$el 获取到的是挂载好的dom节点,可以操作dom
     // 服务端渲染不能使用
  },
  beforeUpdate() {
    console.log(this, "beforeUpdate-数据更新时调用");
  },
  updated() {
    console.log(this, "updated-数据更新后调用,一般用watcher/计算属性代替");
  },
  activated() {
    console.log(this, "activated-keep-alive 组件激活时调用。");
  },
  deactivated() {
    console.log(this, "deactivated-keep-alive 组件停用时调用。");
  },
  beforeDestroy() {
    // 此声明周期在使用 vm.$destroy 时可以触发
    console.log(this, "beforeDestroy-组件销毁前调用,此时还有实例");
  },
  destroy() {
    // 此声明周期在使用 vm.$destroy 时可以触发
    console.log(this, "destroy-组件销毁,此时没有实例");
  }
};
</script>

<style lang="scss" scoped></style>
