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
    <a>{{currPage}}/{{getTotalPage()}}</a>
    <span @click="nextPage" class="el-icon-arrow-right"></span>
    到第
    <input min="1" type="number" v-model="inputPage"/>
    页
    <a @click="gotoPage" class="gotoPage">Go</a>
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

    .select {
      width: 80px;
      height: 32px;
    }

    input {
      display: inline-block;
      width: 30px;
      height: 30px;
      border: 1px solid #e4e4e4;
      outline: none;
      margin: 0px 10px;
      border-radius: 3px;
      text-align: center;
    }

    span {
      width: 10px;
      height: 32px;
      line-height: 32px;
      color: #666;
      text-align: center;
      cursor: pointer;
      margin-right: 10px;
    }

    a {
      display: inline-block;
      width: auto;
      padding: 0px 8px;
      height: 30px;
      background: #00c1de;
      line-height: 30px;
      text-align: center;
      color: #fff;
      border-radius: 3px;
      cursor: pointer;

      &.gotoPage {
        margin-left: 10px;
      }
    }
  }
</style>

