<template>
  <div>
      <form>
      <tr>
        <td>
          <span id="user">欢迎你，</span>
          <span>{{user}} ！</span>
          <span id="last" @click="last()">返回主页</span>
        </td>
      </tr>
      <button type="button" @click="pwd_enable()">修改密码</button>
      <div class="pwd">
        <input type="text" v-model="setpwd" v-show='set'/>
        <button type="button" v-show='set' @click="pwd_set()">确定</button>
        <button type="button" v-show='set' @click="pwd_cancel()">取消</button>
      </div>
    </form>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'User',
  store,
  data () {
    return {
      setpwd: '',
      set: false
    }
  },
  computed: {
    user: function () {
      return store.state.user
    }
  },
  methods: {
    pwd_enable () {
      this.set = true
    },
    pwd_set () {
      localStorage.setItem('password', this.setpwd)
      this.$router.push('/')
    },
    pwd_cancel () {
      this.set = false
    },
    last () {
      this.$router.push('/Index')
    }
  }
}
</script>

<style lang="scss" scoped>
span {
  color: cadetblue;
}
#last {
  color: crimson;
  margin-left:20px;
}
button {
  margin-top: 15px;
  margin-left:40px;
  width: 70px;
  height: 30px;
  font-weight: bold;
}
.pwd {
  margin-left: 20px;
}
</style>
