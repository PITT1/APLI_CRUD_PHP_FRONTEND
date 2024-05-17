import { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";
import DeleteTodo from "./DeleteTodo";


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
    <div className="flex justify-center">
      <h1 className="text-white text-center bg-slate-700 cursor-default w-2/5 rounded-b-full text-2xl font-medium">Tu lista de tareas</h1>
    </div>
      <ul className="flex flex-col items-center">
        {todoList.map((tarea, index) => (
          <li
            key={index}
            className="text-slate-800 font-semibold text-2xl pl-8 my-2 bg-slate-500 rounded-full cursor-default hover:scale-110 transition-all hover:bg-slate-100"
          >
            {tarea}<DeleteTodo/>
          </li>
        ))}
      </ul>
      <AddNewTodo onUpdate={isUpdate}/>
    </>
  );
};

export default TodoBox;