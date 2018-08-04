<template>
  <div>
    <h2>Login</h2>
    <el-form label-position="left" label-width="100px">
      <el-form-item label="Email">
        <el-input v-model="email" type="email" id="email" placeholder="Enter email"></el-input>
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" type="password" id="password" placeholder="Enter password"></el-input>
      </el-form-item>

      <el-button type="primary" @click.prevent="signIn">Sign In</el-button>
      <el-button @click.prevent="signOut">Sign Out</el-button>
    </el-form>
  </div>
</template>

<script>
import Firebase from 'firebase';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    signIn() {
      const { email, password } = this;
      const router = this.$router;

      Firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(function() {
          router.push({ name: 'homeLink' });
        })
        .catch(function(error) {
          var errorCode = error.code;
          var errorMessage = error.message;

          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password');
          } else {
            alert(errorMessage);
          }
        });
    },
    signOut() {
      Firebase.auth()
        .signOut()
        .then(function() {
          alert('Logged Out');
        })
        .catch(function(error) {
          alert('error', error);
        });
    }
  }
};
</script>
