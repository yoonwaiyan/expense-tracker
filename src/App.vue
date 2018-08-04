<template>
  <el-container class="main-container">
    <el-header style="line-height: 60px;">
      <span class="brand-logo">Expense Tracker</span>
      <div class="nav-right" v-if="currentUser">
        <span class="nav-element">Logged in as {{ currentUser.email }}</span>
        <span class="nav-element">
          <a href="#" v-on:click.stop.prevent="signOut">Sign Out</a>
        </span>
      </div>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
import { mapGetters } from 'vuex';
import {
  firebaseApp as Firebase,
  dbExpensesRef,
  dbCategoriesRef
} from './firebaseConfig';

export default {
  computed: {
    ...mapGetters(['currentUser'])
  },
  methods: {
    signOut() {
      const router = this.$router;
      Firebase.auth()
        .signOut()
        .then(() => {
          router.push({ name: 'loginLink' });
        });
    }
  },
  created() {
    this.$store.dispatch('setExpensesRef', dbExpensesRef);
    this.$store.dispatch('setCategoriesRef', dbCategoriesRef);
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

.nav-right {
  float: right;
}

.nav-right > .nav-element {
  padding-left: 10px;
}

.main-container {
  width: 80%;
  margin: 0 auto;
}
</style>