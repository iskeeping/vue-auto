<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="页面名称：">
          <div class="input-itm">
            <el-input placeholder="请输入页面名称" type="text" :min="0" v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="页面ID：">
          <div class="input-itm">
            <el-input placeholder="请输入页面ID" type="number" :min="0" v-model="params.id"></el-input>
          </div>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
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
      <page @changePage="changePage" :totalSize="params.totalSize" :pageSize="params.pageSize"
            :currPage="params.currPage"/>
    </div>

  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'
import page from '@/components/page'

export default {
  name: 'articleList',
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
      this.params = Object.assign(
        {},
        this.params,
        {
          name: '',
          id: ''
        }
      )
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

    .input-itm {
      width: 200px;
    }
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
