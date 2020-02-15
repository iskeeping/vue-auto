import request from './request'
import * as url from './url'

let articleGetList = function ({params = {}}) {
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
          params
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

let articleUpdateOne = function ({params = {}, data = {}}) {
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
          params
        }))
  })
}

let articleGetOne = function ({params = {}}) {
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
          params
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

let imgGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let imgGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let imgUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let columnGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let columnGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let columnUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let tagGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let tagGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let tagUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let commentGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let commentGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let commentUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let logGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let logGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let logUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let informationGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let informationGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let informationUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let noticeGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let noticeGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let noticeUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let userGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let userGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let userUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let userLogout = function ({data = {}}) {
  return new Promise((resolve) => {
    request(
      Object.assign(
        {
          method: 'post',
          url: url.userLogout,
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

let menuGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let menuGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let menuUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let authorityGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let authorityGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let authorityUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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

let roleGetList = function ({params = {}}) {
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
          params
        }))
  })
}

let roleGetOne = function ({params = {}}) {
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
          params
        }))
  })
}

let roleUpdateOne = function ({data = {}, params = {}}) {
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
          params,
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
  userLogout,
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
