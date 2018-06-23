<template>
  <div>
    <h2>Expenses</h2>
    <el-table :data="tableData" stripe>
      <el-table-column prop="date" label="Date">
      </el-table-column>
      <el-table-column prop="description" label="Description">
      </el-table-column>
      <el-table-column prop="category" label="Category">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      tableData: [
        {
          date: '2016-05-03',
          description: 'Nasi Lemak',
          category: 'Food'
        },
        {
          date: '2016-05-02',
          description: 'Tom Yam Soup',
          category: 'Food'
        },
        {
          date: '2016-05-04',
          description: 'Mixed Rice',
          category: 'Food'
        },
        {
          date: '2016-05-01',
          description: 'KFC',
          category: 'Food'
        }
      ]
    };
  }
};
</script>

