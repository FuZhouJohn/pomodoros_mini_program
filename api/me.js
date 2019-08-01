const {
  http
} = require('../lib/http.js')

export function fetchPomodoros(){
  return http.get('/tomatoes', { is_group: "yes" })
}
export function fetchTodos(){
  return http.get('/todos', { is_group: "yes" })
}