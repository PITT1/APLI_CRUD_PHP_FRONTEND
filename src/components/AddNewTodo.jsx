import { useState } from "react";

const AddNewTodo = () => {
    const [isClicked, setIsClicked] = useState(false);

    const hanleClick = () => {
        if (!isClicked) {
            setIsClicked(true);
        } else {
            setIsClicked(false);
        }
    }

    return(
        <div className="flex flex-col items-center pt-5">
            {isClicked && <div>
                            <input type="text" placeholder="Escriba alguna tarea"/>
                            <button>Agregar</button>
                          </div>
            }
            <button onClick={hanleClick} type="button" className="text-3xl px-10 text-center rounded-full text-white bg-slate-500 hover:scale-110 transition-all hover:text-black hover:bg-orange-600">+</button>
        </div>
    )
}

export default AddNewTodo;