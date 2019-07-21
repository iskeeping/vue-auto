<template>
  <mainContainer>
    <div class="btn-con">
      <i class="el-icon-circle-plus-outline" @click="() => append()"></i>
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
          <i class="el-icon-circle-plus-outline" @click="() => append(data)"></i>
          <i class="el-icon-remove-outline"></i>
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

<style lang="scss" scoped>
  .btn-con {
    padding: 0 20px 10px;
    color: #1489CD;
    font-size: 24px;
    margin-top: -10px;

    i {
      margin-left: 10px;
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
