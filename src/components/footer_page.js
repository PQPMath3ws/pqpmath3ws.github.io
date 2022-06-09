import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';

import footerPageStyles from '../assets/css/footer_page.module.css';

const pageFooter = (props) => {
    return(
        <div id={footerPageStyles["footer"]} className={footerPageStyles["center"]}>
            <div id={footerPageStyles["social-media-div"]}>
                <span id={footerPageStyles["social-media-span"]}>
                    <div id={footerPageStyles["social-media-links"]}>
                        <a className={footerPageStyles["facebook"]} href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a className={footerPageStyles["github"]} href="https://github.com/PQPMath3ws" aria-label="GitHub" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        <a className={footerPageStyles["instagram"]} href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                        <a className={footerPageStyles["linkedin"]} href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </a>
                        <a className={footerPageStyles["telegram"]} href="https://t.me/PQPMath3ws" aria-label="Telegram" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTelegram} />
                        </a>
                        <a className={footerPageStyles["twitch"]} href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitch} />
                        </a>
                        <a className={footerPageStyles["twitter"]} href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a className={footerPageStyles["youtube"]} href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
                            <FontAwesomeIcon icon={faYoutube} />
                        </a>
                    </div>
                </span>
            </div>
            <div id={footerPageStyles["links-footer-div"]}>
                <span id={footerPageStyles["links-footer-span"]}>
                    <div id={footerPageStyles["footer-links"]}>
                        <a className={footerPageStyles["footer-link-home"]} href={props.homeAddress} aria-label="Início" onClick={() => { window.scrollTo(0, 0); }}>
                            Início
                        </a>
                        <a className={footerPageStyles["footer-link-about"]} href={props.aboutAddress} aria-label="Sobre" onClick={() => { window.scrollTo(0, 0); }}>
                            Sobre
                        </a>
                        <a className={footerPageStyles["footer-link-supporters"]} href={props.supportersAddress} aria-label="Apoiadores" onClick={() => { window.scrollTo(0, 0); }}>
                            Apoiadores
                        </a>
                    </div>
                </span>
            </div>
        </div>
    );
};

export default pageFooter;