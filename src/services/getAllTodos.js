import http from './httpServices';

export function getAllTodos() {
  return http.get('/todos');
}
