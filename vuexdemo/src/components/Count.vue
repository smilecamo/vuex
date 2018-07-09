<template>
  <div>
    <h3>{{$store.state.count}}=={{count}}</h3>
    <p>
      <!-- 第一种 -->
      <!-- <button @click='$store.commit("add",10)'>+</button>
      <button @click='$store.commit("reduce")'>-</button> -->
      <!-- 第二种 -->
      <!-- <button @click='$store.commit("add",10)'>+</button>
      <button @click='reduce'>-</button> -->
      <!-- Action -->
       <button @click='addAction'>+</button>
      <button @click='reduceAction'>-</button>
      </p>
  </div>
</template>
<script>
import store from '@/store/store'
// 第二种访问对象
import { mapState, mapMutations, mapGetters, mapActions,} from 'Vuex'

export default {
  name: 'Count',
  data () {
    return {
      msg: 'hello'
    }
  },
  // 第一种state访问状态对象
  // computed: {
  //   count () {
  //     return this.$store.state.count
  //   },
  //   count1 () {
  //     return this.$store.state.count1
  //   }
  // },
  // 第二种访问状态对象
  // computed: mapState({
  //   count: state => state.count
  // }),
  // 第三种访问状态对象
  // computed: mapState(['count']),

  computed: {
    ...mapState(['count']),
    //扩展运算符
    // ...mapGetters(['count'])
  },

  methods: {
    ...mapMutations(['add', 'reduce']),
    ...mapActions(['addAction','reduceAction'])
  },
  store
}
</script>
