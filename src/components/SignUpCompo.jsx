import { useState } from "react";
import "../styles/style.css";

const SignUpCompo = () => {
    const [isMale, setIsMale] = useState(false);
    const [isFemale, setIsFemale] = useState(false);
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [userName, setUserName] = useState("");
    const [yearsOlds, setYearsOlds] = useState("");
    const [mail, setMail] = useState("");
    const [gender, setGender] = useState("");
    const [password, setPassword] = useState("");
    const [passwordRepeat, setPasswordRepeat] = useState("");

    const dataJson = {
        "nombre": name,
        "apellido": lastName,
        "username": userName,
        "edad": yearsOlds,
        "correo": mail,
        "sexo": gender,
        "contraseña": password
    }

    const configPOST = {
        "method": 'POST',
        "headers": {
            'Content-Type': 'application/json',
        },
        "body": JSON.stringify(dataJson),
    }
    
    const changeGenderToMale = (event) => {
        if (event.target.checked) {
            setIsMale(true);
            setIsFemale(false);
            setGender("M");
        }
    }

    const changeGenderToFemale = (event) => {
        if (event.target.checked) {
            setIsFemale(true);
            setIsMale(false);
            setGender("F");
        }
    }

    const register = () => {
        if (password === passwordRepeat) {
            fetch("http://localhost/myapi/my-api.php?action=register", configPOST)
            .then(res => res.json())
            .then(data => console.log(data.message))   
        } else {
            console.log("las contraseñas no son iguales");
        }
    }

    return(
        <div className="py-16 px-8 backdrop-blur-xl rounded-3xl flex flex-col items-center">
            <div className="mb-6 flex flex-col">
                <input type="text" 
                       placeholder="Nombre" 
                       value={name} 
                       onChange={event => setName(event.target.value)} 
                       className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl mb-6 py-2 px-4"/>
                <input type="text" 
                       placeholder="Apellido" 
                       value={lastName} 
                       onChange={event => setLastName(event.target.value)} 
                       className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6">
                <input type="text"
                       placeholder="Nombre de usuario"
                       value={userName} 
                       onChange={event => setUserName(event.target.value)} 
                       className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6">
                <input type="email" 
                       placeholder="Correo electronico" 
                       value={mail}
                       onChange={event => setMail(event.target.value)}
                       className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="mb-6 flex flex-col">
                <input type="text"
                       placeholder="edad"
                       value={yearsOlds}
                       onChange={event => setYearsOlds(event.target.value)}
                       className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4 mb-6"/>
                <div className="flex justify-between">
                    <label className="cyberpunk-checkbox-label">
                        <input type="checkbox" 
                               className="cyberpunk-checkbox"
                               checked={isMale}
                               onChange={changeGenderToMale} />Masculino
                    </label>
                    <label className="cyberpunk-checkbox-label">
                        <input type="checkbox"
                               className="cyberpunk-checkbox"
                               checked={isFemale}
                               onChange={changeGenderToFemale}/>Femenino
                    </label>
                </div>
            </div>
            <div className="mb-6">
                <input type="password" value={password} onChange={event => setPassword(event.target.value)} placeholder="Contraseña" className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl mr-4 py-2 px-4"/>
                <input type="password" value={passwordRepeat} onChange={event => setPasswordRepeat(event.target.value)} placeholder="Repetir contraseña" className="placeholder:text-slate-300 bg-transparent border-b-2 outline-none text-white text-2xl py-2 px-4"/>
            </div>
            <div className="flex flex-col items-center">
                <button onClick={register} type="button" className="py-3 px-10 mb-6 rounded-full bg-orange-600 hover:bg-orange-500 transition-all text-white text-2xl ">Registrar</button>
                <p className="text-white">¿Ya tienes una cuenta? ir a</p>
                <a href="/"><button type="button" className="py-3 px-10 rounded-full bg-orange-600 bg-orange hover:bg-orange-500 transition-all text-white text-2xl">Iniciar sesion</button></a>
                
            </div>
        </div>
    )
}

export default SignUpCompo;