<template>
  <div class="home">
    <el-container>
      <el-aside :class="[isCollapse?'active':'','home-aside']">
        <side></side>
      </el-aside>
      <el-container>
        <el-header>
          <top></top>
        </el-header>
        <el-main>
          <keep-alive>
            <!-- 这里是会被缓存的视图组件！ -->
            <router-view v-if="$route.meta.keepAlive"></router-view>
            <!-- </transition>    -->
          </keep-alive>
          <transition name="fade" mode="out-in">
            <!-- 这里是不被缓存的视图组件！ -->
            <router-view v-if="!$route.meta.keepAlive"></router-view>
          </transition>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import side from '@/components/side'
import top from '@/components/top'

export default {
  name: 'home',
  components: {
    side,
    top
  },
  computed: {
    isCollapse() {
      return this.$store.state.sideStatus
    }
  }
}
</script>
<style lang="scss">
  .home {
    width: 100%;
    height: 100%;
    display: flex;

    .home-aside {
      width: 200px !important;

      &.active {
        width: 64px !important;
      }
    }
  }

  .el-main {
    background: #f0f2f5;
  }
</style>
