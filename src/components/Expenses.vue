<template>
  <div>
    <h2>Expenses</h2>
    <el-table :data="getExpenses" stripe>
      <el-table-column prop="date" label="Date">
        <template slot-scope="scope">
          <span>{{ scope.row.date | date }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="amount" label="Amount">
        <template slot-scope="scope">
          <span>{{ scope.row.amount | currency }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="description" label="Description">
      </el-table-column>
      <el-table-column prop="category" label="Category">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['getExpenses'])
  }
};
</script>

