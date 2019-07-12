<template>
  <div>
    <!-- 轮播图 -->
    <mt-swipe :auto="1000" style="height:200px">
      <mt-swipe-item v-for="(tmp,i) in cList" :key="i">
        <img :src="'http://localhost:3000/'+tmp.img" alt style="height:200px" />
      </mt-swipe-item>
    </mt-swipe>
    <!-- 支持横向滚动的容器 -->

    <!-- 缩略图列表 -->
    <mt-cell v-for="(tmp,i) in rList" :key="i"  :to="'/detail?id='+tmp.pid" is-link >
        <img :src="'http://localhost:3000/'+tmp.pic" alt style="height:100px" />
        <h6>{{tmp.title}}</h6>
        <h6>{{tmp.details}}</h6>
    </mt-cell>
    <mt-cell></mt-cell>
  </div>
</template>

<script>
export default {
  data() {
    return { cList: [], nList: [], rList: [] };
  },
  methods: {},
  mounted() {
    //请求服务器端的数据
    this.$axios.get("/index").then(result => {
      //   console.log(result.data);
      this.cList = result.data.carouselItems;
      this.nList = result.data.newArrialItems;
      this.rList = result.data.recommendedItems;
      console.log(this.cList);
    });
  }
};
</script>

<style>
  .mint-cell-mask{
    text-align:left
  }
</style>



