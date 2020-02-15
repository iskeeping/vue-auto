import axios from 'axios'
import routerPath from '@/router/routerPath'

let request = (
  {
    url,
    method = 'get',
    data = {},
    params = {},
    nextCallback = function () {
    }
  }
) => {
  axios({
    url: url,
    method: method,
    data: data,
    params: params,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
      authorization: 'Bearer ' + localStorage.getItem('jwt-token')
    }
  }).then(res => {
    // res期望返回的数据结构是{code:0/-1,data:{}/[]}

    if (res.data.code === 2) {
      window.app.$router.push(routerPath.loginPath)
      localStorage.removeItem('token')
    }
    nextCallback(res)

  }).catch((err) => {
    nextCallback(
      {
        data: {
          code: 1,
          err
        }
      }
    )
  })
}

export default request



