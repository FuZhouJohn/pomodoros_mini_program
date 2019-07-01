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
    },
    content: {
      type: String,
      value: ""
    },
    canClose:{
      type:Boolean,
      value:true
    }
  },
  data: {
  },
  methods: {
    closeConfirm: function() {
      if(this.data.canClose){
        this.setData({
          visible: false
        }, function () {
          this.triggerEvent('close', this.data.content)
        })
      }
      
    },
    inputContent: function(e) {
      this.triggerEvent('input', e)
    },
    ok: function() {
      this.triggerEvent('ok')
    },
    cancel:function(){
      this.triggerEvent('cancel')
    }
  }
})