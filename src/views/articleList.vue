<template>
    <mainContainer>
        <div style="width:100%;background:#fff;padding: 20px;box-sizing:border-box;">
            <el-form ref="form"
                     :model="params" label-width="80px"
                     label-position="left" size="small">
                <el-row :gutter="20">
                    <el-col :span="6">
                        <el-form-item label="页面名称">
                            <el-input style="width:95%" placeholder="请输入页面名称" type="text" :min="0" v-model="params.title"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="6">
                        <el-form-item label="页面ID" >
                            <el-input style="width:95%" placeholder="请输入页面ID" type="number" :min="0" v-model="params.id"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <div>
                    <el-button type="primary" size="small" v-on:click="search">查询</el-button>
                    <el-button size="small" v-on:click="reset">重置</el-button>
                </div>
            </el-form>
        </div>

        <div style="padding: 0 20px;background:#fff;width:100%;box-sizing:border-box;margin-top: 20px;">
            <el-table fit :data="listData" size="small">
                <el-table-column  prop="id" label="ID" align="center"></el-table-column>
                <el-table-column  prop="title" label="页面名称" align="center"></el-table-column>
                <el-table-column  label="适用门店个数" align="center">
                    <template slot-scope="scope">
                        {{ scope.row.shopnum }}
                    </template>
                </el-table-column>
            </el-table>
        </div>

        <div style="background:#fff;padding:10px 20px;display:flex;justify-content:space-between;">
            <div><el-button size="small" @click="$router.push('articleCreate')">新增</el-button></div>
            <page v-on:changepage="changepage" :allPage="allPage" :nowpage="params.page"/>
        </div>

    </mainContainer>
</template>

<script>
    import mainContainer from '@/components/mainContainer'
    import page from '@/components/page'
    import * as el from 'element-ui'
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
            mainContainer,
            page,
            'el-form':el.Form,
            'el-row':el.Row,
            'el-col':el.Col,
            'el-form-item':el.FormItem,
            'el-input':el.Input,
            'el-button':el.Button,
            'el-table':el.Table,
            'el-table-column':el.TableColumn
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
    .shopbtn{
        color: #00c9dF;
        cursor: pointer;
    }
</style>
