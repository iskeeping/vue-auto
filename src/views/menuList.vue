<template>
  <mainContainer>
    <div class="btn-con">
      <i class="el-icon-circle-plus-outline" @click="() => append('addRoot')"></i>
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
          <i class="el-icon-circle-plus-outline" @click="append('add',data)" v-if="data.parentId==rootId"></i>
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
import routerPath from '@/router/routerPath'

export default {
  name: 'menuList',
  data() {
    return {
      rootId: '0',
      listData: [],
      routerPath
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
      if (type === 'addRoot') {
        this.$router.push(`${routerPath.menuCreatePath}`)
      } else if (type === 'add') {
        this.$router.push(`${routerPath.menuCreatePath}?parentId=${data._id}`)
      } else if (type === 'edit') {
        this.$router.push(`${routerPath.menuCreatePath}?id=${data._id}`)
      }
    },
    remove(data) {

    },
    menuGetList() {
      api.menuGetList({params: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.listData = util.createTree(res.data.data, this.rootId)
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
