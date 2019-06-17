<template>
    <mainContainer>
        <div style="width:100%;background:#fff;padding: 20px;box-sizing:border-box;">
            <el-form ref="form"
                     :model="params" label-width="80px"
                     label-position="left" size="small">
                <el-row>
                    <el-form-item label="页面名称">
                        <el-input style="width:95%" placeholder="请输入页面名称" type="text" :min="0" v-model="params.title"></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="页面名称">
                        <el-input style="width:95%" placeholder="请输入页面名称" type="text" :min="0" v-model="params.title"></el-input>
                    </el-form-item>
                </el-row>
                <el-row>
                    <el-form-item label="分享图片">
                        <div class="imgListContainer">
                            <ul class="imgList">
                                <li v-for="(item,index) in imgListData" :key="index">
                                    <img v-on:click="showBigpic(item)" v-bind:src="item" alt="">
                                    <span v-on:click="detimg(index)" class="el-icon-delete"></span>
                                </li>
                                <li class="el-icon-plus lastlist" v-if="imgListData.length == 0"><input @change='addimg($event)' type="file"></li>
                            </ul>
                            <p class="imgListDesc">（分享图片400*300，200k以内，仅一张。用于将页面分享至微信对话框时展示使用）</p>
                        </div>
                    </el-form-item>
                </el-row>
                <div>
                    <el-button type="primary" size="small" v-on:click="search">查询</el-button>
                    <el-button size="small" v-on:click="reset">重置</el-button>
                </div>
            </el-form>
        </div>


    </mainContainer>
</template>

<script>
    import mainContainer from '@/components/mainContainer'
    export default {
        data() {
            return {
                allPage:10, // 总页数
                params:{
                    size:10, // 请求多少条记录
                    page:1, // 当前页码
                    title: '',//页面名称
                    id:'',//页面id
                    startat:'',//开始时间
                    endat: '',//结束时间
                    cmstype:'cms',
                },
                imgListData:[],
                listData: [
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20},
                    {id:1,title:'你好',shopnum:20}
                ]
            }
        },
        components: {
            mainContainer
        },
        activated() {
        },
        methods: {//方法
            //查询
            search () {
                this.params.page = 1;
                this.getDateList();
            },

            //重置
            reset () {
                this.params ={
                    size:10, // 请求多少条记录
                    page:1, // 当前页码
                    title: '',//页面名称
                    id:'',//页面id
                    startat:'',//开始时间
                    endat: '',//结束时间
                    cmstype:'cms',
                }
            },
            changepage(){}
        }
    }

</script>

<style lang="scss" scoped>
   .imgListContainer {
       display: flex;
       align-items: flex-start;
   }
   .imgList {
        position: relative;
        li {
            height: 100px;
            width: 100px;
            border: 1px solid #e4e4e4;
            float: left;
            margin-right: 10px;
            text-align: center;
            line-height: 100px;
            cursor: move;
            padding: 3px;
            box-sizing: border-box;
            position: relative;
        }
        input[type=file] {
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
   }
   .imgListDesc{}
</style>
