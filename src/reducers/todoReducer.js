import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "../actions/types";

const initialState = {
  todoList: [],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    case EDIT_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    case DELETE_TODO:
      return {
        ...state,
        todoList: action.payload,
      };
    default:
      return state;
  }
}
