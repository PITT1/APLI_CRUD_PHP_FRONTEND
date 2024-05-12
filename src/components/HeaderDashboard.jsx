import { useEffect, useState } from "react";

const HeaderDashboard = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
      const urlString = window.location.href;
      const url = new URL(urlString);
      const user = url.searchParams.get("user");

      setUserName(user || '');
    }, []);


    return (
        <div className="flex justify-between py-4 px-8 w-screen h-auto bg-slate-800 text-white">
            <div> 
                <h1 className="text-4xl">API-CRUD</h1>
            </div>
            <ul className="flex gap-4">
                <li className="text-4xl mr-7">Bienvenido {userName}</li>
                <li><a href="#" className="text-2xl hover:text-orange-500 transition-all">ajustes</a></li>
                <li><a href="/" className="text-2xl hover:text-orange-500 transition-all">cerrar sesion</a></li>
            </ul>
        </div>
    )
}

export default HeaderDashboard;