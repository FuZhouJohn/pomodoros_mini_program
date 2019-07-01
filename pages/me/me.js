// pages/me/me.js
const {
  http
} = require('../../lib/http.js')
Page({
  data: {
    current: 0,
    activeTab: 'left',
    data: [],
    pomodoros:{},
    todos:{}
  },
  clickTab: function(e) {
    this.changeActive(e.currentTarget.dataset.index)
  },
  changeActive: function(index) {
    if (index === 0) {
      this.setData({
        activeTab: 'left',
        current: index
      })
    } else {
      this.setData({
        activeTab: 'right',
        current: index
      })
    }
  },
  changePane: function(e) {
    if (e.detail.source === 'touch') {
      this.changeActive(e.detail.current)
    }
  },
  onShow: function() {
    if (typeof this.getTabBar === 'function' &&
      this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2
      })
    }
    this.fetchPomodoros()
    this.fetchTodos()
  },
  fetchPomodoros:function(){
    http.get('/tomatoes', { is_group: "yes" })
    .then(res=>{
      this.setData({
        pomodoros:res.data.resources
      })
    })
  },
  fetchTodos: function () {
    http.get('/todos', { is_group: "yes" })
      .then(res => {
        this.setData({
          todos: res.data.resources
        })
      })
   }
})