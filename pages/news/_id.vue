<template>
  <div>
    <h2>News-content</h2>
    <p>newsID:{{$route.params.id}}</p>
    <ul>
      <li>
        <nuxt-link :to="{path:'/'}">Home</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 动态路由  对所传参数 进行验证 在终端打印数据
  validate({ params }) {
    // console.log("params:::", params);
    return /^\d+$/.test(params.id);
  },
  data() {
    return {
      title: this.$route.params.title
    };
  },
  // created() {
  //   console.log("this.title", this.title);
  // },
  // head公用方法  来修改head 标签
  head() {
    return {
      title: this.title,
      meta: [{ hid: "description", name: "new1", content: "这是一个 新得页面" }]
    };
  }
};
</script>