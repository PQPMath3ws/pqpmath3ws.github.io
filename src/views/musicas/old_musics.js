import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Flickity from 'react-flickity-component';

import MusicCard from "../../components/music_card";

import MusicLinks from "../../static/musics_links.json";
import musicsStyle from "../../assets/css/musics.module.css";
import "../../assets/css/flickity.css";

const musicsImages = [
    require('../../assets/images/capa_musicas/MeioInseguroEnfim.jpg'),
    require('../../assets/images/capa_musicas/NaoVouVoltarAtras.jpg'),
    require('../../assets/images/capa_musicas/NaoTenhaMedoJamais.jpg'),
    require('../../assets/images/capa_musicas/EhSohDeixarAcontecer.jpg'),
    require('../../assets/images/capa_musicas/Nightmares.jpg'),
    require('../../assets/images/capa_musicas/Invisivel.jpg'),
    require('../../assets/images/capa_musicas/SentaPraMim.jpg')
];

const OldMusics = () => {
    return (
        <div>
            <div id={musicsStyle["main-page-items"]}>
                <Flickity reloadOnUpdate>
                    <MusicCard musicItem={MusicLinks[0]} musicImage={musicsImages[0]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[1]} musicImage={musicsImages[1]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[2]} musicImage={musicsImages[2]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[3]} musicImage={musicsImages[3]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[4]} musicImage={musicsImages[4]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[5]} musicImage={musicsImages[5]} className={"musicCardClass"}></MusicCard>
                    <MusicCard musicItem={MusicLinks[6]} musicImage={musicsImages[6]}></MusicCard>
                </Flickity>
                <div id={musicsStyle["preSave-button-div"]} className={musicsStyle["center"]}>
                    <a id={musicsStyle["preSave-button"]} href="#/musicas/?preSave=1">Novos Projetos</a>
                </div>
                <div id={musicsStyle["social-media-div"]} className={musicsStyle["center"]}>
                    <span id={musicsStyle["social-media-span"]}>
                        <p>Interaja comigo nas redes sociais: </p>
                        <div id={musicsStyle["social-media-links"]}>
                            <a className={musicsStyle["facebook"]} href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                            <a className={musicsStyle["github"]} href="https://github.com/PQPMath3ws" aria-label="GitHub" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a className={musicsStyle["instagram"]} href="https://www.instagram.com/pqpmath3ws" aria-label="Instagram" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faInstagramSquare} />
                            </a>
                            <a className={musicsStyle["linkedin"]} href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a className={musicsStyle["telegram"]} href="https://t.me/PQPMath3ws" aria-label="Telegram" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                            <a className={musicsStyle["twitch"]} href="https://www.twitch.com/pqpmath3ws" aria-label="Twitch" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faTwitch} />
                            </a>
                            <a className={musicsStyle["twitter"]} href="https://www.twitter.com/pqpmath3ws" aria-label="Twitter" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                            <a className={musicsStyle["youtube"]} href="https://www.youtube.com/c/PQPMath3ws" aria-label="YouTube" rel="noreferrer" target="_blank">
                                <FontAwesomeIcon icon={faYoutube} />
                            </a>
                        </div>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default OldMusics;