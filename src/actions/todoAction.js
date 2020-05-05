import { ADD_TODO, EDIT_TODO, DELETE_TODO } from "./types";
// ADD TODO
export const addTodo = (newTodo) => {
  return {
    type: ADD_TODO,
    payload: newTodo,
  };
};

export const editTodo = (data) => {
  return {
    type: EDIT_TODO,
    payload: data,
  };
};
export const deleteTodo = (data) => {
  return {
    type: DELETE_TODO,
    payload: data,
  };
};
