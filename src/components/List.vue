<template>
  <div>
    <div class="header-main">
      <div class="header-main__title">{{categoryName}}</div>
    </div>

    <div class="list">
      <div class="box-card"  v-for="item in list">
        <el-card class="box-c1">
          <template #header>
            <div class="card-header">
              <span>{{item.title}}</span>
              <el-button class="button" text>查看原文</el-button>
            </div>
          </template>
          <div class="text item" v-for="o in 4">{{ item.describe }}</div>
        </el-card>
        <div class="box-image" :style="item.style">
        </div>
      </div>
    </div>

  </div>

</template>
<script>
//vue3.0 setup语法
export default {
  name: "List",
  components: {},
  props: {},
  mounted() {
    console.log(this.$route.query);
  },
  data() {
    return {
      categoryName: "文章列表",
      list:[
        {
          title: "article1",
          describe: "描述1",
          style:{
            backgroundImage:"url('https://api.eyabc.cn/api/picture/dong_man_wap?"+Math.random()+"')",
          }
        },
        {
          title: "article2",
          describe: "描述2",
          style:{
            backgroundImage:"url('https://api.eyabc.cn/api/picture/dong_man_wap?"+Math.random()+"')",
          }
        },
      ],
      current: 1,
      cursor: 0,
      pageSize: 10,
      max: 0,
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
@import "@/assets/list/list.scss";
</style>