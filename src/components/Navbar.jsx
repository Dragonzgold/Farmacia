import { Link } from 'react-router-dom';
import '../css/navbar.scss';

export default function Navbar() {
    return (
        <div className='navbarComplete'>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="boton__digimon">
                                <Link to="/Digimon">
                                    <button type='button' className='btn btn-outline-primary'>
                                        Inicio
                                    </button>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}