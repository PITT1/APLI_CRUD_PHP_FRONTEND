import { useEffect } from "react"


const TodoBox = () => {

    useEffect(() => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        const user = url.searchParams.get("user");
        fetch(`http://localhost/myapi/my-api.php/user/todos/${user}`)
        .then(res => res.json())
        .then(todos => console.log(todos))
    },[]);

    return(
        <section>
            <h1>tareas</h1>
        </section>
    )
}

export default TodoBox;