import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import produtorOtimistaStyles from '../../assets/css/produtorotimista.module.css';

const supportersImage = [
    require("../../assets/images/apoiadores/conect_hpcell.jpg")
];

const supportersImageAlt = [
    "Logo da empresa Connect Cell HP, que consiste em uma imagem de fundo azul claro, e dentro dela também tem um ícone de celular com as logos do android (que é um robozinho) e do ios (que é uma maçã mordida) e logo ao lado as letras H e P, respectivamente."
];

const headerImage = require('../../assets/images/produtor_otimista.png');

const Supporters = () => {
    document.title = "Produtor Otimista | Apoiadores";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/produtor-otimista/";
    const headerImageAlt = "Logo da Página Produtor Otimista, com um desenho de um headphone com uma onde de som dentro do fone, e ao lado do desenho, as palavras Produtor, com a cor preta e embaixo, um traço de onda sonora seguido da palavra otimista, ambos em vermelho.";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={produtorOtimistaStyles["supporters-div"]} className={produtorOtimistaStyles["center"]}>
                <h1>Apoiadores do Projeto - Produtor Otimista</h1>
                <div id={produtorOtimistaStyles["supporters-produtor-otimista-div"]}>
                    <a id={produtorOtimistaStyles["connect-hp-cell-link"]} href="https://www.instagram.com/conect_hpcell/">
                        <div id={produtorOtimistaStyles["connect-hp-cell-div"]} className={produtorOtimistaStyles["supporter-div"]}>
                            <div className={produtorOtimistaStyles["supporter-image-div"]}>
                                <img className={produtorOtimistaStyles["supporter-image"]} src={supportersImage[0]} alt={supportersImageAlt[0]}></img>
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