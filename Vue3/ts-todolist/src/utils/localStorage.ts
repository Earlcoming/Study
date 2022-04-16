import Todo from '@/hooks/Todo'

export function setStorage (todo: Todo[], token: string) {
  return window.localStorage.setItem(token, JSON.stringify(todo))
}

export function getStorage (token: string) {
  return JSON.parse(window.localStorage.getItem(token) || '[]')
}
