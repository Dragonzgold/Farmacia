import Menu from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Home() {

    const navigate = useNavigate();
    const [contrasena, setContrasena] = useState('');
    const [usuarios, setUsuarios] = useState([]);
    const [usser, setUsser] = useState('');
    const [rol, setRol] = useState('');
    const [error, setError] = useState('');
    const [attemps, setAttemps] = useState(3);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost/ejercicios/farmaciay/src/PHP/empleado.php');
            setUsuarios(response.data);

        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault(); // Previene el comportamiento predeterminado del formulario
        const user = usuarios.find((user) => user.usuario === usser && user.contrasena === contrasena);
    
        if (attemps === 0) {
            setError("Has superado el número de intentos. Intenta más tarde.");
        } else if (user.rol === "A") {
            navigate("/MenuOpcionesA", { state: { nombreUsuario: user.nombre } });
        }else if(user.rol === "E"){
            navigate("/MenuOpcionesE", { state: { nombreUsuario: user.nombre } });
        }else {
            // Si no se encuentra el usuario, establece un mensaje de error
            setAttemps(attemps - 1);
            setError(`Correo o contraseña incorrectos. Inténtalo de nuevo. Intentos restantes: ${attemps}`);
        }
    };

    return (
        <div className="home">
            <Menu />
            <h1>Farmacia SAAS</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="usuarios">Usuarios</label>
                <input type="text" name="usuarios" id="usuarios" onChange={(e) => setUsser(e.target.value)}/>

                <label htmlFor="contrasena">Contraseña</label>
                <input type="password" name="contrasena" id="contrasena" onChange={(e) => setContrasena(e.target.value)} />

                <button type="submit">Enviar</button>
            </form>
        </div>
    );
}
