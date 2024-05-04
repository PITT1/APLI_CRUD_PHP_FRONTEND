import "../styles/style.css";

const SignUpCompo = () => {
    return(
        <div className="py-16 px-8 backdrop-blur-xl rounded-3xl flex flex-col items-center">
            <div className="mb-6 flex flex-col">
                <input type="text" placeholder="Nombre" className="bg-transparent border-b-2 outline-none text-white text-2xl mb-6 py-2 px-4"/>
                <input type="text" placeholder="Apellido" className="bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6">
                <input type="text" placeholder="Nombre de usuario" className="bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6">
                <input type="email" placeholder="Correo electronico" className="bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6 flex flex-col">
                <input type="text" placeholder="edad" className="bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4 mb-6"/>
                <div className="flex justify-between">
                    <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox" />Masculino
                    </label>
                    <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" className="cyberpunk-checkbox" />Femenino
                    </label>
                </div>
            </div>
            <div className="mb-6">
                <input for="male-selector" type="password" placeholder="Contraseña" className="bg-transparent border-b-2 outline-none text-white text-2xl mr-4 py-2 px-4"/>
                <input type="password" placeholder="Repetir contraseña" className="bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="flex flex-col items-center">
                <button type="button" className="py-3 px-10 mb-6 rounded-full bg-orange-600 hover:bg-orange-500 transition-all text-white text-2xl ">Registrar</button>
                <p className="text-white">¿Ya tienes una cuenta? ir a</p>
                <a href="/"><button type="button" className="py-3 px-10 rounded-full bg-orange-600 bg-orange hover:bg-orange-500 transition-all text-white text-2xl">Iniciar sesion</button></a>
                
            </div>
        </div>
    )
}

export default SignUpCompo;