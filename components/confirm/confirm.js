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
    content: ""
  },
  methods: {
    closeConfirm: function() {
      this.setData({
        content: "",
        visible: false
      })
    },
    stopBubble: function() {},
    inputContent: function(e) {
      this.data.content = e.detail.value
    },
    ok: function() {
      this.triggerEvent('tapOK', this.data.content)
    }
  }
})