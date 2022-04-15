import ToDo from "@/components/Interface/toto";

// 获取todo
export function getStorage(token: string): ToDo[] {
  return JSON.parse(window.localStorage.getItem(token) || "[]");
}

// 保存todo
export function setStorage(todo: ToDo[], token: string) {
  return window.localStorage.setItem(token, JSON.stringify(todo));
}
