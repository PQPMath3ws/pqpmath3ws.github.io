import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';

const Maintenance = () => {
    document.title = "PQPMath3ws | Site em Manutenção!";
    return (
        <div>
            <div id="maintenance-message">
                <div className="center">
                    <FontAwesomeIcon id="maintenance-message-icon" icon={faTriangleExclamation} />
                </div>
                <div className="center">
                    <h1 id="maintenance-message-title">Nosso Website está em Manutenção!</h1>
                </div>
                <div id="maintenance-message-div" className="center">
                    <p>Olá, jovem gafanhoto! No momento, nosso website está passando por uma</p>
                    <p className="p-ignore">breve manutenção (melhorias, correção de bugs, sabe como é.)</p>
                    <p className="p-ignore">Em breve, o site estará no ar novamente, bele?</p>
                    <p className="p-ignore">Agradecido pela paciência comigo!</p>
                </div>
                <div className="center">
                    <span id="social-media-span">
                        <p>Me siga nas redes sociais: </p>
                        <div id="social-media-links">
                            <a href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faTwitch} />
                            </a>
                            <a href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                            <a href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Maintenance;