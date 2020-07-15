<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="手机号：">
          <div class="input-itm">
            <el-input placeholder="请输入手机号" type="text" v-model="params.phone"></el-input>
          </div>
        </el-form-item>
        <div class="btn-con">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form>
      <div class="add-btn">
        <!--        <el-button size="small" @click="$router.push('userCreate')">新增</el-button>-->
      </div>
    </div>

    <div class="table-btn-con">
      <i class="el-icon-circle-plus-outline" @click="$router.push('userCreate')"></i>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column label="角色" align="center">
          <template slot-scope="scope">
            {{scope.row.phone}}
          </template>
        </el-table-column>
        <el-table-column prop="phone" label="手机号" align="center"></el-table-column>
        <el-table-column prop="password" label="密码" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="btn-con">
              <i class="el-icon-edit-outline" @click="$router.push(`userCreate?id=${scope.row._id}`)"></i>
              <i class="el-icon-delete" @click="userDeleteOne(`${scope.row._id}`)"></i>
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

export default {
  name: 'columnList',
  data() {
    return {
      totalSize: 0,
      params: {
        phone: '',
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
    this.userGetList()
  },
  methods: {
    search() {
      this.userGetList()
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          phone: ''
        }
      )
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize
      this.userGetList()
    },
    currentChange(currentPage) {
      this.params.currentPage = currentPage
      this.userGetList()
    },
    userDeleteOne(id) {
      this.$confirm('是否确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          api.userDeleteOne({params: {_id: id}, method: 'get'}).then((res) => {
            if (res.data.code === 1) {
              this.userGetList()
            }
          }).catch(() => {
          })
        }).catch(() => {
        })
    },
    userGetList() {
      api.userGetList({params: this.params, method: 'get'}).then((res) => {
        if (res.data.code === 1) {
          this.totalSize = res.data.totalSize
          res.data.data.forEach((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.listData = res.data.data
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
