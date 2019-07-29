<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="标签名称：">
          <div class="input-itm">
            <el-input placeholder="请输入标签名称" type="text" v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <div class="btn-con">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form>
    </div>

    <div class="table-btn-con">
      <i class="el-icon-circle-plus-outline" @click="$router.push(routerPath.tagCreatePath)"></i>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="标签名称" align="center"></el-table-column>
        <el-table-column prop="remark" label="备注" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="btn-con">
              <i class="el-icon-edit-outline" @click="$router.push(`${routerPath.tagCreatePath}?id=${scope.row._id}`)"></i>
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
  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'
import * as api from '@/common/api'
import util from '@/common/util'
import routerPath from '@/router/routerPath'

export default {
  name: 'columnList',
  data() {
    return {
      totalSize: 0,
      params: {
        name: '',
        currentPage: 1,
        pageSize: 10
      },
      listData: [],
      routerPath
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.tagGetList()
  },
  methods: {
    search() {
      this.tagGetList()
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          name: ''
        }
      )
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize
      this.tagGetList()
    },
    currentChange(currentPage) {
      this.params.currentPage = currentPage
      this.tagGetList()
    },
    tagGetList() {
      api.tagGetList({linkData: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.listData = res.data.data
        }
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
    justify-content: space-between;

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

</style>
