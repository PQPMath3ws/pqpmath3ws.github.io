import footerPageStyles from '../assets/css/header_page.module.css';

const header = (props) => {
    return(
        <nav id={footerPageStyles["header"]} className={footerPageStyles["center"]}>
            <div id={footerPageStyles["header-image"]}>
                <img id={footerPageStyles["image-header"]} src={props.imageHeader} alt={props.headerImageAlt}></img>
            </div>
            <div id={footerPageStyles["nav-links-div"]}>
                <ul>
                    <li id={footerPageStyles["nav-link-home"]}><a href={props.baseUrl} aria-label="Início" onClick={() => { window.scrollTo(0, 0); }}>Início</a></li>
                    <li id={footerPageStyles["nav-link-about"]}><a href={props.baseUrl + "sobre/"} aria-label="Sobre" onClick={() => { window.scrollTo(0, 0); }}>Sobre</a></li>
                    <li id={footerPageStyles["nav-link-supporters"]}><a href={props.baseUrl + "apoiadores/"} aria-label="Apoiadores" onClick={() => { window.scrollTo(0, 0); }}>Apoiadores</a></li>
                </ul>
            </div>
            <hr id={footerPageStyles["header-posts-hr"]}></hr>
        </nav>
    );
};

export default header;