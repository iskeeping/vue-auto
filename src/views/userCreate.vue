<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="手机号码：">
          <div class="input-itm">
            <el-input placeholder="请输入手机号码" type="text"
                      v-model="params.phone"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="密码：">
          <div class="input-itm">
            <el-input placeholder="请输入密码" type="text"
                      v-model="params.password"></el-input>
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
    this.userGetOne()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.userUpdateOne()
      } else {
        this.userCreateOne()
      }
    },
    userGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.userGetOne({linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
        }
      })
    },
    userCreateOne() {
      api.userCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    userUpdateOne() {
      api.userUpdateOne({data: this.params, linkData: {_id: this.$route.query.id}}).then((res) => {
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
