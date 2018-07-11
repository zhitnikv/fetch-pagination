import { GET_TODOS } from '../actions';

export default function reducer(state= [], action) {
  switch (action.type) {
    case GET_TODOS:
      return action.todos;
    default:
      return state;
  }
}