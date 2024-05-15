import { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";


const TodoBox = () => {
  const [todoList, setTodoList] = useState([]);
  const [update, setUpdate] = useState(1);

  const isUpdate = () => {
    setUpdate(prev => prev + 1);
  }

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const user = url.searchParams.get("user");

    fetch(`http://localhost/myapi/my-api.php/todos/${user}`)
      .then((res) => res.json())
      .then((todos) => {
        setTodoList(todos.map((tareas) => tareas.contenido));
      });
  }, [update]);

  return (
    <>
    <h1 className="text-white text-center text-2xl font-medium">Tu lista de tareas</h1>
      <ul className="flex flex-col items-center">
        {todoList.map((tarea, index) => (
          <li
            key={index}
            className="text-slate-800 font-semibold text-2xl py-4 px-9 my-2 bg-slate-400 rounded-full cursor-default"
          >
            {tarea}
          </li>
        ))}
      </ul>
      <AddNewTodo onUpdate={isUpdate}/>
    </>
  );
};

export default TodoBox;