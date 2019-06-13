// components/confirm/confirm.js
Component({
  properties: {
    visible: {
      type: Boolean,
      value: false
    },
    basic: {
      type: Boolean,
      value: false
    },
    placeholder: {
      type: String,
      value: ""
    }
  },
  data: {

  },
  methods: {
    closeConfirm: function() {
      this.setData({
        visible: false
      })
    },
    stopBubble: function() {}
  }
})