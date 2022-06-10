import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import programadorLoucoStyles from '../../assets/css/programadorlouco.module.css';

const headerImage = require('../../assets/images/programador_louco.png');

const About = () => {
    document.title = "Programador Louco | Sobre";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/programador-louco/";
    const headerImageAlt = "Logo da Página Programador Louco, com um desenho de uma pessoa mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Programador, com a cor preta, em uma linha, alinhada ao desenho, e a palavra Louco, na cor verde, embaixo.";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={programadorLoucoStyles["about-div"]} className={programadorLoucoStyles["center"]}>
                <h1>Sobre o Projeto - Programador Louco</h1>
                <div id={programadorLoucoStyles["about-programador-louco-div"]}>
                    <p>Apresentei interesse pela área da tecnologia da informação desde muito novo, por influência do meu pai. Desde então, comecei pelo básico, a entender como os websites, aplicativos, jogos e softwares em geral eram construídos, e como eles funcionavam. Investi por conta própria a estudar programação, a desenvolver meus primeiros projetos pessoais e até cheguei a fazer faculdade na área (de Sistemas de Informação).</p>
                    <p>E por consequência, com o tempo, fui me tocando na realidade em que nosso país vive, perante a tecnologia. Tanto no investimento no fator de desenvolvimento, quanto no de segurança. Ambos acabaram me preocupando bastante (por não estar em uma situação muito agradável).</p>
                    <p>Eis que então o projeto <b>Programador Louco</b> foi originado e criado. Queria poder 'passar a visão' e os meus conhecimentos sobre programação e desenvolvimento (pessoal e profissional na área de T.I) para meus amigos e conhecidos próximos, e a quem mais se interessar pelo assunto, de forma totalmente acessível, já que o investimento ao mesmo no nosso país é ainda um pouco escasso, tanto por parte do governo, quanto pelas próprias empresas ou pessoalmente mesmo. (pouco se procura saber e aprimar sobre, infelizmente - ainda estamos engatinhando para o tal)</p>
                    <p>No mais, o objetivo da página é mostrar, de forma simples, intuitiva e prática, como esse mundo da programação funciona e o que você pode fazer, como futuro ou atual dev, para poder lidar sobre o assunto. Espero que de certa forma venho ser útil a você, jovem gafanhoto.</p>
                </div>
            </div>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default About;