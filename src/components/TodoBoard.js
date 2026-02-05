import React from "react";
import TodoItem from "./TodoItem";

const TodoBoard = ({ todoList, removeTask, completedTask }) => {
  console.log("TodoBoard", todoList);

  return (
    <div>
      <h2>Todo List</h2>
      {todoList.length > 0 ? (
        todoList.map((item, idx) => (
          <TodoItem key={idx} item={item} removeTask={removeTask} completedTask={completedTask} />
        ))
      ) : (
        <h2>There is no Item to show</h2>
      )}
    </div>
  );
};

export default TodoBoard;
