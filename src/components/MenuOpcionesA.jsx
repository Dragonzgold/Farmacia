import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function MenuOpcionesA() {
    const location = useLocation();
    const nombreUsuario = location.state?.nombreUsuario || 'Usuario';
    const navigate = useNavigate();

    const handleAlmacenClick = () => {
        navigate('/almacen');
    };

    const handleSalirClick = () => {
        window.location.href = '/';
    };

    return (
        <div>
            <h1>Bienvenido {nombreUsuario}</h1>

            <button onClick={handleAlmacenClick}>Almacen</button>

            <button onClick={handleSalirClick}>Salir</button>
        </div>
    );
}

export default MenuOpcionesA;