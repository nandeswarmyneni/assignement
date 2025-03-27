import { useState,useEffect } from "react";
import TodoIteams from "./TodoIteams";
import "./App.css";

const Todolist = () => {
    const [task, setTask] = useState("");
    const [todos, setTodos] = useState([]);

     useEffect(() => {
        const storedTodos = localStorage.getItem("todos");
        setTodos(storedTodos ? JSON.parse(storedTodos) : []);
      }, []);

       
      useEffect(()=>{
        localStorage.setItem("todos",JSON.stringify(todos));
      },[todos]);

    const changeHandler = e => {
        setTask(e.target.value);
    };

    const submitHandler = e =>{
        e.preventDefault();
        const newTodos = [...todos,task];
        setTodos(newTodos);
        setTask("");
    };

    const deleteHandler = (indexValue) => {
        const newTodos = todos.filter((_todo, index) => index !== indexValue); 
        setTodos(newTodos);
    };


    return (
        
        <div className="container">
            <h1>Things To Do Daily</h1>
            <form onSubmit={submitHandler}>
                <input type="text" placeholder="Enter Your Things To Do" value={task} onChange={changeHandler} />
                <button type="submit">ADD</button>
            </form>
            <TodoIteams todos={todos} deleteHandler={deleteHandler} />
        </div>
        
    );
};

export default Todolist;
