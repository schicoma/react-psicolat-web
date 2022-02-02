import { faBook, faDesktop, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Principal.css';
import banner from './../../images/banner1.png';

function PrincipalUI() {
    return (
        <main className="Principal">
            <section>
                <div className="Principal__information information">
                    <h1 className="Principal__information-title">Plan terapeutico en 3x1</h1>
                    <h2 className="Principal__information-subtitle">¡Empieza el cambio!</h2>

                    <div className="Principal__information-options">
                        <div className="Principal__information-options-button">
                            <FontAwesomeIcon icon={faUserFriends} size='3x' />
                            <span>Sesiones en vivo</span>
                        </div>
                        <div className="Principal__information-options-button">
                            <FontAwesomeIcon icon={faDesktop} size='3x' />
                            <span>Cursos</span>
                        </div>
                        <div className="Principal__information-options-button">
                            <FontAwesomeIcon icon={faBook} size='3x' />
                            <span>eBooks</span>
                        </div>
                    </div>

                    <button className="Principal__information-button">VER PROMOCIONES</button>

                </div>
                <div className="Principal__image">
                    <picture>
                        <img src={banner} alt="Imagen principal"></img>
                    </picture>
                </div>
            </section>
        </main>
    );
}

export { PrincipalUI };