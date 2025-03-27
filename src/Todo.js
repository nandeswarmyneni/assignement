import { useState, } from "react";
import TodoIteams from "./TodoIteams";
import "./App.css";
import axios from "axios";

const Todolist = () => {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     fetchTodos();
//   }, []);

//   const fetchTodos = () => {
//     axios
//       .get("http://localhost:8080/ToDoIteams/getAllTodos") 
//       .then((response) => {
//         setTodos(response.data);
//       })
     
//   };

  const changeHandler = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (task.trim() === "") return;
    axios
      .post("http://localhost:8080/ToDoIteams/saveTodoTask", {
        todoTask: task,
      })
      .then((response) => {
        setTodos([...todos, response.data]);
        setTask("");
      })
      
  };

  const deleteHandler = (id) => {
    axios
      .delete(`http://localhost:8080/ToDoIteams/deletTodo/${id}`)
      .then(() => {
        setTodos(todos.filter((todo) => todo.id !== id));
    
      })
     
  };


 

  return (
    <div className="container">
      <h1>Things To Do Daily</h1>
      <form onSubmit={submitHandler}>
        <input type="text" placeholder="Enter Your Things To Do" value={task} onChange={changeHandler}/>
        <button type="submit">ADD</button>
      </form>
      <TodoIteams todos={todos} deleteHandler={deleteHandler}  />
    </div>
  );
};

export default Todolist;
