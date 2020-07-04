<template>
  <div class="side">
    <div class="logo">
      <img alt="" style="display:none;">
      <span :style="{display:isCollapse?'none':''}">在线教育系统</span>
    </div>
    <div class="side-menu">
      <el-menu
        mode="vertical"
        :default-active="defaultActive"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#1489CD"
        unique-opened
        router
        :collapse="isCollapse"
        style="border-color:#545c64"
      >
        <el-submenu v-for="items in menu" :index="items._id" :key="items._id">
          <template slot="title">
            <i :class="items.icon" style="color:#ffffff"></i>
            <span slot="title">{{items.name}}</span>
          </template>
          <el-menu-item v-for="item in items.children" :index="item.url" :key="item._id">
            {{item.name}}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
import img from '@/common/img'
import * as api from '@/common/api'
import util from '@/common/util'
import routerPath from '@/router/routerPath'

export default {
  name: 'side',
  data() {
    return {
      defaultActive: '',
      menu: [
        {
          name: '内容管理', 
          icon: 'el-icon-suitcase',
          _id: '2',
          children: [
            {name: '课程管理', url: '/admin/courseList', _id: '21'},
            {name: '栏目管理', url: '/admin/columnList', _id: '22'},
            {name: '图片管理', url: '/admin/imgList', _id: '23'},
            {name: '订单管理', url: '/admin/imgList', _id: '24'}
          ]
        },
        {
          name: '系统管理', 
          icon: 'el-icon-setting', 
          _id: '1',
          children: [
            {name: '用户管理', url: '/admin/userList', _id: '11'},
            {name: '角色管理', url: '/admin/roleList', _id: '12'},
            {name: '权限管理', url: '/admin/authorityList', _id: '13'},
            {name: '菜单管理', url: '/admin/menuList', _id: '14'}
          ]
        }
      ],
      img,
      routerPath
    }
  },
  watch:{
    $route(to, from){
      this.defaultActive = this.$route.meta.path
    }
  },
  computed: {
    isCollapse() {
      return this.$store.state.sideStatus
    }
  },
  components: {},
  created() {
  },
  mounted() {
    this.defaultActive = this.$route.meta.path
    // this.menuGetUserList()
  },
  methods: {
    menuGetUserList() {
      api.menuGetUserList({params: this.params, method: 'get'}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
            if (typeof item.parentId === 'undefined') {
              item.parentId = '0'
            }
          })
          this.menu = util.createTree(res.data.data, '0')
        }
      }).catch(() => {
      })

    }
  }
}
</script>
<style lang="scss" scoped>
  .side {
    height: 100%;
    width: 100%;
    background: #545c64;
    display: flex;
    flex-direction: column;

    .logo {
      height: 60px;
      display: flex;
      align-items: center;
      padding-left: 20px;
      color: #fff;
      cursor: pointer;

      img {
        width: 24px;
      }

      span {
        color: #fff;
        font-size: 14px;
        margin-left: 10px;
      }

    }

    .side-menu {
      flex: 1;
      overflow-y: auto;
      overflow-x: hidden;
    }

  }
</style>

