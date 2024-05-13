import { useEffect, useState } from "react"


const TodoBox = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const urlString = window.location.href;
    const url = new URL(urlString);
    const user = url.searchParams.get("user");

    fetch(`http://localhost/myapi/my-api.php/todos/${user}`)
      .then(res => res.json())
      .then(todos => {
        setTodoList(todos.map(tareas => tareas.contenido));
      });
  }, []);

  return (
    <section>
      {todoList.map((tarea, index) => <li key={index} className="text-white">{tarea}</li>)}
    </section>
  );
};

export default TodoBox;