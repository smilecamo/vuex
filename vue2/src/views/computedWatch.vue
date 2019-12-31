<template>
  <div>
    <h1>computed/watch</h1>
    <p>name:{{ name }}</p>
    <p>Object.a:{{ object.a }}</p>
    <p>firstName:<input type="text" v-model="firstName" /></p>
    <p>lastName:<input type="text" v-model="lastName" /></p>
    <p>Object.a:<input type="text" v-model="object.a" /></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: "Zhang",
      lastName: "San",
      object:{
        a:1
      }
    };
  },
  watch:{
    'object.a':{
      handler(){
        console.log('object change')
      }
    }
  },
  computed: {
    // name(){
    //   return `${this.firstName} ${this.lastName}`
    // }
    name: {
      // 默认只提供get方法
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
