import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import programadorLoucoStyles from '../../assets/css/programadorlouco.module.css';

const supportersImage = [
    require("../../assets/images/apoiadores/conect_hpcell.jpg")
];

const supportersImageAlt = [
    "Logo da empresa Connect Cell HP, que consiste em uma imagem de fundo azul claro, e dentro dela também tem um ícone de celular com as logos do android (que é um robozinho) e do ios (que é uma maçã mordida) e logo ao lado as letras H e P, respectivamente."
];

const headerImage = require('../../assets/images/programador_louco.png');

const Supporters = () => {
    document.title = "Programador Louco | Apoiadores";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/programador-louco/";
    const headerImageAlt = "";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={programadorLoucoStyles["supporters-div"]} className={programadorLoucoStyles["center"]}>
                <h1>Apoiadores do Projeto - Programador Louco</h1>
                <div id={programadorLoucoStyles["supporters-programador-louco-div"]}>
                    <a id={programadorLoucoStyles["connect-hp-cell-link"]} href="https://www.instagram.com/conect_hpcell/">
                        <div id={programadorLoucoStyles["connect-hp-cell-div"]} className={programadorLoucoStyles["supporter-div"]}>
                            <div className={programadorLoucoStyles["supporter-image-div"]}>
                                <img className={programadorLoucoStyles["supporter-image"]} src={supportersImage[0]} alt={supportersImageAlt[0]}></img>
                            </div>
                            <h2>Connect HP Cell</h2>
                        </div>
                    </a>
                </div>
            </div>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default Supporters;