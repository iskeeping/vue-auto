<template>
  <div class="top">
    <div class="name">
      <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" @click="updateSideStatus"></i>
      <span>{{currRoute.name}}</span>
    </div>
    <el-dropdown>
      <span class="username"><!--{{userInfo.phone}}--> 欢迎您！<i class="el-icon-arrow-down"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="updatePassword">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="userLogout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import storeTypes from '@/storeTypes'
import routerPath from '@/router/routerPath'
import * as api from '@/common/api'

export default {
  name: 'top',
  data: function () {
    return {
      currRoute: {}
    }
  },
  computed: {
    userInfo() {
      return this.$store.state.userInfo
    },
    isCollapse() {
      return this.$store.state.sideStatus
    }
  },
  components: {},
  watch: {
    $route() {
      this.getCurrRoute()
    }
  },
  created() {
    this.getCurrRoute()
  },
  methods: {
    getCurrRoute() {
      this.currRoute = this.$route
    },
    updatePassword() {
    },
    userLogout() {
      api.userLogout({}).then((res) => {
        if (res.data.code === 0) {
          this.$router.push(routerPath.loginPath)
          localStorage.removeItem('jwt-token')
        }
      }).catch(() => {
      })
    },
    updateSideStatus() {
      this.$store.dispatch(storeTypes.updateSideStatus, {sideStatus: !this.$store.state.sideStatus})
    }
  }
}
</script>
<style lang="scss" scoped>
  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    .name {
      font-size: 14px;
      color: #606266;
      display: flex;
      align-items: center;

      span {
        margin-left: 10px;
      }

      i {
        font-size: 18px;
      }
    }

    .username {
      font-size: 12px;
    }
  }
</style>

