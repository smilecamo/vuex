<template>
  <div>
    <h2>Vuex使用</h2>
    <p>原始值 ====  {{count}}</p>
    <button @click="btnChangeCount"> 通过mutations改变值</button>
    <button @click="btnChangeAsyncCount"> 通过actions改变值</button> 
    <!-- 通过computed中定义的,可以直接调用 -->
    <p>fullName====  {{fullName}}</p>
  </div>
</template>

<script>
import { mapState,mapGetters,mapActions,mapMutations} from 'vuex'
  export default {
    // mounted(){
      // 从vuex中的state取值
      // this.count= this.$store.state.count
    // },
    computed:{
      // 第一种获取getters的方法
      // fullName(){
      //   return this.$store.getters.fullName
      // },
      // 第二种获取getters的方法
      ...mapGetters(['fullName']), // 同名直接调用
      // ...mapGetters({
      //   fullName:fullName
      // }), // 通过起个别名调用
      // 第一种获取值的方法
      // count(){
      //   return this.$store.state.count
      // }
      // 第二中获取state值的方法
      ...mapState(['count']), // 同名可以用数组包裹
      // ...mapState({count:count}), // 如果需要换个名字,别名调用
      // ...mapState({count:state=>state.count}), //如果需要计算,可以通过箭头函数调用 
    },
    methods:{
      ...mapActions(['changeAsyncCount']),
      ...mapMutations(['updateCount']),
      // 异步改变值 state
      btnChangeAsyncCount(){
        // 第一种派发actions方法
        // this.$store.dispatch('changeAsyncCount')
        // 第二种借助mapActions
        this.changeAsyncCount()
      },
      // 同步改变值 state
      btnChangeCount(){
        // updateCount store中mutations定义的type 
        // 3 更改后的状态
        // 第一种通过commit 调用mutation
        // this.$store.commit('updateCount',3)
        // 第二种 通过mapMutations
        let num = Math.random() * 1000
        this.updateCount(num)
      }
    },

  }
</script>

<style lang="scss" scoped>

</style>