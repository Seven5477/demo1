<template>
  <div class="login">
    <form v-if='log' class="text">
      <tr>
        <td>
          <div class="divtd">
            <span id="user">用户名</span>
            <input type="text" v-model="username">
          </div>
        </td>
      </tr>
      <tr>
        <td>
        </td>
      </tr>
      <tr>
        <td>
          <div class="divtd">
            <span id="pwd">密码</span>
            <input type="text" v-model="password">
          </div>
        </td>
      </tr>
      <div class="btn">
        <button type="button" @click="login()">登录</button>
        <button type="button" @click="reg()">注册</button>
      </div>
    </form>
    <form v-else class="text">
      <tr>
        <td>
          <div class="divtd">
            <span id="user">用户名</span>
            <input type="text" id="username" name="username" v-model="username">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="divtd">
            <span id="pwd">密码</span>
            <input type="text" id="password" name="password" v-model="password">
          </div>
        </td>
      </tr>
      <tr>
        <td>
          <div class="divtd">
            <span id="repwd">确认密码</span>
            <input type="text" id="repassword" name="repassword" v-model="repassword">
          </div>
        </td>
      </tr>
      <div class="btn">
        <button type="button" @click="addUer()">确定</button>
        <button type="button" @click="cancel()">取消</button>
      </div>
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
*{
  margin: 0;
  padding: 0;
}
.login {
  position: absolute;
  left: 50%;
  top: 50%;
  height: 220px;
  width: 360px;
  margin-top: -100px;
  margin-left: -100px;
  background-color: #0084cd;
}
.text {
  margin: 30px 50px;
  font-family: Arial;
  font-size: 18px;
  font-weight: bold;
}
.divtd {
  border: 1px solid #dadadaed;
  padding: 5px;
  color: white;
}
td {
  padding: 4px;
}
input {
  width: 155px;
  height: 20px;
  float: right;
  font-family: "Microsoft soft";
  // outline: 0;
  // border: 1px solid yellow;
  // border-radius: 5px;
}
.btn {
  margin-left: 35px;
  margin-top: 25px;
}
button {
  cursor: pointer;
  margin-left: 20px;
  width: 55px;
  height: 25px;
  font-size: 15px;
  border-radius: 5px;
  background-color: #e7e4e4;
}
</style>
