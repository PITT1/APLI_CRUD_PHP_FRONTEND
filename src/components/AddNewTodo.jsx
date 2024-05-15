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
            {isClicked && <div className="bg-slate-700 rounded-full my-3">
                            <input type="text" placeholder="Escriba alguna tarea" className="text-2xl py-3 px-6 bg-transparent outline-none text-white"/>
                            <button className="text-2xl py-3 px-3 rounded-full bg-orange-600 hover:bg-orange-500 transition-all">Agregar</button>
                          </div>
            }
            <button onClick={hanleClick} type="button" className="text-3xl px-10 text-center rounded-full text-white bg-slate-500 hover:scale-110 transition-all hover:text-black hover:bg-orange-600">+</button>
        </div>
    )
}

export default AddNewTodo;