<template>
  <div class="side">
    <div class="logo">
      <img src="" alt="" style="display:none;">
      <span>CMS中台</span>
    </div>
    <el-menu mode="vertical" :default-active="onRoutes"
             active-text-color="#1489cd" text-color="#ffffff"
             background-color="#545c64" unique-opened router>
      <el-submenu v-for="items in menu" :index="items.id" :key="items.id">
        <template slot="title">
          <i :class="items.icon" style="color:#ffffff"></i><span>{{items.title}}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item v-for="item in items.children" :index="item.url" :key="item.id">
            {{item.title}}
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
import * as el from 'element-ui'

export default {
  name: 'side',
  data () {
    return {
      menu: [
        {
          id: '1',
          icon: '',
          title: '内容管理',
          children: [
            {
              url: '/articleList',
              id: '11',
              title: '文章列表管理'
            }
          ]
        }
      ]
    }
  },
  components: {
    'el-menu': el.Menu,
    'el-submenu': el.Submenu,
    'el-menu-item-group': el.MenuItemGroup,
    'el-menu-item': el.MenuItem
  },
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
  .logo {
    height: 60px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    color: #fff;
    cursor: pointer;

    img {
      width: 38px;
      height: 17px;
    }

    span {
      color: #1489CD;
      font-size: 14px;
    }

  }

  .side {
    height: 100%;
    width: 100%;
    background: rgb(84, 92, 100);
  }

  .el-menu {
    border: none;
  }

  .el-menu-item.is-active {
    background: #00c1de !important;
    color: #fff !important;
  }
</style>

