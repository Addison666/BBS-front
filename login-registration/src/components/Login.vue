<template>
  <el-row class="tac">
    <el-col :span="8">
      <h1>BBS</h1>
      <el-form :model="ruleForm" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <el-form-item label="账号" prop="name">
          <el-input type="text" v-model="ruleForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')">登陆</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
          <router-link :to="{ path: 'registration'}">
            <el-button type="text">注册</el-button>
          </router-link>
        </el-form-item>
      </el-form>
    </el-col>
  </el-row>
</template>

<script>
  export default {
    data () {
      return {
        url: 'http://localhost:9999/api/v1/user/login',
        ruleForm: {
          name: '',
          pass: ''
        }
      }
    },
    methods: {
      //  提交按钮事件。.
      submitForm (formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            let _this = this
        //    console.log(_this.ruleForm)
            this.$ajax.post(_this.url, _this.ruleForm)
              .then((response) => {
                if (response.data.code === 200) {
                  sessionStorage.setItem('user', response.data.data.id)
                  this.$message.success('登陆成功！')
                  //  跳转到登录成功页
                  this.$router.push({path: '/success'})
                } else if (response.data.code === 403) {
                  this.$message.success('用户名或密码错误！')
                } else {
                  this.$message.success('系统错误！')
                }
              })
          } else {
            console.log('error submit!!')
            return false
          }
        })
      },
      // 重置按钮事件
      resetForm (formName) {
        this.$refs[formName].resetFields()
      }
    }
  }
</script>

<style>

</style>
