<template>
  <div>
    <h3>{{$store.state.count}}=={{count}}</h3>
    <p>
      <button @click='$store.commit("add")'>+</button>
      <button @click='$store.commit("reduce")'>-</button>
      </p>
      <h3>{{$store.state.count1}}</h3>
      <h3>{{count1}}</h3>
      <p>
        <button @click="$store.commit('add3')">+3</button>
        <button @click="$store.commit('reduce3')">+3</button>
      </p>
  </div>
</template>
<script>
import store from '@/store/store'
export default {
  name: 'Count',
  data () {
    return {
      msg: 'hello'
    }
  },
  computed: {
    count () {
      return this.$store.state.count
    },
    count1 () {
      return this.$store.state.count1
    }
  },
  store
}
</script>
