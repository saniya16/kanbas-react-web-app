import React, { useState, useEffect } from "react";
import axios from "axios";

interface Todo{
    id:number;
    title:string;
    description:string;
    due:string;
    completed:boolean;
}
function WorkingWithArrays() {
    const [errorMessage, setErrorMessage] = useState(null);
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState({id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });
  const [todos, setTodos] = useState<Todo[]>([]);

  const postTodo = async () => {
    const response = await axios.post(API, todo);
    setTodos([...todos, response.data]);
  };

  const deleteTodo = async (todo: { id: number; }) => {
    try{
        const response = await axios.delete(`${API}/${todo.id}`);
        setTodos(todos.filter((t) => t.id !== todo.id));
    }
    catch(error:any){
        console.log(error);
      setErrorMessage(error.response.data.message);

    }
   
  };

  const updateTodo = async () => {
    try{
        const response = await axios.put(`${API}/${todo.id}`, todo);
    setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
    }
    catch(error:any){
        console.log(error);
      setErrorMessage(error.response.data.message);

    }
    
  };



  
  const fetchTodos = async () => {
  const response = await axios.get(API);
    setTodos(response.data);
  };
  const removeTodo = async (todo: { id: any; }) => {
    const response = await axios
      .get(`${API}/${todo.id}/delete`);
    setTodos(response.data);
  };

  const createTodo = async () => {
    const response = await axios.get(`${API}/create`);
    setTodos(response.data);
  };
  const fetchTodoById = async (id: any) => {
    const response = await axios.get(`${API}/${id}`);
    setTodo(response.data);
  };
  const updateTitle = async () => {
    const response = await axios.get(`${API}/${todo.id}/title/${todo.title}`);
    setTodos(response.data);
  };




  useEffect(() => {
    fetchTodos();
  }, []);

    return (
      <div>
        <h3>Working with Arrays</h3>
        <h4>Retrieving Arrays</h4>
        <a className="btn btn-primary" href={API}>
          Get Todos
        </a>
        <h4>Retrieving an Item from an Array by ID</h4>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
      <a className="btn btn-primary me-2"href={`${API}/${todo.id}`}>
        Get Todo by ID
      </a>

      <h3>Filtering Array Items</h3>
  <a className="btn btn-primary"href={`${API}?completed=true`}>
    Get Completed Todos
  </a>
  <h3>Creating new Items in an Array</h3>
  <a className="btn btn-primary" href={`${API}/create`}>
    Create Todo
  </a>
  <h3>Deleting from an Array</h3>
  <input type="number" value={todo.id}
        onChange={(e) => setTodo({
          ...todo, id: parseInt(e.target.value) })}/>
      <br/>
      <br/>
      <a className="btn btn-primary" href={`${API}/${todo.id}/delete`}>
        Delete Todo with ID = {todo.id}
      </a>

      <br/>
      <br/>

      <h3>Updating an Item in an Array</h3>
      <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
          <br/>
      <br/>
      <a className="btn btn-primary" href={`${API}/${todo.id}/title/${todo.title}`} >
        Update Title to {todo.title}
      </a>

      <h3>Updating Todo Description </h3>
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
          <br/>

      <input type="text" value={todo.description}
        onChange={(e) => setTodo({
          ...todo, description: e.target.value })}/>
          <br/>
      <br/>
      <a className="btn btn-primary me-2" href={`${API}/${todo.id}/description/${todo.description}`} >
        Update Description to {todo.description}
      </a>

      <h3>Updating Todo Status </h3>

      <input
        type="checkbox"
        onChange={(e) =>
          setTodo({ ...todo, completed: !todo.completed })
        }
      />
      <input value={todo.id}
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
          <br/>
      <br/>
      <a className="btn btn-primary me-2" href={`${API}/${todo.id}/completed/${todo.completed}`} >
        Update Completed {todo.description}
      </a>

    


     
     

     
      <ul>
        <br/>


      <input value={todo.id} readOnly
        onChange={(e) => setTodo({ ...todo,
          id: parseInt(e.target.value) })}/>
          <br/>

     <input type="text" value={todo.title}
        onChange={(e) => setTodo({
          ...todo, title: e.target.value })}/>
           
      <br/>
      <textarea value={todo.description}
        onChange={(e) => setTodo({ ...todo,
          description: e.target.value })} />
           <br/>
      <input value={todo.due} type="date"
        onChange={(e) => setTodo({
          ...todo, due: e.target.value })} />
          <br/>
      <label>
        <input checked={todo.completed} type="checkbox"
          onChange={(e) => setTodo({
            ...todo, completed: e.target.checked })} />
        Completed
      </label>
      <br/>
      <button className="btn btn-warning me-2" onClick={postTodo}> Post Todo </button>
      <br/>
      <button className="btn btn-success"onClick={updateTodo}>
        Update Todo
      </button>
      <br/>
      

      
      <button className="btn btn-primary"onClick={createTodo} >
        Create Todo
      </button>
      <br/>
      
      
      <button className="btn btn-success"onClick={updateTitle} >
        Update Title
      </button>
      <br/>
      <br/>

      
      {errorMessage && (
        <div className="alert alert-danger mb-2 mt-2">
          {errorMessage}
        </div>
      )}

  {todos.map((todo) => (
    <li key={todo.id} >
      
      <input checked={todo.completed}
              type="checkbox" readOnly />
            {todo.title}
            <p>{todo.description}</p>
            <p>{todo.due}</p>
            <button onClick={() => deleteTodo(todo)}
    className="btn btn-danger float-end me-2">
    Delete
  </button>
 
      <button className="btn btn-danger me-2 mb-1" onClick={() => removeTodo(todo)} >
          Remove
        </button>

        <button className="btn btn-warning me-2 mb-1" onClick={() => fetchTodoById(todo.id)} >
          Edit
        </button>
        <br/>
    </li>
  ))}
</ul>
      </div>
    );

  }
  export default WorkingWithArrays;