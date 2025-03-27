import { Alert } from "bootstrap";
import React from "react";

const TodoIteams = ({ todos, deleteHandler,  }) => {


  return (
    <div>
      {todos.map((todo) => (
        <div key={todo.id}>
          <h2>
            {todo.todoTask}
            <button
              onClick={() => {
                deleteHandler(todo.id,) }}>DELETE </button>
          </h2>
        </div>
      ))}
    </div>
  );
};

export default TodoIteams;
