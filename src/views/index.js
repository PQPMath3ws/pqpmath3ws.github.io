import pagesStatus from '../static/pages_status.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faInstagramSquare, faLinkedin, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import homepageStyle from '../assets/css/homepage.module.css';

const PaginaPrincipal = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('./maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = homepageStyle["homepage-start-code"];
        document.body.className = homepageStyle["homepage-start-code"];
        document.body.id = homepageStyle["homepage-body"];
        let ownerPhotoImage = require('../assets/images/profile_pic.jpg');
        return (
            <div>
                <div id={homepageStyle["main-page-items"]}>
                    <div id={homepageStyle["main-page-image-header"]} className={homepageStyle["center"]}>
                        <img id={homepageStyle["main-page-img-header"]} src={ownerPhotoImage} alt="" />
                    </div>
                    <div className={homepageStyle["center"]}>
                        <p id={homepageStyle["home-page-text"]} className={homepageStyle["font-bold"]}><b>Página Principal do @PQPMath3ws</b></p>
                        <p id={homepageStyle["welcome-text"]}>Seja bem vindo(a)!</p>
                        <p id={homepageStyle["choose-text"]}>Entre no tópico que desejar:</p>
                    </div>
                    <div id={homepageStyle["main-page-links"]} className={homepageStyle["center"]}>
                        <a href="#/hacker-sincero/" className={homepageStyle["font-bold"]}>
                            Hacker Sincero - Blog
                        </a>
                        <a href="#/musicas/" className={homepageStyle["font-bold"]}>
                            Músicas/Artista - PQPMath3ws
                        </a>
                        <a href="#/portfolio-dev/" className={homepageStyle["font-bold"]}>
                            Portfólio DEV - by Mathews Martins
                        </a>
                        <a href="#/produtor-otimista/" className={homepageStyle["font-bold"]}>
                            Produtor Otimista - Blog
                        </a>
                        <a href="#/programador-louco/" className={homepageStyle["font-bold"]}>
                            Programador Louco - Blog
                        </a>
                    </div>
                    <div id={homepageStyle["social-media-div"]} className={homepageStyle["center"]}>
                        <span id={homepageStyle["social-media-span"]}>
                            <p>Me siga nas redes sociais: </p>
                            <div id={homepageStyle["social-media-links"]}>
                                <a className={homepageStyle["facebook"]} href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a className={homepageStyle["instagram"]} href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                                <a className={homepageStyle["linkedin"]} href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className={homepageStyle["twitch"]} href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitch} />
                                </a>
                                <a className={homepageStyle["twitter"]} href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </a>
                                <a className={homepageStyle["youtube"]} href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
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