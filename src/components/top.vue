<template>
    <div class="top">
        <div>
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
    import * as el from 'element-ui'
    console.log(el)
    export default {
        name: 'top',
        data() {
            return {};
        },
        components: {
            'el-dropdown-menu': el.DropdownMenu,
            'el-dropdown-item': el.DropdownItem,
            'el-dropdown': el.Dropdown,
        },
        created() {
        },
        computed: {},
        mounted() {
        },
        methods: {}
    }
</script>
<style lang="scss" scoped>
    .top {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 100%;
        .username {
            font-size: 12px;
        }
    }
</style>

