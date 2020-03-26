<template>
  <div>
    <h1>姓名:{{info.name}}</h1>
    <h1>年龄:{{info.age}}</h1>
    <h1>兴趣:{{info.intersting}}</h1>
  </div>
</template>

<script>
import axios from "axios";
export default {
  //   asyncData() {
  //     return axios.get("https://api.myjson.com/bins/keb36").then(res => {
  //       console.log("res::;", res);
  //       return {
  //         info: res.data
  //       };
  //     });
  //   }
  async asyncData() {
    let { data } = await axios.get("https://api.myjson.com/bins/keb36");
    return { info: data };
  }
};
</script>