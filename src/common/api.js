import request from './request'
import * as url from './url'

let articleGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.articleGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let articleCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.articleCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let articleUpdateOne = function ({linkData = {}, data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.articleUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data,
          linkData
        }))
  })
}

let articleGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.articleGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let imgCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.imgCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let imgGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.imgGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let imgGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.imgGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let imgUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.imgUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let columnCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.columnCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let columnCreateRootOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.columnCreateRootOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let columnGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.columnGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let columnGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.columnGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let columnUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.columnUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let tagCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.tagCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let tagGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.tagGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let tagGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.tagGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let tagUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.tagUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let commentCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.commentCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let commentGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.commentGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let commentGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.commentGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let commentUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.commentUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let logCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.logCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let logGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.logGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let logGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.logGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let logUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.logUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let informationCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.informationCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let informationGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.informationGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let informationGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.informationGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let informationUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.informationUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let noticeCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.noticeCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let noticeGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.noticeGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let noticeGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.noticeGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let noticeUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.noticeUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let userCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.userCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let userGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.userGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let userGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.userGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let userUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.userUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let userLogin = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.userLogin,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let menuCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.menuCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let menuCreateRootOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.menuCreateRootOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let menuGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.menuGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let menuGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.menuGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let menuUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.menuUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let authorityCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.authorityCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let authorityGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.authorityGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let authorityGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.authorityGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let authorityUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.authorityUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

let roleCreateOne = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.roleCreateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          data
        }))
  })
}

let roleGetList = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.roleGetList,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let roleGetOne = function ({linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          url: url.roleGetOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData
        }))
  })
}

let roleUpdateOne = function ({data = {}, linkData = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.roleUpdateOne,
          nextCallback: function (res) {
            resolve(res)
          }
        },
        {
          linkData,
          data
        }))
  })
}

export {
  articleGetList,
  articleCreateOne,
  articleUpdateOne,
  articleGetOne,
  imgCreateOne,
  imgGetList,
  imgGetOne,
  imgUpdateOne,
  columnCreateOne,
  columnCreateRootOne,
  columnGetList,
  columnGetOne,
  columnUpdateOne,
  tagCreateOne,
  tagGetList,
  tagGetOne,
  tagUpdateOne,
  commentCreateOne,
  commentGetList,
  commentGetOne,
  commentUpdateOne,
  logCreateOne,
  logGetList,
  logGetOne,
  logUpdateOne,
  informationCreateOne,
  informationGetList,
  informationGetOne,
  informationUpdateOne,
  noticeCreateOne,
  noticeGetList,
  noticeGetOne,
  noticeUpdateOne,
  userCreateOne,
  userGetList,
  userGetOne,
  userUpdateOne,
  userLogin,
  menuCreateOne,
  menuCreateRootOne,
  menuGetList,
  menuGetOne,
  menuUpdateOne,
  authorityCreateOne,
  authorityGetList,
  authorityGetOne,
  authorityUpdateOne,
  roleCreateOne,
  roleGetList,
  roleGetOne,
  roleUpdateOne
}
