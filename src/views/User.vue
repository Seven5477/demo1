<template>
  <div>
      <form>
      <tr>
        <td>
          <span id="user">用户名 </span>
          <span>{{user}}</span>
        </td>
      </tr>
      <button type="button" @click="pwd_enable()">修改密码</button>
      <input type="text" v-model="setpwd" v-show='set'/>
      <button type="button" v-show='set' @click="pwd_set()">确定</button>
      <button type="button" v-show='set' @click="pwd_cancel()">取消</button>
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
    }
  }
}
</script>

<style>

</style>
