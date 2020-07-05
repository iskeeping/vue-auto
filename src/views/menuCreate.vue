<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="菜单名称：">
          <div class="input-itm">
            <el-input placeholder="请输入菜单名称" type="text"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="路径：">
          <div class="input-itm">
            <el-input placeholder="请输入路径" type="text"
                      v-model="params.url"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="icon名称：">
          <div class="input-itm">
            <el-input placeholder="请输入icon名称" type="text"
                      v-model="params.icon"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="序号：">
          <div class="input-itm">
            <el-input placeholder="请输入序号" type="number"
                      v-model="params.number"></el-input>
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
import 'simplemde/dist/simplemde.min.css'
import * as api from '@/common/api'

export default {
  name: 'menuCreate',
  data() {
    return {
      params: {
        name: '',
        remark: '',
        url: '',
        icon: ''
      }
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.menuGetOne()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.menuUpdateOne()
      } else if (this.$route.query.parentId) {
        this.menuCreateOne()
      } else {
        this.menuCreateRootOne()
      }
    },
    menuGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.menuGetOne({params: {_id: this.$route.query.id}, method: 'get'}).then((res) => {
        if (res.data.code === 1) {
          this.params = res.data.data
        }
      }).catch(() => {
      })
    },
    menuCreateOne() {
      let {
        name,
        remark
      } = this.params
      let parentId = this.$route.query.parentId
      api.menuCreateOne({
        data: {
          name,
          remark,
          parentId
        }
      }).then((res) => {
        if (res.data.code === 1) {
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    menuCreateRootOne() {
      let {
        name,
        remark
      } = this.params
      api.menuCreateRootOne({
        data: {
          name,
          remark
        }
      }).then((res) => {
        if (res.data.code === 1) {
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    menuUpdateOne() {
      api.menuUpdateOne({data: this.params, params: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 1) {
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
