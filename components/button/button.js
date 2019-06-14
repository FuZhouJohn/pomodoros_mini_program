Component({
  properties: {
    text: {
      type: String,
      value: ''
    },
    size: {
      type: String,
      value: ''
    },
    type: {
      type: String,
      value: 'default'
    }
  },
  data: {

  },
  methods: {
    onTap:function(){
      this.triggerEvent('ptap')
    }
  }
})