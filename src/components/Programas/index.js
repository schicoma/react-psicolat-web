import './Programas.css';
import programa1 from './../../images/programa1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Programas() {
    return (
        <section className="Programas">
            <div className="container">
                <div className="Programas__title">
                    <h1>Programas terapéuticos que funcionan</h1>
                </div>
                <div className="Programas__detail">
                    <div className="Programas__detail-information">
                        <h1 className="Programas__detail-information-title">Sesiones online y presencial con expertos</h1>
                        <ul className="Programas__detail-information-list">
                            <li className="Programas__detail-information-list-item">
                                <FontAwesomeIcon icon={faStar} />
                                Actividades digitales
                            </li>
                            <li className="Programas__detail-information-list-item">
                                <FontAwesomeIcon icon={faStar} />
                                Actividades semanales
                            </li>
                            <li className="Programas__detail-information-list-item">
                                <FontAwesomeIcon icon={faStar} />
                                Evaluaciones sin costo adicional
                            </li>
                            <li className="Programas__detail-information-list-item">
                                <FontAwesomeIcon icon={faStar} />
                                Seguimientos Terapéuticos
                            </li>
                        </ul>
                        <button className="Programas__detail-information-button">VER PROGRAMAS</button>
                    </div>
                    <div className="Programas__detail-image">

                        <div className="Programas__detail-image-container">
                            <picture>
                                <source srcSet={programa1} />
                                <img alt="recurso 3"></img>
                            </picture>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { Programas };