const {
  http
} = require('../../lib/http.js')
Page({
  data: {
    username: '',
    password: ''
  },
  onLoad: function(options) {

  },
  usernameInput: function(e) {
    this.data.username = e.detail.value
  },
  passwordInput: function(e) {
    this.data.password = e.detail.value
  },
  bindingAccount() {
    // if (this.data.username.trim() === '' || this.data.password.trim() === ''){
    //   wx.showToast({
    //     title: '用户名或密码不能为空',
    //     icon:'none'
    //   })
    //   return 
    // }
    http.post('/bindings', {
      account: this.data.username,
      password_digest: this.data.password
    })
    .then(res=>{
      wx.setStorageSync('me', res.data.resource)
      wx.navigateBack({
        
      })
    })
  },
  onReady: function() {

  },
  onShow: function() {

  },
  onHide: function() {

  },
  onUnload: function() {

  },
  onPullDownRefresh: function() {

  },
  onReachBottom: function() {

  },
  onShareAppMessage: function() {

  }
})