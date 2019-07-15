<template>
  <mainContainer>
    <div>欢迎光临</div>
  </mainContainer>
</template>

<script>
import mainContainer from '@/components/mainContainer'

export default {
  name: 'articleList',
  data() {
    return {
      params: {
        name: '',
        id: '',
        currPage: 1,
        totalSize: 30,
        pageSize: 10
      },
      listData: [
        {
          id: 1,
          name: '你好',
          num: 20
        }
      ]
    }
  },
  components: {
    mainContainer
  },
  activated() {
  },
  methods: {
    search() {
    },
    reset() {
      this.params = Object.assign(
        {},
        this.params,
        {
          name: '',
          id: ''
        }
      )
    },
    changePage({currPage, pageSize}) {
      this.params.currPage = currPage
      this.params.pageSize = pageSize
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

    .input-itm {
      width: 200px;
    }
  }

  .table-con {
    padding: 0 20px;
    background: #fff;
    width: 100%;
    box-sizing: border-box;
    margin-top: 20px;
  }

  .btn-con {
    background: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
  }

</style>
