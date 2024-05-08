import { useState } from "react";
import "../styles/style.css";

const Login = () => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const dataJson = {
        "username": userName,
        "contraseña": password
    }

    const configGET = {
        "method": 'GET',
        "headers": {
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(dataJson),
    }

    const sendForm = () => {
        fetch("http://localhost/myapi/my-api.php", configGET)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return(
        <div className="flex flex-col text-center backdrop-blur-sm py-24 px-10 rounded-3xl">
            <h1 className="cursor-default mb-8 text-white text-4xl tracking-widest">Bienvenido</h1>
            <div className="flex border-b-2 transition-all mb-4">
                <span className="userIcon"></span>
                <input type="text" placeholder="Nombre de usuario" value={userName} onChange={event => setUserName(event.target.value)} className="px-5 bg-transparent outline-none text-2xl text-white "/>  
            </div>
            <div className="flex border-b-2 transition-all mb-4">
                <span className="passwordIcon"></span>
                <input type="password" placeholder="Constraseña" value={password} onChange={event => setPassword(event.target.value)} className="px-5 bg-transparent outline-none text-2xl text-white"/>
            </div>
            <button onClick={sendForm} className="py-3 px-2 rounded-full bg-orange-600 hover:bg-orange-500 transition-all text-white text-2xl mt-4">Iniciar sesion</button>
            <p className="text-white cursor-default">¿No tienes una cuenta? <a href="SignUp" className="cursor-pointer text-xl border-b-2 border-transparent hover:border-orange-500 transition-all">¡REGISTRATE!</a></p>
        </div>
    )
}

export default Login;