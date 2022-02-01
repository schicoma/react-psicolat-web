import { faBook, faDesktop, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Principal.css';
import banner from './../../images/banner1.png';

function PrincipalUI() {
    return (
        <main className="Principal">
            <div className="Principal__information information">
                <h1 className="information__title">Plan terapeutico en 3x1</h1>
                <h2 className="information__subtitle">¡Empieza el cambio!</h2>

                <div className="information__options options">
                    <div className="options__button">
                        <FontAwesomeIcon icon={faUserFriends} size='3x' />
                        <span>Sesiones en vivo</span>
                    </div>
                    <div className="options__button">
                        <FontAwesomeIcon icon={faDesktop} size='3x' />
                        <span>Cursos</span>
                    </div>
                    <div className="options__button">
                        <FontAwesomeIcon icon={faBook} size='3x' />
                        <span>eBooks</span>
                    </div>
                </div>

                <button className="information__button">VER PROMOCIONES</button>

            </div>
            <div className="Principal__image">
                <picture>
                    <img src={banner} alt="Imagen principal"></img>
                </picture>
            </div>
        </main>
    );
}

export { PrincipalUI };