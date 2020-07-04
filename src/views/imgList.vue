<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="图片名称：">
          <div class="input-itm">
            <el-input placeholder="请输入图片名称" type="text" v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form>
    </div>

    <div class="table-btn-con">
      <i class="el-icon-circle-plus-outline" @click="$router.push(routerPath.imgCreatePath)"></i>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="图片名称" align="center"></el-table-column>
        <el-table-column label="图片" align="center">
          <template slot-scope="scope">
            <img :src="scope.row.url" style="height: 50px;" @click="toggleImg(scope.row.url,true)"/>
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="btn-con">
              <i class="el-icon-edit-outline"
                 @click="$router.push(`${routerPath.imgCreatePath}?id=${scope.row._id}`)"></i>
              <i class="el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="page-con">
      <el-pagination
        @size-change="sizeChange"
        @current-change="currentChange"
        :current-page="params.currentPage"
        :page-sizes="[10,20,30]"
        :page-size="params.pageSize"
        layout="total,sizes,prev,pager,next,jumper"
        :total="totalSize"
      ></el-pagination>
    </div>

    <el-dialog
      class="img-preview-dialog"
      :visible.sync="dialogVisible"
      width="500px"
      left
    >
      <div class="img-preview-dialog-body">
        <img :src="imgUrl">
      </div>
    </el-dialog>
  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'
import * as api from '@/common/api'
import routerPath from '@/router/routerPath'

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
      listData: [],
      routerPath,
      imgUrl: '',
      dialogVisible: false
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.imgGetList()
  },
  methods: {
    toggleImg(url, flag) {
      this.imgUrl = url
      this.dialogVisible = flag || false
    },
    search() {
      this.imgGetList()
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
      api.imgGetList({params: this.params, method: 'get'}).then((res) => {
        if (res.data.code === 0) {
          this.listData = res.data.data
          this.totalSize = res.data.totalSize
        }
      }).catch(() => {
      })
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
    display: flex;

    .input-itm {
      width: 178px;
    }
  }

  .table-btn-con {
    padding: 10px 15px 0;
    color: #1489CD;
    font-size: 24px;

    i {
      margin: 0 5px;
    }
  }

  .table-con {
    padding: 0 20px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-top: 10px;
  }

  .page-con {
    display: flex;
    justify-content: flex-end;
    background: #fff;
    padding: 10px 20px;
  }

  .btn-con {
    color: #1489CD;
    font-size: 18px;

    i {
      margin: 0 5px;
    }
  }

  .img-preview-dialog {

    .img-preview-dialog-body {
      width: 100%;

      img {
        width: 100%;
      }
    }
  }

</style>
