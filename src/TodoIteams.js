import React from "react";

const TodoIteams = ({ todos, deleteHandler }) => {
    return (
        <div>
            {todos.map((todo, index) => (
                <div key={index}>
                    <h2>{todo} <button onClick={() => deleteHandler(index)}>DELETE</button></h2>
                </div>
            ))}
        </div>
    );
};

export default TodoIteams;
