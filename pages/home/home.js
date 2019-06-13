let ms = 1500000
let id = null
Page({

  data: {
    time: '25:00',
    visible: true,
    toDoList: [{
        id: 1,
        content: 'wahahahdasdasdasdasdasddddddddddddddddddddddddddddddasd',
        completed: false
      },
      {
        id: 2,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 3,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 4,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 5,
        content: 'wahahahd',
        completed: false
      }, {
        id: 1,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 2,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 3,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 4,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 5,
        content: 'wahahahd',
        completed: false
      }, {
        id: 1,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 2,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 3,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 4,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 5,
        content: 'wahahahd',
        completed: false
      }, {
        id: 1,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 2,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 3,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 4,
        content: 'wahahahd',
        completed: false
      },
      {
        id: 5,
        content: 'wahahahd',
        completed: false
      },
    ]
  },

  onLoad: function(options) {

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

  },
  test: function() {
    // wx.vibrateLong()
    // id = setInterval(() => {
    //   ms = ms - 1000
    //   this.setData({
    //     time: this.formatDuring(ms)
    //   })
    //   if (ms <= 0) {

    //     clearInterval(id)
    //   }
    // }, 1000)
    this.setData({
      visible: true
    })
  },
  formatDuring: function(mss) {
    var days = parseInt(mss / (1000 * 60 * 60 * 24));
    var hours = parseInt((mss % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = parseInt((mss % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = (mss % (1000 * 60)) / 1000;
    return minutes + ":" + this.addZero(seconds) + "";
  },
  addZero: function(num) {    
    if (parseInt(num) < 10) {        
      num = '0' + num;    
    }    
    return num;
  }
})