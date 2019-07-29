<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="文章标题：">
          <div class="input-itm">
            <el-input placeholder="请输入文章标题" type="text"
                      v-model="params.title"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="作者：">
          <div class="input-itm">
            <el-input placeholder="请输入作者名字" type="text"
                      v-model="params.author"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="所属栏目：">
          <div class="input-itm">
            <el-cascader
              v-model="columnIds"
              :options="columnListData"
              size="small"
              value="_id"
              label="name"
            >
            </el-cascader>
          </div>
        </el-form-item>
        <el-form-item label="文章标签：">
          <div class="input-itm">
            <el-select v-model="params.tagIds" multiple filterable placeholder="请选择文章标签">
              <el-option
                v-for="item in tagListData"
                :key="item._id"
                :label="item.name"
                :value="item._id">
              </el-option>
            </el-select>
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
import util from '@/common/util'
import routerPath from '@/router/routerPath'

export default {
  name: 'articleCreate',
  data() {
    return {
      params: {
        title: '',
        author: '',
        columnId: '',
        content: '',
        tagIds: []
      },
      columnIds: [],
      simplemde: null,
      columnListData: [],
      tagListData: [],
      routerPath,
      rootId: '0'
    }
  },
  watch: {
    columnIds() {
      this.params.columnId = this.columnIds[this.columnIds.length - 1]
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.simpleMDE()
    this.columnGetList().then((data) => {
      this.articleGetOne(data).then(() => {
      }).catch(() => {
      })
    }).catch(() => {
    })
    this.tagGetList()
  },
  methods: {
    save() {
      if (this.$route.query.id) {
        this.articleUpdateOne()
      } else {
        this.articleCreateOne()
      }
    },
    articleGetOne(data) {
      return new Promise((resolve, reject) => {
        if (!this.$route.query.id) {
          return
        }
        api.articleGetOne({linkData: {_id: this.$route.query.id}}).then((res) => {
          if (res.data.code === 0) {
            let {
              columnId
            } = res.data.data
            let columnIds = []
            let columns = util.findParents(data, columnId)
            columns.map((item) => {
              columnIds.push(item._id)
            })
            this.params = res.data.data
            this.columnIds = columnIds
            this.simplemde.value(this.params.content)
            resolve()
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        })
      })
    },
    articleCreateOne() {
      api.articleCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    articleUpdateOne() {
      api.articleUpdateOne({data: this.params, linkData: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      })
    },
    columnGetList() {
      return new Promise((resolve, reject) => {
        api.columnGetList({linkData: this.params}).then((res) => {
          if (res.data.code === 0) {
            res.data.data.map((item) => {
              const d = util.getYMDHMS(item.createTime)
              item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
              if (typeof item.parentId === 'undefined') {
                item.parentId = '0'
              }
              item.value = item._id
              item.label = item.name
            })
            let listData = JSON.parse(JSON.stringify(res.data.data))
            this.columnListData = util.createTree(res.data.data, this.rootId)
            resolve(listData)
          }
          // eslint-disable-next-line prefer-promise-reject-errors
          reject()
        })
      })
    },
    tagGetList() {
      api.tagGetList({linkData: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.tagListData = res.data.data
        }
      })

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
