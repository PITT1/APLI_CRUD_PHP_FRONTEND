import { useEffect, useState } from "react"


const TodoBox = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const user = url.searchParams.get("user");

    fetch(`http://localhost/myapi/my-api.php/todos/${user}`)
      .then((res) => res.json())
      .then((todos) => {
        setTodoList(todos.map((tareas) => tareas.contenido));
      });
  }, []);

  return (
    <>
    <h1 className="text-white text-center text-2xl font-medium">Tu lista de tareas</h1>
      <ul className="flex flex-col items-center">
        {todoList.map((tarea, index) => (
          <li
            key={index}
            className="text-slate-800 font-semibold text-2xl py-4 px-4 my-2 bg-slate-400 rounded-full cursor-default"
          >
            {tarea}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoBox;