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

// http响应拦截器
axios.interceptors.response.use(res => {
  let code = res.data.code
  if (code === 1) {
    // console.log('ok')
  } else if (code === 401) {
    window.APP.$router.push('/login')
  } else {
    window.APP.$notify.error({
      title: '错误',
      message: res.data.err.info
    });
  }

  return res
}, async (error) => {
  if (error.request.status === 0) {
    //超时
  } else if (error.response.status === 400) {
    // 请求没返回数据
  } else if (error.response.status === 404) {
    //未找到资源
  } else if (error.response.status === 401) {
    debugger
    //'请先登录'
    window.APP.$router.push('/login')
  } else if (error.response.status === 500) {
    //'服务器异常'
  }
  return Promise.reject(error)
})

let request = (config) => {
  let jwtToken = localStorage.getItem('jwt-token')
  axios.defaults.headers.common['authorization'] = jwtToken ? 'Bearer ' + jwtToken : ''
  return axios.request(
    config || {}
  )
}

export default request
