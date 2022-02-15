import pagesStatus from '../static/pages_status.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

const PaginaPrincipal = () => {
    const setMaintenancePage = () => {
        require('../assets/css/maintenance.css');
        var MaintenancePage = require('./maintenance');
        document.body.id = "maintenance-body";
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        require('../assets/css/homepage.css');
        let ownerPhotoImage = require('../assets/images/profile_pic.jpg');
        return (
            <div>
                <div id="main-page-items">
                    <div id="main-page-image-header" className="center">
                        <img id="main-page-img-header" src={ownerPhotoImage} alt="" />
                    </div>
                    <div className="center">
                        <p id="home-page-text" className="font-bold"><b>Página Principal do @PQPMath3ws</b></p>
                        <p id="welcome-text">Seja bem vindo(a)!</p>
                        <p id="choose-text">Entre no tópico que desejar:</p>
                    </div>
                    <div id="main-page-links" className="center">
                        <a href="/hacker-sincero/" className="font-bold">
                            Hacker Sincero - Blog
                        </a>
                        <a href="/musicas/" className="font-bold">
                            Músicas/Artista - PQPMath3ws
                        </a>
                        <a href="/portfolio-dev/" className="font-bold">
                            Portfólio DEV - by Mathews Martins
                        </a>
                        <a href="/produtor-otimista/" className="font-bold">
                            Produtor Otimista - Blog
                        </a>
                        <a href="/programador-louco/" className="font-bold">
                            Programador Louco - Blog
                        </a>
                    </div>
                    <div id="social-media-div" className="center">
                        <span id="social-media-span">
                            <p>Me siga nas redes sociais: </p>
                            <div id="social-media-links">
                                <a className="facebook" href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a className="instagram" href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                                <a className="linkedin" href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className="twitch" href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitch} />
                                </a>
                                <a className="twitter" href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </a>
                                <a className="youtube" href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    };
    let BodyComponent = null;
    if(pagesStatus.homeIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default PaginaPrincipal;