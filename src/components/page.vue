<template>
  <div class="page">
    <select v-model="pageSize" v-on:change="changePageSize">
      <option :value="10" selected>10条</option>
      <option :value="20">20条</option>
      <option :value="30">30条</option>
    </select>
    <span v-on:click="prevPage" class="el-icon-arrow-left"></span>
    <a>{{currPage}}/{{getTotalPage()}}</a>
    <span v-on:click="nextPage" class="el-icon-arrow-right"></span>
    到第
    <input min="1" type="number" v-model="inputPage"/>
    页
    <a v-on:click="gotoPage" class="gotoPage">Go</a>
  </div>
</template>
<script>
  export default {
    name: 'page',
    data() {
      return {
        inputPage: '',
        pageSize: 10
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
    created() {
    },
    mounted() {

    },
    methods: {
      getTotalPage() {
        let {totalSize, pageSize} = this
        let totalPage = Math.ceil(totalSize / pageSize)
        return totalPage
      },
      changePageSize() {
        this.$emit('changePage', {currPage: 1, pageSize: this.pageSize})
      },
      prevPage() {
        if (this.currPage > 1) {
          let currPage = this.currPage - 1
          this.$emit('changePage', {currPage: currPage, pageSize: this.pageSize})
        }
      },
      nextPage() {
        let totalPage = this.getTotalPage()
        if (this.currPage < totalPage) {
          let currPage = this.currPage + 1
          this.$emit('changePage', {currPage: currPage, pageSize: this.pageSize})
        }
      },
      gotoPage() {
        let totalPage = this.getTotalPage()
        if (this.inputPage <= totalPage && this.inputPage >= 1) {
          let currPage = this.inputPage
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

    select {
      display: inline-block;
      width: 70px;
      height: 32px;
      border: 1px solid #e4e4e4;
      outline: none;
      margin: 0px 10px;
      border-radius: 3px;
      background: transparent;
      color: #666;
    }

    input {
      display: inline-block;
      width: 30px;
      height: 33px;
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
      height: 32px;
      background: #00c1de;
      line-height: 32px;
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

