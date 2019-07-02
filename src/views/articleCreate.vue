<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="页面名称：">
          <div class="input-itm">
            <el-input style="width:95%" placeholder="请输入页面名称" type="text" :min="0"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="页面内容：">
          <textarea id="simpleMDE" style="width:100%"></textarea>
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

export default {
  name: 'articleCreate',
  data () {
    return {
      params: {
        name: '',
        imgListData: [{}]
      }
    }
  },
  components: {
    mainContainer
  },
  created () {
  },
  mounted () {
    this.simpleMDE()
  },
  methods: {
    save () {
    },
    simpleMDE () {
      let simplemde = new SimpleMDE({
        element: document.getElementById('simpleMDE'),
        autofocus: false,
        autosave: false,
        spellChecker: false
      })
      simplemde.codemirror.on('change', function () {
        console.log(simplemde.value())
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
      width: 200px;
    }
  }
</style>
