import request from './request'
import * as url from './url'

let articleGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.articleGetList
      },
      option
    )
  )
}

let articleCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.articleCreateOne
      },
      option
    )
  )
}

let articleUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.articleUpdateOne
      },
      option
    )
  )
}

let articleGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.articleGetOne
      },
      option
    )
  )
}

let imgCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.imgCreateOne
      },
      option
    )
  )
}

let imgGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.imgGetList
      },
      option
    )
  )
}

let imgGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.imgGetOne
      },
      option
    )
  )
}

let imgUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.imgUpdateOne
      },
      option
    )
  )
}

let columnCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.columnCreateOne
      },
      option
    )
  )
}

let columnCreateRootOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.columnCreateRootOne
      },
      option
    )
  )
}

let columnGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.columnGetList
      },
      option
    )
  )
}

let columnGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.columnGetOne
      },
      option
    )
  )
}

let columnUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.columnUpdateOne
      },
      option
    )
  )
}

let tagCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.tagCreateOne
      },
      option
    )
  )
}

let tagGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.tagGetList
      },
      option
    )
  )
}

let tagGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.tagGetOne
      },
      option
    )
  )
}

let tagUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.tagUpdateOne
      },
      option
    )
  )
}

let commentCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.commentCreateOne
      },
      option
    )
  )
}

let commentGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.commentGetList,
        method: 'get'
      },
      option
    )
  )
}

let commentGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.commentGetOne
      },
      option
    )
  )
}

let commentUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.commentUpdateOne
      },
      option
    )
  )
}

let logCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.logCreateOne
      },
      option
    )
  )
}

let logGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.logGetList
      },
      option
    )
  )
}

let logGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.logGetOne
      },
      option
    )
  )
}

let logUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.logUpdateOne
      },
      option
    )
  )
}

let informationCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.informationCreateOne
      },
      option
    )
  )
}

let informationGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.informationGetList
      },
      option
    )
  )
}

let informationGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.informationGetOne
      },
      option
    )
  )
}

let informationUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.informationUpdateOne
      },
      option
    )
  )
}

let noticeCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.noticeCreateOne
      },
      option
    )
  )
}

let noticeGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.noticeGetList
      },
      option
    )
  )
}

let noticeGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.noticeGetOne
      },
      option
    )
  )
}

let noticeUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.noticeUpdateOne
      },
      option
    )
  )
}

let userCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.userCreateOne
      },
      option
    )
  )
}

let userGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.userGetList
      },
      option
    )
  )
}

let userGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.userGetOne
      },
      option
    )
  )
}

let userUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.userUpdateOne
      },
      option
    )
  )
}

let userLogin = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.userLogin
      },
      option
    )
  )
}

let userLogout = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.userLogout
      },
      option
    )
  )
}

let menuCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.menuCreateOne
      },
      option
    )
  )
}

let menuCreateRootOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.menuCreateRootOne
      },
      option
    )
  )
}

let menuGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.menuGetList
      },
      option
    )
  )
}

let menuGetUserList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.menuGetUserList
      },
      option
    )
  )
}

let menuGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.menuGetOne
      },
      option
    )
  )
}

let menuUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.menuUpdateOne
      },
      option
    )
  )
}

let authorityCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.authorityCreateOne
      },
      option
    )
  )
}

let authorityGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.authorityGetList
      },
      option
    )
  )
}

let authorityGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.authorityGetOne
      },
      option
    )
  )
}

let authorityUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.authorityUpdateOne
      },
      option
    )
  )
}

let roleCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.roleCreateOne
      },
      option
    )
  )
}

let roleGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.roleGetList
      },
      option
    )
  )
}

let roleGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.roleGetOne
      },
      option
    )
  )
}

let roleUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.roleUpdateOne
      },
      option
    )
  )
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
  menuGetUserList,
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
