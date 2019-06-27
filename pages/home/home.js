const {
  http
} = require('../../lib/http.js') 
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
    http.get('/todos')
    .then(res=>{
      console.log(res)
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