<template>
  <div class="top">
    <div class="name">
      {{currRoute.name}}
    </div>
    <el-dropdown>
      <span class="username">18279959396 欢迎您！<span class="iconfont icon-xiala userheader"></span></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="gorevise">修改密码</el-dropdown-item>
        <el-dropdown-item @click.native="signout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>

export default {
  name: 'top',
  data: function () {
    return {
      currRoute: {}
    }
  },
  components: {},
  watch: {
    $route () {
      this.getCurrRoute()
    }
  },
  created () {
    this.getCurrRoute()
  },
  methods: {
    getCurrRoute () {
      this.currRoute = this.$route
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
    }

    .username {
      font-size: 12px;
    }
  }
</style>

