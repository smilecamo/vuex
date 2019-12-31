<template>
  <div>
    <h1>样式绑定</h1>
    <!-- class -->
    <p class="static" :class="{ active: !active }">{{ key }}</p>
    <p :class="classObject">{{ key }}</p>
    <p :class="[active,styles]">{{ key }}</p>
    {{ active === false ? "no active" : "active" }}
    <!-- style  会自动增加浏览器前缀-->
    <p :style="[styles, styles1]">this is style</p>
    <p>{{arrayJoin(arr)}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: false,
      key: "this is key",
      arr:[1,2,3],
      styles: {
        color: "red"
      },
      styles1: {
        fontSize: "13px"
      }
    };
  },
  methods:{
    arrayJoin(arr){
      return arr.join(',')
    }
  },
  // 通过计算属性绑定class
  computed: {
    classObject() {
      return {
        active: this.isActive && !this.error,
        "text-danger": this.error && this.error.type === "fatal"
      };
    },
  }
};
</script>

<style lang="scss" scoped>
.active {
  color: red;
}
</style>
