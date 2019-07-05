<template>
  <div class="side">
    <div class="logo">
      <img src="" alt="" style="display:none;">
      <span>内容管理系统</span>
    </div>
    <el-menu mode="vertical" :default-active="onRoutes"
             active-text-color="#1489cd" text-color="#ffffff"
             background-color="#545c64" unique-opened router>
      <el-submenu v-for="items in menu" :index="items.id" :key="items.id">
        <template slot="title">
          <i :class="items.icon" style="color:#ffffff"></i>
          <span slot="title">{{items.title}}</span>
        </template>
        <el-menu-item v-for="item in items.children" :index="item.url" :key="item.id">
          {{item.title}}
        </el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: 'side',
  data () {
    return {
      menu: [
        {
          id: '1',
          icon: '',
          title: '文章管理',
          children: [
            {
              url: '/articleList',
              id: '11',
              title: '文章列表'
            }
          ]
        }
      ]
    }
  },
  components: {},
  created () {
  },
  computed: {
    onRoutes () {
      return this.$route.path.replace('/', '')
    }
  },
  mounted () {
  },
  methods: {}
}
</script>
<style lang="scss" scoped>
  .side {
    height: 100%;
    width: 100%;
    background: rgb(84, 92, 100);

    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #fff;
      cursor: pointer;
      border-bottom: 1px solid #65696d;

      img {
        width: 38px;
        height: 17px;
      }

      span {
        color: #1489CD;
        font-size: 14px;
      }

    }


    .el-menu {
      border: none;
    }

    .el-menu-item.is-active {
      background: #00c1de !important;
      color: #fff !important;
    }
  }
</style>

