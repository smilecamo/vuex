<template>
  <div>
    <h1>component 组件</h1>
    <comp-demo msg="this is msg"></comp-demo>
    <comp-demo :active="true"></comp-demo>
    <!-- 传值  -->
    <div :style="{fontSize: postFontSize + 'em'}">
      <!-- 当时数组时 可以先通过v-for循环,循环后再绑定 -->
      <comp-blog v-for="blog in blogs" :key="blog.title" :blog="blog" 
        @enlargeText="enlargeText"></comp-blog>
    </div>
  </div>
</template>

<script>
import CompDemo from "../components/CompDemo";
import CompBlog from "../components/CompBlog";
export default {
  components: {
    CompDemo,
    CompBlog
  },
  data() {
    return {
      postFontSize:1,
      blogs: [
        { title: "this is title1", avator: "this is avator1" },
        { title: "this is title2", avator: "this is avator2" }
      ]
    };
  },
  methods:{
    enlargeText(event){
      if(event){
        this.postFontSize += event
      }else{
        this.postFontSize += 0.1
      }
      
    }
  }
};
</script>

<style lang="scss" scoped></style>
