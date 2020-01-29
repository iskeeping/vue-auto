<template>
  <mainContainer>
    <div class="table-btn-con">
      <i class="el-icon-circle-plus-outline" @click="$router.push('roleCreate')"></i>
    </div>

    <div class="table-con">
      <el-table fit :data="listData" size="small">
        <el-table-column prop="_id" label="ID" align="center"></el-table-column>
        <el-table-column prop="name" label="角色名称" align="center"></el-table-column>
        <el-table-column prop="description" label="角色描述" align="center"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template slot-scope="scope">
            <div class="btn-con">
              <i class="el-icon-edit-outline" @click="$router.push(`roleCreate?id=${scope.row._id}`)"></i>
              <i class="el-icon-delete"></i>
            </div>
          </template>
        </el-table-column>
      </el-table>
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
      listData: []
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.roleGetList()
  },
  methods: {
    roleGetList() {
      api.roleGetList({linkData: this.params}).then((res) => {
        if (res.data.code === 0) {
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
    padding: 0 15px;
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
