<template>
  <el-container class="main-container">
    <el-header style="line-height: 60px;">
      <span class="brand-logo">Expense Tracker</span>
      <span class="logged-in-as" v-if="currentUser">Logged in as {{ currentUser.email }}</span>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['currentUser'])
  }
};
</script>


<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  margin: 0;
}

.brand-logo {
  font-weight: bold;
}

.logged-in-as {
  float: right;
}

.main-container {
  width: 80%;
  margin: 0 auto;
}
</style>