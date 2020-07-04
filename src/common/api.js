import request from './request'
import * as url from './url'

let courseGetList = function (option = {}) {
  return request(
    Object.assign(
      {
        url: url.courseGetList
      },
      option
    )
  )
}

let courseCreateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.courseCreateOne
      },
      option
    )
  )
}

let courseUpdateOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.courseUpdateOne
      },
      option
    )
  )
}

let courseGetOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'post',
        url: url.courseGetOne
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

let userDeleteOne = function (option = {}) {
  return request(
    Object.assign(
      {
        method: 'get',
        url: url.userDeleteOne
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
        method: 'get',
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
  courseGetList,
  courseCreateOne,
  courseUpdateOne,
  courseGetOne,
  imgCreateOne,
  imgGetList,
  imgGetOne,
  imgUpdateOne,
  columnCreateOne,
  columnCreateRootOne,
  columnGetList,
  columnGetOne,
  columnUpdateOne,
  userCreateOne,
  userGetList,
  userGetOne,
  userUpdateOne,
  userDeleteOne,
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
