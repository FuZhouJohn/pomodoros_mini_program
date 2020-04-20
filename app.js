App({
  onLaunch: function () {

  },
  onShow:function(){
    wx.setKeepScreenOn({
      keepScreenOn: true
    })
  },
  globalData: {
    host: 'https://gp-server.hunger-valley.com',
    app_id: "wxd984218381ed0ced",
    app_secret: "ba249a25c2a9950dbd08d8039b0d47eb",
    t_app_id: "T4gJ2hLVAta56Fgx9rUjsYR5",
    t_app_secret: "FAA5K41SBAX53o5Gj9xdr7qP"
  }
})