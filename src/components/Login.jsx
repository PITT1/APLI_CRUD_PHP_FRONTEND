import "../styles/style.css";

const Login = () => {
    return(
        <div className="flex flex-col text-center backdrop-blur-sm py-24 px-10 rounded-3xl">
            <h1 className="cursor-default mb-8 text-white text-4xl tracking-widest">Bienvenido</h1>
            <div className="flex border-b-2 transition-all mb-4">
                <span className="userIcon"></span>
                <input type="text" placeholder="Nombre de usuario" className="px-5 bg-transparent outline-none text-2xl text-white "/>  
            </div>
            <div className="flex border-b-2 transition-all mb-4">
                <span className="passwordIcon"></span>
                <input type="password" placeholder="Constraseña" className="px-5 bg-transparent outline-none text-2xl text-white"/>
            </div>
            <button className="py-3 px-2 rounded-full bg-orange-600 hover:bg-orange-500 transition-all text-white text-2xl mt-4">Ingresar</button>
            <p className="text-white cursor-default">¿No tienes una cuenta? <a href="#" className="cursor-pointer text-xl border-b-2 border-transparent hover:border-orange-500 transition-all">¡REGISTRATE!</a></p>
        </div>
    )
}

export default Login;