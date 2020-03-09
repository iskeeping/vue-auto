<template>
  <mainContainer>
    <div class="form-con">
      <el-form ref="form"
               :model="params" label-width="100px"
               label-position="left" size="small">
        <el-form-item label="角色名称：">
          <div class="input-itm">
            <el-input placeholder="请输入角色名称" type="text"
                      v-model="params.name"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="角色描述：">
          <div class="input-itm">
            <el-input placeholder="请输入角色描述" type="text"
                      v-model="params.description"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="角色权限：">
          <div class="tree-con">
            <el-tree
              ref="tree"
              show-checkbox
              :data="listData"
              node-key="_id"
              default-expand-all
              :expand-on-click-node="false"
            >
              <span class="custom-tree-node" slot-scope="{ node, data }">
                <span class="tree-name">{{ data.name }}</span>
              </span>
            </el-tree>
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
import util from '@/common/util'

export default {
  name: 'roleCreate',
  data() {
    return {
      params: {
        name: '',
        description: '',
        authorityList: []
      },
      listData: [],
      rootId: '0'
    }
  },
  components: {
    mainContainer
  },
  created() {
  },
  mounted() {
    this.menuGetList().then((res) => {
      if (res.data.code === 0) {
        let arr = res.data.data
        this.addMenu(arr)
        this.authorityGetList(arr)
      }
    }).catch(() => {
    })
    if (this.$route.query.id) {
      this.roleGetOne()
    }
  },
  methods: {
    save() {
      let arr = []
      let res = this.$refs.tree.getCheckedNodes()
      res.map(item => {
        arr.push({id: item['_id'], type: item.type})
      })
      this.params.authorityList = arr
      // let {
      //   name,
      //   description,
      //   authorityList
      // } = this.params
      if (this.$route.query.id) {
        this.roleUpdateOne()
      } else {
        this.roleCreateOne()
      }
    },
    roleGetOne() {
      api.roleGetOne({params: {_id: this.$route.query.id}, method: 'get'}).then((res) => {
        if (res.data.code === 0) {
          this.params = res.data.data
          let authorityList = []
          this.params.authorityList.map(item => {
            authorityList.push(item.id)
          })
          this.$refs.tree.setCheckedKeys(authorityList)
        }
      }).catch(() => {
      })
    },
    roleCreateOne() {
      api.roleCreateOne({data: this.params}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    roleUpdateOne() {
      api.roleUpdateOne({data: this.params, params: {_id: this.$route.query.id}}).then((res) => {
        if (res.data.code === 0) {
          this.$router.go(-1)
        }
      }).catch(() => {
      })
    },
    menuGetList() {
      return new Promise((resolve, reject) => {
        api.menuGetList({params: this.params, method: 'get'}).then((res) => {
          if (res.data.code === 0) {
            this.totalSize = res.data.totalSize
            res.data.data.map((item) => {
              const d = util.getYMDHMS(item.createTime)
              item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
            })
          }
          resolve(res)
        }).catch((err) => {
          // eslint-disable-next-line prefer-promise-reject-errors
          reject(err)
        })
      })
    },
    addMenu(arr) {
      arr.map((item) => {
        let children = util.findChildren(arr, item['_id'])
        if (children.length === 0) {
          item.type = 'menu'
        }
      })
    },
    addFunction(arr) {
      arr.map((item) => {
        item.type = 'function'
      })
    },
    authorityGetList(arr) {
      api.authorityGetList({params: this.params, method: 'get'}).then((res) => {
        if (res.data.code === 0) {
          this.totalSize = res.data.totalSize
          res.data.data.map((item) => {
            const d = util.getYMDHMS(item.createTime)
            item.createTime = [d.year, '.', d.month, '.', d.date, ' ', d.hour, ':', d.minute, ':', d.second].join('')
          })
          this.addFunction(res.data.data)
          let listData = res.data.data.concat(arr)
          this.listData = util.createTree(listData, this.rootId)
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

  .tree-con {
    background: #fff;
    border: 1px solid #DCDFE6;
    padding: 5px 0;
    border-radius: 4px;

    .custom-tree-node {
      flex: 1;
      display: flex;
      align-items: center;

      .tree-name {
        font-size: 14px;
      }

    }
  }
</style>
