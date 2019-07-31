// pages/me/me.js
// const {
//   http
// } = require('../../lib/http.js')
import { fetchPomodoros, fetchTodos } from "../../api/me.js";
Page({
    data: {
        current: 0,
        activeTab: "left",
        data: [],
        pomodoros: {},
        todos: {}
    },
    clickTab: function(e) {
        this.changeActive(e.currentTarget.dataset.index);
    },
    changeActive: function(index) {
        if (index === 0) {
            this.setData({
                activeTab: "left",
                current: index
            });
        } else {
            this.setData({
                activeTab: "right",
                current: index
            });
        }
    },
    changePane: function(e) {
        if (e.detail.source === "touch") {
            this.changeActive(e.detail.current);
        }
    },
    onShow: function() {
        wx.showNavigationBarLoading();
        Promise.all([fetchPomodoros(), fetchTodos()]).then(value => {
            let pomodoros = value[0].data.resources;
            let todos = value[1].data.resources;
            for (let todo in todos) {
                todos[todo] = todos[todo].filter(item => item.completed);
            }
            this.setData(
                {
                    pomodoros,
                    todos
                },
                function() {
                    wx.hideNavigationBarLoading();
                }
            );
        });
    }
});
