<template>
  <div class="top">
    <div class="name">
      <i :class="[isCollapse?'el-icon-s-unfold':'el-icon-s-fold']" @click="updateSideStatus"></i>
      <span>{{currRoute.name}}</span>
    </div>
    <el-dropdown>
      <span class="username">18279959396 欢迎您！<span class="iconfont icon-xiala userheader"></span></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="updatePassword">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import storeTypes from '@/storeTypes'

export default {
  name: 'top',
  data: function () {
    return {
      currRoute: {}
    }
  },
  computed: {
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
    logout() {
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

