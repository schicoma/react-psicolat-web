import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '../Commons/Button';
import logo from './../../images/logo1.png';
import './Header.css';

function Header() {
    return (
        <header className="Header">
            <nav className="Header__navbar">
                <img className="Header__navbar-logo" src={logo} alt="Logo"></img>
                <ul className="Header__navbar-menu">
                    <li className="Header__navbar-menu-item">Terapias</li>
                    <li className="Header__navbar-menu-item">Cursos</li>
                    <li className="Header__navbar-menu-item">Ebooks</li>
                    <li className="Header__navbar-menu-item">Orientación Vocacional</li>
                    <li className="Header__navbar-menu-item">Contacto</li>
                </ul>

                <ul className="Header__navbar-menu-options">
                    <li className="Header__navbar-menu-options-item">
                        <FontAwesomeIcon icon={faShoppingCart} size='2x' />
                    </li>
                    <li className="Header__navbar-menu-options-item">
                        <Button type="secondary">Iniciar sesión</Button>
                    </li>
                    <li className="Header__navbar-menu-options-item">
                        <Button type="primary">Registrarse</Button>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export { Header };
