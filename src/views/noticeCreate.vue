<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="栏目名称：">
          <div class="input-itm">
            <el-input placeholder="请输入栏目名称" type="text" :min="0"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="备注：">
          <div class="input-itm">
            <el-input placeholder="请输入备注" type="text" :min="0"
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
import SimpleMDE from 'simplemde'
import 'simplemde/dist/simplemde.min.css'
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
      if (this.$route.query.id) {
        this.columnUpdateOne()
      } else {
        this.columnCreateOne()
      }
    },
    columnGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.columnGetOne({linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
          this.simplemde.value(this.params.content)

        }
      })
    },
    columnCreateOne() {
      api.columnCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    columnUpdateOne() {
      api.columnUpdateOne({data: this.params, linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
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
