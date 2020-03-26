<template>
  <div>
    <h2>News index page</h2>
    <p>NewsID :{{$route.params.newsId}}</p>
    <ul>
      <li>
        <a href="/">home</a>
        <nuxt-link :to="{name:'news-id',params:{id:300,title:'修改页面得head 标签'}}">news-300</nuxt-link>
        <a href="/news/56423">news-56423</a>
        <a href="/news/23">news-23</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  transition: "test"
};
</script>
<style scoped>
.test-enter-active,
.test-leave-active {
  transition: all 2s;
  font-size: 12px;
}
.test-enter,
.test-leave-active {
  opacity: 0;
  font-size: 20px;
}
</style>