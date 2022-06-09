import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import hackerSinceroStyles from '../../assets/css/hackersincero.module.css';

const supportersImage = [
    require("../../assets/images/apoiadores/conect_hpcell.jpg")
];

const supportersImageAlt = [
    "Logo da empresa Connect Cell HP, que consiste em uma imagem de fundo azul claro, e dentro dela também tem um ícone de celular com as logos do android (que é um robozinho) e do ios (que é uma maçã mordida) e logo ao lado as letras H e P, respectivamente."
];

const headerImage = require('../../assets/images/hacker_sincero.png');

const Supporters = () => {
    document.title = "Hacker Sincero | Apoiadores";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/hacker-sincero/";
    const headerImageAlt = "Logo da Página Hacker Sincero, com um desenho de um hacker mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Hacker em uma linha, alinhada ao desenho, e a palavra Sincero em outra, embaixo da letra K, de Hacker.";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={hackerSinceroStyles["supporters-div"]} className={hackerSinceroStyles["center"]}>
                <h1>Apoiadores do Projeto - Hacker Sincero</h1>
                <div id={hackerSinceroStyles["supporters-hacker-sincero-div"]}>
                    <a id={hackerSinceroStyles["connect-hp-cell-link"]} href="https://www.instagram.com/conect_hpcell/">
                        <div id={hackerSinceroStyles["connect-hp-cell-div"]} className={hackerSinceroStyles["supporter-div"]}>
                            <div className={hackerSinceroStyles["supporter-image-div"]}>
                                <img className={hackerSinceroStyles["supporter-image"]} src={supportersImage[0]} alt={supportersImageAlt[0]}></img>
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