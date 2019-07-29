const {
  http
} = require('../../lib/http.js')
const {
  app_id,
  app_secret
} = getApp().globalData
// url: /sign_in/mini_program_user
// data: { code, iv, encrypted_data, app_id, app_secret }
// method: post
Page({
  data: {

  },
  onReady: function(options) {
    
  },
  login: function(e) {
    console.dir(e)
    let iv = e.detail.iv
    let encrypted_data = e.detail.encryptedData
    this.wxLogin(iv, encrypted_data)
  },
  wxLogin(iv, encrypted_data) {
    wx.login({
      success: res => {
        if (res.code) {
          this.signInUser(res.code, iv, encrypted_data)
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  },
  signInUser(code, iv, encrypted_data) {
    wx.showLoading({
      title: '登录中...',
    })
    http.post('/sign_in/mini_program_user', {
        code,
        iv,
        encrypted_data,
        app_id,
        app_secret
      })
      .then(response => {
        this.saveInformation(response)
        wx.reLaunch({
          url: '/pages/home/home'
        })
      })
      .catch(error=>{
      })
  },
  saveInformation(response) {
    wx.setStorageSync('me', response.data.resource)
    wx.setStorageSync("X-token", response.header['X-token'])
  }
})