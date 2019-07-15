<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="文章标题：">
          <div class="input-itm">
            <el-input placeholder="请输入文章标题" type="text" :min="0"
                      v-model="params.title"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="作者：">
          <div class="input-itm">
            <el-input placeholder="请输入作者名字" type="text" :min="0"
                      v-model="params.author"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="文章内容：">
          <textarea id="simpleMDE" style="width:100%" placeholder="请用markdown编辑文章内容"></textarea>
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
  name: 'articleCreate',
  data() {
    return {
      params: {
        title: '',
        author: '',
        content: ''
      },
      simplemde: null
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.simpleMDE()
    this.articleGetOne()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.articleUpdateOne()
      } else {
        this.articleCreateOne()
      }
    },
    articleGetOne() {
      if (!this.$route.query.id) {
        return
      }
      api.articleGetOne({linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
          this.simplemde.value(this.params.content)

        }
      }).catch()
    },
    articleCreateOne() {
      api.articleCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      }).catch()
    },
    articleUpdateOne() {
      api.articleUpdateOne({data: this.params, linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      }).catch()
    },
    simpleMDE() {
      let simplemde = new SimpleMDE({
        element: document.getElementById('simpleMDE'),
        autofocus: false,
        autosave: false,
        spellChecker: false
      })
      simplemde.codemirror.on('change', () => {
        // let showdown = require('showdown')
        // let converter = new showdown.Converter()
        // let html = converter.makeHtml(text)
        let content = simplemde.value()
        this.params.content = content
      })
      this.simplemde = simplemde
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
