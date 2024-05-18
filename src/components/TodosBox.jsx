import { useEffect, useState } from "react";
import AddNewTodo from "./AddNewTodo";
import DeleteTodo from "./DeleteTodo";

const TodoBox = () => {
  const [todoList, setTodoList] = useState([]);
  const [update, setUpdate] = useState(1);

  const isUpdate = () => {
    setUpdate(prev => prev + 1);
  }

  const finishedTodo = (taskIndex) => {
    let updatedTodoList = [...todoList];
    updatedTodoList[taskIndex].listo =!updatedTodoList[taskIndex].listo;
    setTodoList(updatedTodoList);
    const urlString = window.location.href;
    const url = new URL(urlString);
    const user = url.searchParams.get("user");
    const urlindex = taskIndex - 1;
    fetch(`http://localhost/myapi/my-api.php?action=putlisto&taskindex=${urlindex}&user=${user}`, {"method":'PUT'})
    .then(res => res.json())
    .then(data => console.log(data.message))
  };

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const user = url.searchParams.get("user");

    fetch(`http://localhost/myapi/my-api.php/todos/${user}`)
   .then((res) => res.json())
   .then((todos) => {
        const initialTodos = todos.map(tarea => ({
         ...tarea,
          listo: tarea.listo === 'hecho'
        }));
        
        setTodoList(initialTodos);
      });
  }, [update]);

  return (
    <>
      <div className="flex justify-center">
        <h1 className="text-white text-center bg-slate-700 cursor-default w-2/5 rounded-b-full text-2xl font-medium">
          Tus publicaciones
        </h1>
      </div>
      <ul className="flex flex-col items-center transition-all">
        {todoList.map((tarea, index) => (
          <div className="flex">
            {tarea.listo && <div className="text-white z-10 h-8 px-2 rounded-full bg-green-600 text-2xl">✔</div>}
            <li
              key={index}
              className="text-slate-800 font-semibold text-2xl pl-8 my-2 bg-slate-500 rounded-full cursor-pointer hover:scale-110 transition-all hover:bg-slate-100"
              onClick={() => finishedTodo(index)}
            >
              {tarea.contenido}
              <DeleteTodo keyIndex={index} onUpdate={isUpdate} />
            </li>
          </div>
        ))}
      </ul>
      <AddNewTodo onUpdate={isUpdate} />
    </>
  );
};

export default TodoBox;