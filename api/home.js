const {
  http
} = require('../lib/http.js')

export function unCompletedTodo() {
  return http.get('/todos', {
    completed: false
  })
}

export function completedTodo() {
  return http.get('/todos', {
    completed: true
  })
}

export function allCompletedTodo() {
  return http.get('/todos')
}