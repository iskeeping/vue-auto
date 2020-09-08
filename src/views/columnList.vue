<template>
  <mainContainer>
    <div class="btn-con">
      <i class="el-icon-circle-plus-outline" @click="append('addRoot')"></i>
    </div>
    <div class="tree-con">
      <el-tree
        :data="listData"
        node-key="_id"
        default-expand-all
        :expand-on-click-node="false"
      >
      <span class="custom-tree-node" slot-scope="{ node, data }">
        <span class="tree-name">{{ data.name }}</span>
        <span>
          <i class="el-icon-circle-plus-outline" @click="append('add',data)"></i>
          <i class="el-icon-edit-outline" @click="() => append('edit',data)"></i>
          <i class="el-icon-delete"  @click="() => remove(data._id)"></i>
        </span>
      </span>
      </el-tree>
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
      rootId: '0',
      params: {},
      listData: [],
      routerPath
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.columnGetList()
  },
  methods: {
    append(type, data) {
      if (type === 'addRoot') {
        this.$router.push(`${routerPath.columnCreatePath}`)
      } else if (type === 'add') {
        this.$router.push(`${routerPath.columnCreatePath}?parentId=${data['_id']}`)
      } else if (type === 'edit') {
        this.$router.push(`${routerPath.columnCreatePath}?id=${data['_id']}`)
      }

    },
    remove(id) {
      // data
       this.$confirm('是否确定删除？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          api.columnDeleteOne({params: {_id: id}}).then((res) => {
            if (res.data.code === 1) {
               this.$message.success('删除成功')
              this.columnGetList()
            }
          }).catch(() => {
          })
        }).catch(() => {
        })
    },
    columnGetList() {
      api.columnGetList({params: this.params, method: 'get'}).then((res) => {
        if (res.data.code === 1) {
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
            if (typeof item.parentId === 'undefined') {
              item.parentId = '0'
            }
          })
          this.listData = util.createTree(res.data.data, '0')
        }
      }).catch(() => {
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .btn-con {
    padding: 0 20px 10px;
    color: #1489CD;
    font-size: 24px;

    i {
      margin: 0 5px;
    }
  }
</style>

<style lang="scss">

  .tree-con {
    background: #fff;
    padding: 15px 20px;

    .custom-tree-node {
      flex: 1;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .tree-name {
        font-size: 14px;
      }

      i {
        color: #1489CD;
        font-size: 18px;
        margin: 0 5px;
      }

    }
  }
</style>
