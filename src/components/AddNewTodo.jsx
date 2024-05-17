import { useState } from "react";

const AddNewTodo = ({ onUpdate }) => {
    const [isClicked, setIsClicked] = useState(false);
    const [todo, setTodo] = useState("");

    const hanleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    const dataJson = {
        "todo": todo
    }

    const configPOST = {
        "method": 'POST',
        "headers": {
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(dataJson),
    }

    const addTodo = () => {
        const urlString = window.location.href;
        const url = new URL(urlString);
        const user = url.searchParams.get("user");
        fetch(`http://localhost/myapi/my-api.php?action=addtodo&user=${user}`, configPOST)
        .then(res => res.json())
        .then(data => console.log(data))
        setTodo("");

        onUpdate();
        setTimeout(onUpdate, 50);
    }

    return(
        <div className="flex flex-col items-center pt-5">
            {isClicked && <div className="bg-slate-700 rounded-full my-3">
                            <input value={todo} onChange={event => setTodo(event.target.value)} type="text" placeholder="Escriba alguna tarea" className="text-2xl py-3 px-6 bg-transparent outline-none text-white"/>
                            <button onClick={addTodo} className="text-2xl py-3 px-3 rounded-full bg-orange-600 hover:bg-orange-500 transition-all">Agregar</button>
                          </div>
            }
            <button onClick={hanleClick} type="button" className="text-3xl px-10 text-center rounded-full text-white bg-slate-500 hover:scale-110 transition-all hover:text-black hover:bg-orange-600">+</button>
        </div>
    )
}

export default AddNewTodo;