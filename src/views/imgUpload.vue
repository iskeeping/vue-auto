<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="图片名称：">
          <div class="input-itm">
            <el-input placeholder="请输入图片名称" type="text"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="图片：">
          <el-upload
            class="avatar-uploader"
            :action="url.imgUploadOne"
            :show-file-list="false"
            :on-success="uploadImgSuccess"
            :before-upload="beforeUploadImg">
            <img v-if="params.url" :src="params.url" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
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
import * as url from '@/common/url'
import * as api from '@/common/api'

export default {
  name: 'imgUpload',
  data() {
    return {
      params: {
        name: '',
        url: ''
      },
      url
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.imgGetOne()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.imgUpdateOne()
      } else {
        this.imgCreateOne()
      }
    },
    uploadImgSuccess(res) {
      if (res.code === 0) {
        // this.params.url = URL.createObjectURL(file.raw)
        this.params.url = res.data.url
      }
    },
    beforeUploadImg(file) {
      const isJPG = file.type === 'image/jpeg'
      const isPNG = file.type === 'image/png'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!(isJPG || isPNG)) {
        this.$message.error('上传头像图片只能是 JPG PNG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return (isPNG || isJPG) && isLt2M
    },
    imgCreateOne() {
      api.imgCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    imgGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.imgGetOne({params: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
        }
      })
    },
    imgUpdateOne() {
      api.imgUpdateOne({params: {_id: this.$route.query.id}, data: this.params}).then((res) => {
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
<style lang="scss">
  .form-con {
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }

    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }

    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  }
</style>
