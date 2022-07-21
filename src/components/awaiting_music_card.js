import musicsStyle from "../assets/css/musics.module.css";

const onerpmImage = require("../assets/images/logos/onerpm.png");

const AwaitingMusicCard = (props) => {
    let className = "";
    if(musicsStyle[props.className]) className = " " + musicsStyle[props.className];
    return(
        <div className={musicsStyle["music-card-div"] + className}>
            <div>
                <img className={musicsStyle["music-card-image"]} src={props.musicImage} alt={"Capa da Música '" + props.musicItem.musicTitle + "'"} />
            </div>
            <div className={musicsStyle["unknown-music-title-div"] + " " + musicsStyle["center"]}>
                <p className={musicsStyle["music-title"]}>{props.musicItem.musicTitle}</p>
                <p className={musicsStyle["choose-streaming-text"]}>Fique atento para prévia nas redes sociais!</p>
            </div>
            {
                (props.musicItem.preSaveLink) &&
            <div className={musicsStyle["music-list-div"]}>
                <ul className={musicsStyle["music-streaming-list"]}>
                    <li>
                        <div>
                            <img className={musicsStyle["music-streaming-image"]} src={onerpmImage} alt="Logo da ONErpm" />
                            <a className={musicsStyle["music-streaming-link"]} href={props.musicItem.preSaveLink} rel="noreferrer" target="_blank">Pré-Save</a>
                        </div>
                    </li>
                </ul>
            </div>
            }
            {
                (!props.musicItem.preSaveLink) &&
            <div className={musicsStyle["music-list-div"]}>
                <p className={musicsStyle["awaiting-publish-text"] + " " + musicsStyle["center"]}>AGUARDANDO PUBLICAÇÃO...</p>
            </div>
            }
        </div>
    );
}

export default AwaitingMusicCard;