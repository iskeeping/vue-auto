<template>
  <div class="side">
    <div class="logo">
      <img :src="img.logo" alt="">
      <span :style="{display:isCollapse?'none':''}">内容管理系统</span>
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
  </div>
</template>
<script>
import img from '@/common/img'

export default {
  name: 'side',
  data() {
    return {
      menu: [
        {
          id: '1',
          icon: 'el-icon-s-home',
          title: '内容管理',
          children: [
            {
              url: '/articleList',
              id: '11',
              title: '文章管理'
            },
            {
              url: '/imgList',
              id: '12',
              title: '图片管理'
            },
            {
              url: '/tagList',
              id: '13',
              title: '标签管理'
            },
            {
              url: '/columnList',
              id: '14',
              title: '栏目管理'
            },
            {
              url: '/commentList',
              id: '15',
              title: '留言管理'
            }
          ]
        },
        {
          id: '2',
          icon: 'el-icon-user-solid',
          title: '用户管理',
          children: [
            {
              url: '/userList',
              id: '21',
              title: '用户管理'
            },
            {
              url: '/roleList',
              id: '22',
              title: '角色管理'
            },
            {
              url: '/authorityList',
              id: '23',
              title: '权限管理'
            },
            {
              url: '/menuList',
              id: '24',
              title: '菜单管理'
            },
          ]
        },
        {
          id: '3',
          icon: 'el-icon-setting',
          title: '系统管理',
          children: [
            {
              url: '/logList',
              id: '31',
              title: '日志管理'
            },
            {
              url: '/informationList',
              id: '32',
              title: '消息管理'
            },
            {
              url: '/noticeList',
              id: '33',
              title: '公告管理'
            }
          ]
        }
      ],
      img: img
    }
  },
  computed: {
    defaultActive() {
      return this.$route.meta.path
    },
    isCollapse() {
      return this.$store.state.sideStatus
    }
  },
  components: {},
  created() {
  },
  mounted() {
  },
  methods: {}
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

