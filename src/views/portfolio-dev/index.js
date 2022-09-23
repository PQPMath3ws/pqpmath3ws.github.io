import pagesStatus from '../../static/pages_status.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import portfolioDevStyle from '../../assets/css/portfoliodev.module.css';

const PorfolioDevHomepage = () => {
    const setMaintenancePage = () => {
        var MaintenancePage = require('../maintenance');
        return MaintenancePage.default();
    };
    const setMainPage = () => {
        document.documentElement.className = portfolioDevStyle["portfoliodev-start-code"];
        document.body.className = portfolioDevStyle["portfoliodev-start-code"];
        document.body.id = portfolioDevStyle["portfoliodev-body"];
        let ownerPhotoImage = require('../../assets/images/profile_pic.jpg');
        return (
            <div>
                <div id={portfolioDevStyle["portfolio-dev-items"]}>
                    <div id={portfolioDevStyle["portfolio-dev-image-header"]} className={portfolioDevStyle["center"]}>
                        <img id={portfolioDevStyle["portfolio-dev-img-header"]} src={ownerPhotoImage} alt="" />
                    </div>
                    <div className={portfolioDevStyle["center"]}>
                        <p id={portfolioDevStyle["portfolio-dev-text"]} className={portfolioDevStyle["font-bold"]}><b>Meu Portfólio DEV!</b></p>
                        <p id={portfolioDevStyle["list-text"]}>Aqui se encontra um portfólio de sites/projetos que eu já desenvolvi / contribuí no desenvolvimento, que estão públicos ainda:</p>
                    </div>
                    <div id={portfolioDevStyle["portfolio-dev-links"]}>
                        <a href="https://github.com/PQPMath3ws/MQTT-Receiver" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            MQTT Client Receiver (HTML5 + JS + CSS3)
                        </a>
                        <a href="https://www.youtube.com/watch?v=12CBz2qbZi0" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            Jumpman Craft - Repositório Privado (Unity2D (C#) + JS) - Vídeo Demo
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.GreatBit.FindMeGame.io" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            FindMe.io (Unity2D (C#) - Android) - Play Store
                        </a>
                        <a href="https://www.tudon.app/" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            TudOn - App Mobile (Xamarin.Forms (C#) + MySQL) - Repositório Privado
                        </a>
                        <a href="https://criston.ind.br/" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            Criston - Site Principal &#38; Cliente &#38; OS (PHP + CodeIgniter 4 + MySQL) - Repositório Privado
                        </a>
                        <a href="https://github.com/PQPMath3ws/pqpmath3ws.github.io" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            Este meu WebSite do GitHub Pages (React.js + NodeJS + HTML5 + CSS3 + JS) - Código Fonte Público
                        </a>
                        <a href="https://abmtechnology.com.br/" className={portfolioDevStyle["font-bold"]} rel="noreferrer" target="_blank">
                            T2-WEB (MEAN.js + HTML5 + CSS3 + JS) &#38; Truck Track (Angular.js + Android Nativo (JAVA)) - Repositório Privado
                        </a>
                    </div>
                    <div id={portfolioDevStyle["social-media-div"]} className={portfolioDevStyle["center"]}>
                        <span id={portfolioDevStyle["social-media-span"]}>
                            <p>Interaja comigo nas redes sociais: </p>
                            <div id={portfolioDevStyle["social-media-links"]}>
                                <a className={portfolioDevStyle["facebook"]} href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faFacebookSquare} />
                                </a>
                                <a className={portfolioDevStyle["github"]} href="https://github.com/PQPMath3ws" aria-label="GitHub" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a className={portfolioDevStyle["instagram"]} href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </a>
                                <a className={portfolioDevStyle["linkedin"]} href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </a>
                                <a className={portfolioDevStyle["telegram"]} href="https://t.me/PQPMath3ws" aria-label="Telegram" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTelegram} />
                                </a>
                                <a className={portfolioDevStyle["twitch"]} href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitch} />
                                </a>
                                <a className={portfolioDevStyle["twitter"]} href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                                    <FontAwesomeIcon icon={faTwitterSquare} />
                                </a>
                                <a className={portfolioDevStyle["youtube"]} href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
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
    if(pagesStatus.pvIndexIsInMaintenance) {
        BodyComponent = setMaintenancePage();
    } else {
        BodyComponent = setMainPage();
    }
    return BodyComponent;
};

export default PorfolioDevHomepage;