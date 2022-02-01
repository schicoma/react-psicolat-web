import './Recursos.css';
import image1 from './../../images/recursos1.png';
import image2 from './../../images/recursos2.png';
import image3 from './../../images/recursos3.png';

function Recursos() {
    return (
        <section className="Recursos">
            <div className="container">
                <div className="Recursos__images">
                    <div className="Recursos__gallery">
                        <div className="image-1">
                            <picture>
                                {/* <source media="(min-width:650px)" srcSet={image1} />
                                <source media="(min-width:100px)" srcSet={image3} /> */}
                                <source srcSet={image1} />
                                <img alt="recurso 1"></img>
                            </picture>
                        </div>
                        <div className="image-2">
                            <picture>
                                <source srcSet={image2} />
                                <img alt="recurso 2"></img>
                            </picture>
                        </div>
                        <div className="image-3">
                            <picture>
                                <source srcSet={image3} />
                                <img alt="recurso 3"></img>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className="Recursos__information">
                    <h1 className="Recursos__information-title">Recursos gratuitos</h1>
                </div>
            </div>
        </section>
    );
}

export { Recursos };

