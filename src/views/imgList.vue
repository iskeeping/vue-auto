<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="图片名称：">
          <div class="input-itm">
            <el-input placeholder="请输入图片名称" type="text" :min="0" v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form>
      <div class="add-btn">
        <el-button size="small" @click="$router.push('imgUpload')">新增</el-button>
      </div>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="图片名称" align="center"></el-table-column>
        <el-table-column label="图片" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.url" style="height: 50px;"/>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button size="small" @click="$router.push(`imgUpload?id=${scope.row._id}`)">编辑</el-button>
            <el-button size="small" @click="$router.push(`imgUpload?id=${scope.row._id}`)">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="page-con">
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="params.currentPage"
        :page="[10,20,30]"
        :page-size="params.pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="totalSize"
      ></el-pagination>
    </div>

  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'
import * as api from '@/common/api'

export default {
  name: 'imgList',
  data() {
    return {
      totalSize: 0,
      params: {
        name: '',
        currentPage: 1,
        pageSize: 10
      },
      listData: []
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.imgGetList()
  },
  methods: {
    search() {
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          name: '',
          id: ''
        }
      )
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize
      this.imgGetList()
    },
    currentChange(currentPage) {
      this.params.currentPage = currentPage
      this.imgGetList()
    },
    imgGetList() {
      api.imgGetList({linkData: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.listData = res.data.data
          this.totalSize = res.data.totalSize
        }
      }).catch(() => {
      })
    },
  }
}

</script>

<style lang="scss" scoped>
  .form-con {
    width: 100%;
    background: #fff;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;

    .input-itm {
      width: 178px;
    }
  }

  .table-con {
    padding: 0 20px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .page-con {
    display: flex;
    justify-content: flex-end;
    background: #fff;
    padding: 10px 20px;
  }

</style>
