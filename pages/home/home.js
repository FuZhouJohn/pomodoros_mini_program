const {
  unCompletedTodo,
  completedTodo,
  allCompletedTodo
} = require('../../api/home.js')

Page({

  data: {
    time: '25:00',
    visible: true,
    toDoList: [],
    visible: false,
    content: '',
    show: false
  },

  onLoad: function(options) {
    allCompletedTodo()
      .then(response => {
        this.setData({
          toDoList: response.data.resources,

        })
      })
  },
  onClose: function() {
    this.setData({
      show: false
    })
  },
  openConfirm() {
    this.setData({
      visible: true
    })
  },
  todoInput: function(e) {
    this.setData({
      content: e.detail.detail.value
    })
  },
  addTodo(e) {
    if (this.data.content.trim() === '') {
      wx.showToast({
        icon: 'none',
        title: '请输入任务内容'
      })
      return
    }
    let description = this.data.content.trim()
    http.post("/todos", {
        description
      })
      .then(response => {
        let newTodo = response.data.resource
        this.data.toDoList.unshift(newTodo)
        this.setData({
          toDoList: this.data.toDoList,
          visible: false,
          content: ""
        })
      })
  },
  updateTodo: function() {
    let index = this.data.todoIndex
    let todo = this.data.toDoList[index]
    let description = this.data.content.trim()
    if (description === '') {
      wx.showToast({
        icon: 'none',
        title: '请输入任务内容'
      })
      return
    }
    http.put(`/todos/${todo.id}`, {
        completed: todo.completed,
        description: description
      })
      .then(res => {
        let newTodo = res.data.resource
        this.setData({
          [`toDoList[${index}].description`]: newTodo.description,
          content: '',
          visible: false
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
        if (response.data && response.data.resource && response.data.resource.hasOwnProperty("completed")) {
          this.setData({
            [`toDoList[${index}].completed`]: response.data.resource.completed
          })
        }

      })
    this.data.toDoList[index]
  },
  onShow() {
    this.getTabBar().init();
    this.setData({
      show:true
    })
  },
  todoDetail: function(e) {
    let index = e.currentTarget.dataset.index
    let todo = this.data.toDoList[index]
    this.setData({
      content: todo.description,
      todoIndex: index,
      visible: true
    })
  },
  closeConfirm: function() {
    this.setData({
      content: '',
      todoIndex: null
    })
  }

})