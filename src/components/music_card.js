import musicsStyle from "../assets/css/musics.module.css";

const logos = [
    require("../assets/images/logos/amazon_music.png"),
    require("../assets/images/logos/deezer.png"),
    require("../assets/images/logos/itunes.png"),
    require("../assets/images/logos/napster.png"),
    require("../assets/images/logos/shazam.png"),
    require("../assets/images/logos/soundcloud.png"),
    require("../assets/images/logos/spotify.png"),
    require("../assets/images/logos/tiktok.png"),
    require("../assets/images/logos/yandex.png"),
    require("../assets/images/logos/youtube.png"),
];

const MusicCard = (props) => {
    let className = "";
    if(musicsStyle[props.className]) className = " " + musicsStyle[props.className];
    return (
        <div className={musicsStyle["music-card-div"] + className}>
            <div>
                <img className={musicsStyle["music-card-image"]} src={props.musicImage} alt={"Capa da Música '" + props.musicItem.musicTitle + "'"} />
            </div>
            <div className={musicsStyle["music-title-div"] + " " + musicsStyle["center"]}>
                <p className={musicsStyle["music-title"]}>{props.musicItem.musicTitle}</p>
                <p className={musicsStyle["choose-streaming-text"]}>Escolha o serviço de streaming favorito para ouvir:</p>
            </div>
            <div className={musicsStyle["music-list-div"]}>
                <ul className={musicsStyle["music-streaming-list"]}>
                    {props.musicItem.amazonLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[0]} alt="Logo do Spotify" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.amazonLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.deezerLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[1]} alt="Logo do Deezer" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.deezerLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.iTunesLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[2]} alt="Logo do iTunes" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.iTunesLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.napsterLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[3]} alt="Logo do Napster" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.napsterLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.shazamLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[4]} alt="Logo do Shazam" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.shazamLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.soundCloudLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[5]} alt="Logo do SoundCloud" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.soundCloudLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.spotifyLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[6]} alt="Logo do Spotify" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.spotifyLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.tiktokLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[7]} alt="Logo do TikTok" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.tiktokLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.yandexLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={logos[8]} alt="Logo do Yandex" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.yandexLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                        <hr></hr>
                    </li>
                    }
                    {props.musicItem.youTubeLink !== "" &&
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"] + " " + musicsStyle["ignore-li-bottom"]} src={logos[9]} alt="Logo do YouTube" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.youTubeLink} rel="noreferrer" target="_blank">Reproduzir</a>
                        </div>
                    </li>
                    }
                </ul>
            </div>
        </div>
    );
};

export default MusicCard;