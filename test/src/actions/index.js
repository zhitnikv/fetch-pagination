export const GET_TODOS = 'GET_TODOS';

export function getTodos(todos) {
  return {
    type: GET_TODOS,
    todos
  };
}