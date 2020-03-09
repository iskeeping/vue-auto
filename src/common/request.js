/**
 * http封装请求
 */
import axios from 'axios'

// 超时时间
axios.defaults.timeout = 3000
// http请求拦截器
axios.interceptors.request.use(config => {
  return config
}, error => {
  return Promise.reject(error)
})

let erorrMap = {
  0: '成功',
  401: '未登录'
}

// http响应拦截器
axios.interceptors.response.use(res => {
  let code = res.data.code
  if (code === 0) {
    // console.log('ok')
  } else if (code === 401) {
    window.APP.$router.push('/login')
  } else if (erorrMap[code]) {
    //erorrMap[code]
  } else {
    //'未知错误'
    //'未知错误'
  }

  return res
}, async (error) => {
  if (error.request) {
    if (error.request.status === 0) {
      //超时
    }
  } else if (error.response) {
    if (error.response.status === 400) {
      // 请求没返回数据
    } else if (error.response.status === 404) {
      //未找到资源
    } else if (error.response.status === 401) {
      //'请先登录'
    } else if (error.response.status === 500) {
      //'服务器异常'
    }
  }
  return Promise.reject(error)
})

let request = (config) => {
  let jwtToken = localStorage.getItem('jwt-token')
  axios.defaults.headers.common['authorization'] = jwtToken ? 'Bearer ' + jwtToken : ''
  return axios.request(
    Object.assign(
      {
        method: 'post',
        data: {},
        params: {}
      },
      config
    )
  )
}

export default request
