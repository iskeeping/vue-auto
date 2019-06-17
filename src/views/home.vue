<template>
    <div class="home">
        <el-container>
            <el-aside width="200px">
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
    import * as el from 'element-ui'
    import lang from 'element-ui/lib/locale/lang/en'
    import locale from 'element-ui/lib/locale'
    import side from '@/components/side'
    import top from '@/components/top'
    import '@/assets/font/iconfont.css'
    // 设置语言
    locale.use(lang)
    export default {
        name: 'app',
        components: {
            'el-container': el.Container,
            'el-aside': el.Aside,
            'el-header': el.Header,
            'el-main': el.Main,
            side,
            top
        }
    }
</script>
<style lang="scss">
    .home {
        width: 100%;
        height: 100%;
        display: flex;
    }
    .el-main {
        background: #f0f2f5;
    }
</style>