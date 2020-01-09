// import Mock from 'mockjs'
//     var Random = Mock.Random
//     let num = Random.email()
export default{
  changeAsyncCount({commit},num=1) {
    // 通过commit调用在mutations中定义的handler
    commit('updateCount', num)
  }
}