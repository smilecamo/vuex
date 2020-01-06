<template>
  <div>
    <h1>插槽</h1>
    <slot-comp>
      <!-- 这里是父组件调用子组件,并使用插槽 -->
      <span>this is 插槽</span>
      <!-- 这里是具名插槽的使用 -->
      <template v-slot:h2>
        <h1>this is h2具名插槽</h1>
      </template>
      <!-- 外部通过 v-slot:h3="userInfo"定义插槽 prop  -->
      <template #h3="userInfo">
        <!-- 通过自定义插槽prop名访问 -->
        {{userInfo.user.firstName}}
      </template>
    </slot-comp>
  </div>
</template>

<script>
import SlotComp from '../components/SlotComp'
export default {
  components:{
    SlotComp
  },
}
</script>

<style>

</style>