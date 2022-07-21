import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faGithub, faInstagramSquare, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import Flickity from 'react-flickity-component';

import AwaitingMusicCard from '../../components/awaiting_music_card';

import musicsStyle from "../../assets/css/musics.module.css";
import "../../assets/css/flickity.css";

const aboutMusics = [
    {
        "musicTitle": "Senta pra Mim",
        "preSaveLink": "https://onerpm.link/732111351108"
    },
    {
        "musicTitle": "Antes do Prazer"
    },
    {
        "musicTitle": "Carta Aberta"
    },
    {
        "musicTitle": "Senta Firme"
    },
    {
        "musicTitle": "Vou te Ownar"
    },

];

const albuns_images = [
    require('../../assets/images/capa_musicas/SentaPraMim.jpg'),
    require('../../assets/images/capa_musicas/secret.jpg'),
    require('../../assets/images/capa_musicas/secret.jpg'),
    require('../../assets/images/capa_musicas/secret.jpg'),
    require('../../assets/images/capa_musicas/secret.jpg')
];

const PreSaveMusics = () => {
    return (
        <div>
            <div id={musicsStyle["main-page-items"]}>
                <Flickity reloadOnUpdate>
                    <AwaitingMusicCard musicItem={aboutMusics[0]} musicImage={albuns_images[0]} className={"musicCardClass"}></AwaitingMusicCard>
                    <AwaitingMusicCard musicItem={aboutMusics[1]} musicImage={albuns_images[1]} className={"musicCardClass"}></AwaitingMusicCard>
                    <AwaitingMusicCard musicItem={aboutMusics[2]} musicImage={albuns_images[2]} className={"musicCardClass"}></AwaitingMusicCard>
                    <AwaitingMusicCard musicItem={aboutMusics[3]} musicImage={albuns_images[3]} className={"musicCardClass"}></AwaitingMusicCard>
                    <AwaitingMusicCard musicItem={aboutMusics[4]} musicImage={albuns_images[4]} className={"musicCardClass"}></AwaitingMusicCard>
                </Flickity>
                <br></br>
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

export default PreSaveMusics;