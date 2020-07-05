import request from './request'
import * as url from './url'

// eslint-disable-next-line no-shadow
function commonMethod({ url, method }) {
  return function (option) {
    return request(
      Object.assign(
        {
          url: url,
          method: method || 'get'
        },
        option || {}
      )
    )
  }
}

let courseGetList = commonMethod({ url: url.courseGetList })

let courseCreateOne = commonMethod({ url: url.courseCreateOne, method: 'post' })

let courseUpdateOne = commonMethod({ url: url.courseUpdateOne, method: 'post' })

let courseGetOne = commonMethod({ url: url.courseGetOne, method: 'post' })

let imgCreateOne = commonMethod({ url: url.imgCreateOne, method: 'post' })

let imgGetList = commonMethod({ url: url.imgGetList, method: 'post' })

let imgGetOne = commonMethod({ url: url.imgGetOne, method: 'post' })

let imgUpdateOne = commonMethod({ url: url.imgUpdateOne, method: 'post' })

let columnCreateOne = commonMethod({ url: url.columnCreateOne, method: 'post' })

let columnCreateRootOne = commonMethod({ url: url.columnCreateRootOne, method: 'post' })

let columnGetList = commonMethod({ url: url.columnGetList, method: 'post' })

let columnGetOne = commonMethod({ url: url.columnGetOne, method: 'post' })

let columnUpdateOne = commonMethod({ url: url.columnUpdateOne, method: 'post' })

let userCreateOne = commonMethod({ url: url.userCreateOne, method: 'post' })

let userGetList = commonMethod({ url: url.userGetList, method: 'post' })

let userGetOne = commonMethod({ url: url.userGetOne })

let userUpdateOne = commonMethod({ url: url.userUpdateOne, method: 'post' })

let userDeleteOne = commonMethod({ url: url.userDeleteOne })

let userLogin = commonMethod({ url: url.userLogin, method: 'post' })

let userLogout = commonMethod({ url: url.userLogout, method: 'post' })

let menuCreateOne = commonMethod({ url: url.menuCreateOne, method: 'post' })

let menuDeleteOne = commonMethod({ url: url.menuDeleteOne, method: 'get' })

let menuCreateRootOne = commonMethod({ url: url.menuCreateRootOne, method: 'post' })

let menuGetList = commonMethod({ url: url.menuGetList })

let menuGetUserList = commonMethod({ url: url.menuGetUserList })

let menuGetOne = commonMethod({ url: url.menuGetOne })

let menuUpdateOne = commonMethod({ url: url.menuUpdateOne, method: 'post' })

let authorityCreateOne = commonMethod({ url: url.authorityCreateOne, method: 'post' })

let authorityGetList = commonMethod({ url: url.authorityGetList })

let authorityGetOne = commonMethod({ url: url.authorityGetOne })

let authorityUpdateOne = commonMethod({ url: url.authorityUpdateOne, method: 'post' })

let roleCreateOne = commonMethod({ url: url.roleCreateOne, method: 'post' })

let roleGetList = commonMethod({ url: url.roleGetList })

let roleGetOne = commonMethod({ url: url.roleGetOne })

let roleUpdateOne = commonMethod({ url: url.roleUpdateOne, method: 'post' })

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
  menuDeleteOne,
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
