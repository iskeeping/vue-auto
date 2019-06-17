import request from './request'
import * as url from './url'

let login = function () {
  request({
    url: url.login,
    nextCallback: function () {

    }
  })
}
export {
  login
}
