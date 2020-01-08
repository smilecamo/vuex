// 可以认为是 store 的计算属性
export default{
  fullName(state){
    return `${state.firstName} ${state.lastName}`
  }
}