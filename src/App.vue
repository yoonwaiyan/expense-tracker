<template>
  <el-container class="main-container">
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<style>
body {
  font-family: 'Helvetica Neue', Helvetica, 'PingFang SC', 'Hiragino Sans GB',
    'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
  margin: 0;
}

.main-container {
  width: 80%;
  margin: 0 auto;
}
</style>