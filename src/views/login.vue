<template>
  <div class="login">
    <div class="login-box">
      <div class="login-header">
        <img :src="img.logo"/>
        <span>在线教育系统</span>
      </div>
      <div class="login-body">
        <el-input v-model="form.phone" size="small" placeholder="请输入手机号" class="phone"></el-input>
        <el-input v-model="form.password" type="password" size="small" placeholder="请输入密码" class="password"></el-input>
        <el-button type="primary" class="login-btn" @click="userLogin" size="small">登录</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import storeTypes from '@/storeTypes'
import img from '@/common/img'
import * as api from '@/common/api'
import routerPath from '@/router/routerPath'

export default {
  name: 'login',
  data() {
    return {
      form: {
        phone: '',
        password: '',
        in: {
          name: ''
        }
      },
      img
    }
  },
  components: {},
  created() {
  },
  methods: {
    userLogin() {
      api.userLogin({data: this.form}).then((res) => {
        if (res.data.code === 1) {
          localStorage.setItem('jwt-token', res.data.data.token)
          this.$store.dispatch(storeTypes.setUserInfo, {phone: res.data.data.phone})
          this.$router.push(routerPath.homePath)
        } else {
          // debugger

        }
      }).catch(() => {
      })
    }
  }
}

</script>

<style lang="scss" scoped>

  .login {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: #535c64;

    .login-box {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      padding-bottom: 100px;

      .login-header {
        height: 80px;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
          height: 30px;
          margin-right: 10px;
          display: none;
        }

        span {
          font-size: 14px;
          color: #ffffff;
        }
      }

      .login-body {
        width: 250px;

        .login-btn {
          width: 100%;
        }

        .phone, .password {
          margin-bottom: 20px;
        }
      }
    }
  }
</style>
