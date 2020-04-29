<template>
  <div class="login">
    <form v-if='log'>
      <tr>
        <td>
          <span id="user">用户名</span>
          <input type="text" v-model="username">
        </td>
      </tr>
      <tr>
        <td>
          <span id="pwd">密码</span>
          <input type="text" v-model="password">
        </td>
      </tr>
      <button @click="login()">登录</button>
      <button @click="reg()">注册</button>
    </form>
    <form v-else>
      <tr>
        <td>
          <span id="user">用户名</span>
          <input type="text" id="username" name="username" v-model="username">
        </td>
      </tr>
      <tr>
        <td>
          <span id="pwd">密码</span>
          <input type="text" id="password" name="password" v-model="password">
        </td>
      </tr>
      <tr>
        <td>
          <span id="repwd">确认密码</span>
          <input type="text" id="repassword" name="repassword" v-model="repassword">
        </td>
      </tr>
      <button type="button" @click="addUer()">确定</button>
      <button type="button" @click="cancel()">取消</button>
    </form>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Login',
  store,
  data () {
    return {
      username: '',
      password: '',
      repassword: '',
      log: true
    }
  },
  methods: {
    login () {
      if (localStorage.getItem('username') === this.username && localStorage.getItem('password') === this.password) {
        store.commit('welcome', this.username)
        this.username = ''
        this.password = ''
        this.$router.push('/index')
      } else {
        alert('用户名密码不正确！！')
      }
    },
    reg () {
      this.log = false
      console.log(this.log)
    },
    addUer () {
      if (this.repassword === this.password) {
        localStorage.setItem('username', this.username)
        localStorage.setItem('password', this.password)
        this.username = ''
        this.password = ''
        this.repassword = ''
        this.log = true
      } else {
        alert('两次密码输入不一致')
      }
    },
    cancel () {
      this.log = true
    }
  }
}
</script>

<style lang="scss" scoped>
.login {
  margin:auto
}
</style>
