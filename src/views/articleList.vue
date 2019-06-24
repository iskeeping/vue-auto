<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="80px"
               label-position="left" size="small">
        <el-row :gutter="20">
          <el-col :span="6">
            <el-form-item label="页面名称">
              <el-input placeholder="请输入页面名称" type="text" :min="0" v-model="params.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="6">
            <el-form-item label="页面ID">
              <el-input placeholder="请输入页面ID" type="number" :min="0" v-model="params.id"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <div>
          <el-button type="primary" size="small" v-on:click="search">查询</el-button>
          <el-button size="small" v-on:click="reset">重置</el-button>
        </div>
      </el-form>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="页面名称" align="center"></el-table-column>
        <el-table-column label="适用门店个数" align="center">
          <template slot-scope="scope">
            {{ scope.row.num }}
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="btn-con">
      <div>
        <el-button size="small" @click="$router.push('articleCreate')">新增</el-button>
      </div>
      <page v-on:changePage="changePage" :totalSize="params.totalSize" :pageSize="params.pageSize"
            :currPage="params.currPage"/>
    </div>

  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'
import page from '@/components/page'

export default {
  data () {
    return {
      params: {
        name: '',
        id: '',
        currPage: 1,
        totalSize: 30,
        pageSize: 10
      },
      listData: [
        {
          id: 1,
          name: '你好',
          num: 20
        }
      ]
    }
  },
  components: {
    mainContainer,
    page
  },
  activated () {
  },
  methods: {
    search () {
    },
    reset () {
      this.params = {
        name: '',
        id: ''
      }
    },
    changePage ({currPage, pageSize}) {
      this.params.currPage = currPage
      this.params.pageSize = pageSize
    }
  }
}

</script>

<style lang="scss" scoped>
  .form-con {
    width: 100%;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
  }

  .table-con {
    padding: 0 20px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .btn-con {
    background: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }

</style>
