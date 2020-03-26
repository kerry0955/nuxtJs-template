<template>
  <div class="container">
    <div class="dist">
      <!-- <img src="" alt srcset /> -->
    </div>
    <ul>
      <li>
        <nuxt-link :to="{name:'index'}">HOME</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'about'}">ABOUT</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'news',params:{newsId:22}}">NEWS</nuxt-link>
      </li>
      <li>
        <nuxt-link :to="{name:'asyncData',params:{id:2}}">异步数据请求</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";

export default {
  components: {
    Logo
  }
};
</script>

<style scoped>
.dist {
  width: 300px;
  height: 200px;
  background-image: url("~static/img/a8.png");
}
</style>