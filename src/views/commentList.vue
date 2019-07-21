<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="留言人：">
          <div class="input-itm">
            <el-input placeholder="请输入留言人" type="text" :min="0" v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="被留言人：">
          <div class="input-itm">
            <el-input placeholder="请输入被留言人" type="text" :min="0" v-model="params.pname"></el-input>
          </div>
        </el-form-item>
        <div class="btn-con">
          <el-button type="primary" size="small" @click="search">查询</el-button>
          <el-button size="small" @click="reset">重置</el-button>
        </div>
      </el-form>
      <div class="add-btn">
        <!--<el-button size="small" @click="$router.push('columnCreate')">新增</el-button>-->
      </div>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column prop="content" label="留言内容" align="center"></el-table-column>
        <el-table-column prop="name" label="被留言人" align="center"></el-table-column>
        <el-table-column prop="name" label="留言人" align="center"></el-table-column>
        <el-table-column prop="status" label="状态" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="small" @click="$router.push(`columnCreate?id=${scope.row._id}`)">编辑
            </el-button>
            <el-button size="small" @click="$router.push(`columnCreate?id=${scope.row._id}`)">详情</el-button>
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
  name: 'commentList',
  data() {
    return {
      totalSize: 0,
      params: {
        pname: '',
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
  mounted() {
    this.commentGetList()
  },
  methods: {
    search() {
      this.commentGetList()
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          pname: '',
          name: ''
        }
      )
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize
      this.commentGetList()
    },
    currentChange(currentPage) {
      this.params.currentPage = currentPage
      this.commentGetList()
    },
    commentGetList() {
      api.commentGetList({linkData: this.params}).then((res) => {
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
