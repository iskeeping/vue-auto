<template>
  <mainContainer>
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
          <template v-if="data.type==='menu'">
            <i class="el-icon-circle-plus-outline" @click="append('add',data)"></i>
          </template>
          <template v-if="data.type==='function'">
            <i class="el-icon-edit-outline" @click="() => append('edit',data)"></i>
            <i class="el-icon-delete"></i>
          </template>
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
  name: 'authorityList',
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
    this.menuGetList().then((arr) => {
      this.addMenu(arr)
      this.authorityGetList(arr)
    }).catch(() => {
    })
  },
  methods: {
    append(type, data) {
      if (type === 'add') {
        this.$router.push(`${routerPath.authorityCreatePath}?parentId=${data._id}`)
      } else if (type === 'edit') {
        this.$router.push(`${routerPath.authorityCreatePath}?id=${data._id}`)
      }
    },
    remove(data) {

    },
    menuGetList() {
      return new Promise((resolve, reject) => {
        api.menuGetList({params: this.params}).then((res) => {
          if (res.data.code === 0) {
            this.totalSize = res.data.totalSize
            res.data.data.map((item) => {
              const d = util.getYMDHMS(item.createTime)
              item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
            })
            resolve(res.data.data)
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        })
      })
    },
    addMenu(arr) {
      arr.map((item) => {
        let children = util.findChildren(arr, item._id)
        if (children.length === 0) {
          item.type = 'menu'
        }
      })
    },
    addFunction(arr) {
      arr.map((item) => {
        item.type = 'function'
      })
    },
    authorityGetList(arr) {
      api.authorityGetList({params: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.addFunction(res.data.data)
          let listData = res.data.data.concat(arr)
          this.listData = util.createTree(listData, this.rootId)
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
    padding: 20px 20px;

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
