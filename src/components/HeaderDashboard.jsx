

const HeaderDashboard = () => {
    return(
        <div className="flex justify-between py-4 px-8 w-screen h-auto bg-slate-800 text-white">
            <div> 
                <h1 className="text-4xl">API-CRUD</h1>
            </div>
            <ul className="flex gap-4">
                <li className="text-4xl">username</li>
                <li><a href="#" className="text-2xl hover:text-orange-500 transition-all">ajustes</a></li>
                <li><button className="text-2xl">cerrar sesion</button></li>
            </ul>
        </div>
    )
}

export default HeaderDashboard;