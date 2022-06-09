import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-regular-svg-icons';
import { faHeartCrack, faFilePen } from '@fortawesome/free-solid-svg-icons';

import postsComponentStyles from "../assets/css/posts_component.module.css";

const PostsPage = (props) => {
    const EmptyPosts = () => {
        return(
            <div id={postsComponentStyles["empty-posts"]} className={postsComponentStyles["center"]}>
                <div id={postsComponentStyles["empty-posts-icons"]}>
                    <span>
                        <FontAwesomeIcon className={postsComponentStyles["empty-post-icon"]} icon={faFilePen} />
                        <FontAwesomeIcon className={postsComponentStyles["empty-post-icon"]} icon={faSadTear} />
                        <FontAwesomeIcon icon={faHeartCrack} />
                    </span>
                </div>
                <div id={postsComponentStyles["empty-posts-message"]}>
                    <h2>Nenhuma Publicação Encontrada :'(</h2>
                    <p>Poxa, que situação, em, jovem gafanhoto? Mas, nem tudo está perdido! Pode não ter publicações <b>AGORA</b>, mas em breve lhe garanto que teremos algo novo aqui para lhe mostrar em nossa página! Fique antenado nas redes sociais!</p>
                </div>
            </div>
        );
    };
    const GeneratePageWithPosts = () => {
        return(
            <div id={postsComponentStyles["posts"]} className={postsComponentStyles["center"]}>
                {props.postsFiles[0] && 
                <div className={postsComponentStyles["post-element"]}>
                    <div className={postsComponentStyles["post-element-image-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[0][0].id}>
                            <img className={postsComponentStyles["post-element-image"]} src={props.postsFiles[0][1]} alt={props.postsFiles[0][0].altImage}></img>
                        </a>
                    </div>
                    <div className={postsComponentStyles["post-texts-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[0][0].id}>
                            <p className={postsComponentStyles["post-element-title"]}>{props.postsFiles[0][0].title}</p>
                        </a>
                        <p className={postsComponentStyles["post-element-description"]}>{props.postsFiles[0][0].description}</p>
                        <a className={postsComponentStyles["post-element-link"]} href={props.baseUrl + "post/" + props.postsFiles[0][0].id}>Ler mais...</a>
                    </div>
                </div>
                }
                {props.postsFiles[1] && 
                <div className={postsComponentStyles["post-element"]}>
                    <div className={postsComponentStyles["post-element-image-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[1][0].id}>
                            <img className={postsComponentStyles["post-element-image"]} src={props.postsFiles[1][1]} alt={props.postsFiles[1][0].altImage}></img>
                        </a>
                    </div>
                    <div className={postsComponentStyles["post-texts-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[1][0].id}>
                            <p className={postsComponentStyles["post-element-title"]}>{props.postsFiles[1][0].title}</p>
                        </a>
                        <p className={postsComponentStyles["post-element-description"]}>{props.postsFiles[1][0].description}</p>
                        <a className={postsComponentStyles["post-element-link"]} href={props.baseUrl + "post/" + props.postsFiles[1][0].id}>Ler mais...</a>
                    </div>
                </div>
                }
                {props.postsFiles[2] && 
                <div className={postsComponentStyles["post-element"]}>
                    <div className={postsComponentStyles["post-element-image-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[2][0].id}>
                            <img className={postsComponentStyles["post-element-image"]} src={props.postsFiles[2][1]} alt={props.postsFiles[2][0].altImage}></img>
                        </a>
                    </div>
                    <div className={postsComponentStyles["post-texts-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[2][0].id}>
                            <p className={postsComponentStyles["post-element-title"]}>{props.postsFiles[2][0].title}</p>
                        </a>
                        <p className={postsComponentStyles["post-element-description"]}>{props.postsFiles[2][0].description}</p>
                        <a className={postsComponentStyles["post-element-link"]} href={props.baseUrl + "post/" + props.postsFiles[2][0].id}>Ler mais...</a>
                    </div>
                </div>
                }
                {props.postsFiles[3] && 
                <div className={postsComponentStyles["post-element"]}>
                    <div className={postsComponentStyles["post-element-image-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[3][0].id}>
                            <img className={postsComponentStyles["post-element-image"]} src={props.postsFiles[3][1]} alt={props.postsFiles[3][0].altImage}></img>
                        </a>
                    </div>
                    <div className={postsComponentStyles["post-texts-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[3][0].id}>
                            <p className={postsComponentStyles["post-element-title"]}>{props.postsFiles[3][0].title}</p>
                        </a>
                        <p className={postsComponentStyles["post-element-description"]}>{props.postsFiles[3][0].description}</p>
                        <a className={postsComponentStyles["post-element-link"]} href={props.baseUrl + "post/" + props.postsFiles[3][0].id}>Ler mais...</a>
                    </div>
                </div>
                }
                {props.postsFiles[4] && 
                <div className={postsComponentStyles["post-element"]}>
                    <div className={postsComponentStyles["post-element-image-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[4][0].id}>
                            <img className={postsComponentStyles["post-element-image"]} src={props.postsFiles[4][1]} alt={props.postsFiles[4][0].altImage}></img>
                        </a>
                    </div>
                    <div className={postsComponentStyles["post-texts-div"]}>
                        <a href={props.baseUrl + "post/" + props.postsFiles[4][0].id}>
                            <p className={postsComponentStyles["post-element-title"]}>{props.postsFiles[4][0].title}</p>
                        </a>
                        <p className={postsComponentStyles["post-element-description"]}>{props.postsFiles[4][0].description}</p>
                        <a className={postsComponentStyles["post-element-link"]} href={props.baseUrl + "post/" + props.postsFiles[4][0].id}>Ler mais...</a>
                    </div>
                </div>
                }
                {
                    (props.haveBackPage || props.haveNextPage) &&
                    <div id={postsComponentStyles["previous-next-links-div"]}>
                        {
                            props.haveBackPage &&
                            <a id={postsComponentStyles["previous-page-link"]} href={props.pageID === 2 ? props.baseUrl : props.baseUrl + "pagina/" + (props.pageID - 1)} onClick={() => { window.scrollTo(0, 0); }}>Página Anterior</a>
                        }
                        {
                            props.haveNextPage &&
                            <a id={postsComponentStyles["next-page-link"]} href={props.baseUrl + "pagina/" + (props.pageID + 1)} onClick={() => { window.scrollTo(0, 0); }}>Próxima Página</a>
                        }
                    </div>
                }
            </div>
        );
    };

    let BodyComponent = null;
    if(props.postsFiles.length > 0) {
        BodyComponent = GeneratePageWithPosts();
    }
    else {
        BodyComponent = EmptyPosts();
    }
    return BodyComponent;
};

export default PostsPage;