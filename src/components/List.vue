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
          <div class="text item">{{ item.describe }}</div>
        </el-card>
        <div class="box-image" :style="item.style">
        </div>
      </div>
    </div>

  </div>

</template>
<script>
//vue3.0 setup语法
import {axiosInstance} from "@/utils/request";
import {list} from "@/utils/articleRequest/list";

export default {
  name: "List",
  components: {},
  props: {},
  mounted() {
    this.query = this.$route.query;
    this.getList();
  },
  data() {
    return {
      categoryName: "文章列表",
      list:[

      ],
      current: 1,
      cursor: 0,
      pageSize: 10,
      query: {}
    };
  },
  methods: {
    getList(){
      list(this.cursor, this.pageSize, this.query).then(res => {
        let data = res.data.data;
        if (res.data.code !== 200) {
          this.$message.error(res.data.message);
          return;
        }else if (res.data.data.length === 0) {
          this.$message.error("暂无数据！");
          return;
        }
        data.forEach(item => {
          item.style = {
            backgroundImage: `url(${item.image})`
          }
          this.cursor = item.id;
        })
        this.list = data
      })
    }
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/list/list.scss";
</style>