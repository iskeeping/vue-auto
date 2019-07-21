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
          <el-button
            type="text"
            size="small"
            @click="() => append(node,data)">
            新增
          </el-button>
          <!--<el-button
            type="text"
            size="small"
            @click="() => remove(node, data)">
            删除
          </el-button>-->
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
  name: 'authorityList',
  data() {
    return {
      listData: []
    }
  },
  components: {
    mainContainer
  },
  activated() {
    this.columnGetList()
  },
  methods: {
    search() {
      this.columnGetList()
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          title: ''
        }
      )
    },
    sizeChange(pageSize) {
      this.params.pageSize = pageSize
      this.columnGetList()
    },
    currentChange(currentPage) {
      this.params.currentPage = currentPage
      this.columnGetList()
    },
    columnGetList() {
      api.columnGetList({linkData: this.params}).then((res) => {
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
    }
  }
</style>
