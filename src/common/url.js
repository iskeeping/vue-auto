let base = './api/'

//课程管理
let courseGetList = base + 'course/getList'
let courseCreateOne = base + 'coursesControllers/createOne'
let courseUpdateOne = base + 'course/updateOne'
let courseGetOne = base + 'course/getOne'
//图片管理
let imgUploadOne = base + 'img/uploadOne'
let imgCreateOne = base + 'img/createOne'
let imgGetList = base + 'img/getList'
let imgGetOne = base + 'img/getOne'
let imgUpdateOne = base + 'img/updateOne'
let imgDeleteOne = base + 'img/deleteOne'
//栏目管理
let columnCreateOne = base + 'column/createOne'
let columnCreateRootOne = base + 'column/createRootOne'
let columnGetList = base + 'column/getList'
let columnGetOne = base + 'column/getOne'
let columnUpdateOne = base + 'column/updateOne'
//用户管理
let userCreateOne = base + 'users/createOne'
let userGetList = base + 'users/getList'
let userGetOne = base + 'users/getOne'
let userUpdateOne = base + 'users/updateOne'
let userDeleteOne = base + 'users/deleteOne'
let userLogin = base + 'users/login'
let userLogout = base + 'users/logout'
//菜单管理
let menuCreateOne = base + 'menus/createOne'
let menuDeleteOne = base + 'menus/deleteOne'
let menuCreateRootOne = base + 'menus/createRootOne'
let menuGetUserList = base + 'menus/getUserList'
let menuGetList = base + 'menus/getList'
let menuGetOne = base + 'menus/getOne'
let menuUpdateOne = base + 'menus/updateOne'
//权限管理
let authorityCreateOne = base + 'authority/createOne'
let authorityGetList = base + 'authority/getList'
let authorityGetOne = base + 'authority/getOne'
let authorityUpdateOne = base + 'authority/updateOne'
//角色管理
let roleCreateOne = base + 'role/createOne'
let roleGetList = base + 'role/getList'
let roleGetOne = base + 'role/getOne'
let roleUpdateOne = base + 'role/updateOne'

export {
  courseGetList,
  courseCreateOne,
  courseUpdateOne,
  courseGetOne,
  imgUploadOne,
  imgCreateOne,
  imgGetList,
  imgGetOne,
  imgUpdateOne,
  imgDeleteOne,
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
