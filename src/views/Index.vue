<template>
  <div>
      <div class="index">学生管理系统
          <span id="user" @click="userinfo()">{{user}}
          <span id="logout" @click="logout()">退出</span>
          </span>
          <!-- <router-view /> -->
          <!-- <li>
            <router-link :to="{name: 'user'}">个人中心</router-link>
          </li> -->
      </div>
      <div class="divtd">
        <td>
          <span>学生姓名</span>
            <tr v-for="(item, index) in studentlist" :key="index">
              {{item.stu_name}}
            </tr>
        </td>
        <td>
          <span>期末成绩</span>
            <tr v-for="(item, index) in studentlist" :key="index">
              {{item.stu_score}}
            </tr>
        </td>
        <td>
          <span>操作</span>
            <tr  v-for="(item, index) in studentlist" :key="index" :index="index">
              <button type="button" @click="delstudet(index)">删除</button>
            </tr>
        </td>
      </div>
      <tr>
        <td>
          <span id="student_name">学生姓名</span>
          <input type="text" v-model="student_name">
        </td>
      </tr>
      <tr>
        <td>
          <span id="student_score">期末成绩</span>
          <input type="text" v-model="student_score">
        </td>
      </tr>
      <button type="button" @click="addstudent()">添加</button>
  </div>
</template>

<script>
import store from '@/store'

export default {
  name: 'Index',
  store,
  data () {
    return {
      student_name: '',
      student_score: '',
      studentlist: []
    }
  },
  computed: {
    user: function () {
      return store.state.user
    }
  },
  methods: {
    userinfo () {
      this.$router.push('/User')
    },
    logout () {
      this.$router.push('/')
    },
    addstudent () {
      this.studentlist.push({
        stu_name: this.student_name,
        stu_score: this.student_score
      })
      this.student_name = ''
      this.student_score = ''
    },
    delstudet (index) {
      this.studentlist.splice(index, 1)
    }
  }
}
</script>

<style lang="scss" scoped>
*{
  margin-left: 30px;
  padding: 0;
  list-style: none;
}
.index {
  margin-top: 20px;
  margin-bottom: 20px;
}
#user {
  margin-left: 150px;
}
#logout {
  color: #03a9f4;
  margin: 0;
}
.divtd {
  width: 310px;
  border: 1px solid #9e9e9e;
  color: #009688;
}
</style>
