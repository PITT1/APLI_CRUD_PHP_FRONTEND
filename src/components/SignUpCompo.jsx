
const SignUpCompo = () => {
    return(
        <div>
            <div>
                <input type="text" placeholder="Nombre"/>
                <input type="text" placeholder="Apellido"/>
            </div>
            <div>
                <input type="text" placeholder="Nombre de usuario"/>
            </div>
            <div>
                <input type="text" placeholder="Correo electronico"/>
            </div>
            <div>
                <input type="text" placeholder="edad"/>
                <input type="checkbox" name="Masculino" />
                <input type="checkbox" name="femenino" />
            </div>
            <div>
                <input type="password" placeholder="Contraseña"/>
                <input type="password" placeholder="Repetir contraseña"/>
            </div>
        </div>
    )
}

export default SignUpCompo;