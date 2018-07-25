<template>
  <div>
    <h2>Categories</h2>
    <el-table :data="getCategories" stripe>
      <el-table-column prop="name" label="Name">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getCategories'])
  }
};
</script>

