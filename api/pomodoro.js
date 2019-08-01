const {
  http
} = require('../lib/http.js')

export function addPomodoro(){
  return http.post('/tomatoes')
}

export function updatePomodoro(id,params){
  return http.put(`/tomatoes/${id}`,params)
}