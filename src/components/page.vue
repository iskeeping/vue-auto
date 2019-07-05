<template>
  <div class="page">
    <div class="select">
      <el-select v-model="pageSize" placeholder="请选择" @change="changePageSize" size="small">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <span @click="prevPage" class="el-icon-arrow-left"></span>
    <span>{{currPage}}/{{getTotalPage()}}</span>
    <span @click="nextPage" class="el-icon-arrow-right"></span>
    <span>到第</span>
    <div class="input">
      <el-input size="small" min="1" type="number" v-model="inputPage"/>
    </div>
    <span>页</span>
    <el-button type="primary" size="small" @click="gotoPage">Go</el-button>
  </div>
</template>
<script>
export default {
  name: 'page',
  data () {
    return {
      inputPage: '',
      pageSize: 10,
      options: [
        {
          value: 10,
          label: '10条'
        },
        {
          value: 20,
          label: '20条'
        },
        {
          value: 30,
          label: '30条'
        }
      ]
    }
  },
  props: {
    currPage: {
      type: Number,
      value: 1
    },
    totalSize: {
      type: Number,
      value: 1
    }
  },
  created () {
  },
  mounted () {

  },
  methods: {
    getTotalPage () {
      return Math.ceil(this.totalSize / this.pageSize)
    },
    changePageSize () {
      this.$emit('changePage', {currPage: 1, pageSize: this.pageSize})
    },
    prevPage () {
      let currPage = this.currPage
      if (currPage > 1) {
        currPage = currPage - 1
        this.$emit('changePage', {currPage: currPage, pageSize: this.pageSize})
      }
    },
    nextPage () {
      let totalPage = this.getTotalPage()
      let currPage = this.currPage
      if (currPage < totalPage) {
        currPage = currPage + 1
        this.$emit('changePage', {currPage: currPage, pageSize: this.pageSize})
      }
    },
    gotoPage () {
      let totalPage = this.getTotalPage()
      let currPage = this.inputPage
      if (currPage <= totalPage && currPage >= 1) {
        this.$emit('changePage', {currPage: currPage, pageSize: this.pageSize})
      } else {
        //没有这一页数据
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .page {
    display: flex;
    height: 32px;
    line-height: 32px;
    color: #666;
    align-items: center;
    justify-content: flex-end;
    font-size: 0;

    * {
      display: block;
    }

    .select {
      width: 80px;
      height: 32px;
      margin-right: 10px;
    }

    .input {
      width: 70px;
      margin-right: 10px;

      .el-input__inner {
        padding: 0 !important;
      }
    }

    span.el-icon-arrow-left, span.el-icon-arrow-right {
      width: 10px;
      height: 32px;
      line-height: 32px;
      text-align: center;
      cursor: pointer;
    }

    span {
      color: #666;
      font-size: 12px;
      margin-right: 10px;
    }

  }
</style>

