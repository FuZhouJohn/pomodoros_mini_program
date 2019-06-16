const {
  host,
  t_app_id,
  t_app_secret
} = getApp().globalData
const _http = (url, data, method) => {
  return new Promise((reslove, reject) => {
    wx.request({
      url: `${host}${url}`,
      data,
      header: {
        Authorization: `Bearer ${wx.getStorageSync('X-token')}`,
        "t-app-id": t_app_id,
        "t-app-secret": t_app_secret
      },
      method,
      dataType: 'json',
      success: (response) => {
        let statusCode = response.statusCode
        if (statusCode >= 400) {
          reject({
            statusCode,
            data: response.data
          })
        } else {
          reslove(response)
        }
      },
      fail:(error)=>{
        wx.showToast({
          title: '请求失败',
          icon:'none'
        })
        reject(error)
      }
    })
  })
}

const http = {
  get: (url, params) => _http(url, params, 'GET'),
  post: (url, params) => _http(url, params, 'POST'),
  put: (url, params) => _http(url, params, 'PUT'),
  delete: (url, params) => _http(url, params, 'DELETE')
}

module.exports = {
  http
}