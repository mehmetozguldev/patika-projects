import { useState } from 'react'

export default function App() {

  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    setTodoList([...todoList, { todoName: todo }]);
    setTodo("");
  }

  const deleteTodo = (deleteValue) => {
    const restTodoList = [
      ...todoList.filter((val) => {
        return val.todoName !== deleteValue;
      }),
    ];
    setTodoList(restTodoList);
  }

return (
  <div className="bg-indigo-950 w-full h-screen flex items-center">
    <div className="w-[500px] mx-auto text-center bg-indigo-900 p-5">
      <h1 className="text-indigo-100 text-3xl mb-5">To do list</h1>
      <form onSubmit={handleForm}>
        <input
          type="text"
          className="rounded-lg border-1 p-3 w-full mb-4 border-violet-200"
          placeholder="Write a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit" className="rounded-lg px-4 py-2 w-full mb-4 text-indigo-100 bg-violet-600">Add Task</button>

      </form>
      <ul>
        {todoList.map((singleTodo, index) => {
          return (
            <li key={index} className="bg-indigo-950 mb-1 flex justify-between text-indigo-50 p-3 rounded-lg">
              {singleTodo.todoName}{" "}
              <span onClick={() => deleteTodo(singleTodo.todoName)} className="cursor-pointer" >X</span>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
);
}