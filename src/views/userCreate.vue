<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="标签名称：">
          <div class="input-itm">
            <el-input placeholder="请输入标签名称" type="text"
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
    this.tagGetOne()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.tagUpdateOne()
      } else {
        this.tagCreateOne()
      }
    },
    tagGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.tagGetOne({linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
          this.simplemde.value(this.params.content)

        }
      })
    },
    tagCreateOne() {
      api.tagCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    tagUpdateOne() {
      api.tagUpdateOne({data: this.params, linkData: {_id: this.$route.query.id}}).then((res) => {
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
