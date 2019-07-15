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

export {
  articleGetList,
  articleCreateOne,
  articleUpdateOne,
  articleGetOne,
  imgCreateOne,
  imgGetList,
  imgGetOne,
  imgUpdateOne
}
