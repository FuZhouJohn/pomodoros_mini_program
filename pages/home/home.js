const {
  http
} = require('../../lib/http.js')

Page({

  data: {
    time: '25:00',
    visible: true,
    toDoList: [],
    visible: false
  },

  onLoad: function(options) {
    http.get("/todos")
      .then(response => {
        this.setData({
          toDoList: response.data.resources
        })
      })
  },
  openConfirm() {
    this.setData({
      visible: true
    })
  },
  addTodo(e) {
    if(e.detail.trim()===''){
      return
    }
    let description = e.detail
    http.post("/todos", {
        description
      })
      .then(response => {
        let newTodo = response.data.resource
        this.data.toDoList.unshift(newTodo)
        this.setData({
          toDoList: this.data.toDoList,
          visible: false
        })
        this.selectComponent("#confirm1").setData({
          content: ""
        })
      })
  },
  completeTodo(e) {
    let index = e.currentTarget.dataset.index
    http.put(`/todos/${this.data.toDoList[index].id}`, {
        completed: !this.data.toDoList[index].completed,
        description: this.data.toDoList[index].description
      })
      .then(response => {
        this.setData({
          [`toDoList[${index}].completed`]: !this.data.toDoList[index].completed
        })
      })
    this.data.toDoList[index]
  },
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1
      })
    }
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