<template>
  <div class="list">
    <el-card v-for="i in 3" class="box-card">
      <template #header>
        <div class="card-header">
          <span>博文{{i}}</span>
          <el-button class="button" text>查看原文</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
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

    };
  },
  methods: {},
};
</script>

<style scoped lang="scss">
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
}

@media screen and (max-width: 500px) {

}

</style>