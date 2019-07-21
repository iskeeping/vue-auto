<template>
  <mainContainer>
    <div class="btn-con">
      <i class="el-icon-circle-plus-outline" @click="() => append('add')"></i>
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
          <i class="el-icon-delete"></i>
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

export default {
  name: 'menuList',
  data() {
    return {
      listData: []
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.menuGetList()
  },
  methods: {
    append(type, data) {
      if (type === 'add') {
        this.$router.push('/menuCreate?parentId=' + (data ? data._id : '0'))
      } else if (type === 'edit') {
        this.$router.push('/menuCreate?id=' + data._id)
      }
    },
    remove(data) {

    },
    menuGetList() {
      api.menuGetList({linkData: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
            if (typeof item.parentId === 'undefined') {
              item.parentId = '0'
            }
          })
          this.listData = util.createTree(res.data.data, '0')
        }
      })

    }
  }
}

</script>

<style lang="scss" scoped>
  .btn-con {
    padding: 0 15px 10px;
    color: #1489CD;
    font-size: 24px;
    margin-top: -10px;

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
