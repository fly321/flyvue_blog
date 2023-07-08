<template>
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
      list:[
        {
          title: "article1",
          describe: "描述1",
          style:{
            backgroundImage:"url('https://api.eyabc.cn/api/picture/dong_man_wap?1')",
          }
        },
        {
          title: "article2",
          describe: "描述2",
          style:{
            backgroundImage:"url('https://api.eyabc.cn/api/picture/dong_man_wap?2')",
          }
        },
      ]
    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
$radius:10px;
.list{
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  margin-top: 30px;
  width: 1000px;
  display: flex;
  outline-offset: -20px;
}
.box-card:hover{
  box-shadow: 0 0 30px 0 #8fd3f4;
}
.box-c1{
  flex-grow: 0.7;
  border-radius: $radius 0 0 $radius;
  min-height:350px;
}
.box-image{
  flex-grow: 0.3;
  background-size: cover;
  background-clip: content-box;
  background-repeat: no-repeat;
  background-origin: content-box;
  background-position: center;
  border-bottom-right-radius: $radius;
  border-top-right-radius: $radius;
}
@media screen and (max-width: 1200px) {
  .box-image{
    flex-grow: 0;
  }
  .box-c1{
    flex-grow: 1;
    min-height: 0;
    border-radius: $radius;
  }
}

</style>