<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="栏目名称：">
          <div class="input-itm">
            <el-input placeholder="请输入栏目名称" type="text"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="备注：">
          <div class="input-itm">
            <el-input placeholder="请输入备注" type="text"
                      v-model="params.remark"></el-input>
          </div>
        </el-form-item>
        <div class="btns">
          <el-button type="primary" size="small" @click="save">保存</el-button>
        </div>
      </el-form>
    </div>
  </mainContainer>
</template>
<script>
import mainContainer from '@/components/mainContainer'
import * as api from '@/common/api'

export default {
  name: 'columnCreate',
  data() {
    return {
      params: {
        name: '',
        remark: ''
      }
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.columnGetOne()
  },
  methods: {
    save() {
      
      if(!this.params.name ) {
          this.$message.error('请输入栏目名称')
          return
      }

      if (this.$route.query.id) {
        this.columnUpdateOne()
      } else if (this.$route.query.parentId) {
        this.columnCreateOne()
      } else {
        this.columnCreateRootOne()
      }
    },
    columnGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.columnGetOne({params: {_id: this.$route.query.id}, method: 'get'}).then((res) => {
        if (res.data.code === 1) {
          this.params = res.data.data
        }
      }).catch(() => {
      })
    },
    columnCreateRootOne() {
      let {
        name,
        remark
      } = this.params
      api.columnCreateRootOne({
        data: {
          name,
          remark
        }
      }).then((res) => {
        if (res.data.code === 1) {
          this.$message.success('添加成功')
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    columnCreateOne() {
      let {
        name,
        remark
      } = this.params
      let parentId = this.$route.query.parentId
      api.columnCreateOne({
        data: {
          name,
          remark,
          parentId
        }
      }).then((res) => {
        if (res.data.code === 1) {
           this.$message.success('添加成功')
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    columnUpdateOne() {
      api.columnUpdateOne({data: this.params, params: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 1) {
           this.$message.success('修改成功')
          this.$router.go(-1)
        }
      }).catch(() => {
      })
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
      width: 178px;
    }
  }
</style>
