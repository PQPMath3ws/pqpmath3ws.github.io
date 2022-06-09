import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import hackerSinceroStyles from '../../assets/css/hackersincero.module.css';

const headerImage = require('../../assets/images/hacker_sincero.png');

const About = () => {
    document.title = "Hacker Sincero | Sobre";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/hacker-sincero/";
    const headerImageAlt = "Logo da Página Hacker Sincero, com um desenho de um hacker mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Hacker em uma linha, alinhada ao desenho, e a palavra Sincero em outra, embaixo da letra K, de Hacker.";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={hackerSinceroStyles["about-div"]} className={hackerSinceroStyles["center"]}>
                <h1>Sobre o Projeto - Hacker Sincero</h1>
                <div id={hackerSinceroStyles["about-hacker-sincero-div"]}>
                    <p>Apresentei interesse pela área da tecnologia da informação desde muito novo, por influência do meu pai. Desde então, comecei pelo básico, a entender como os websites, aplicativos, jogos e softwares em geral eram construídos, e como eles funcionavam. Investi por conta própria a estudar programação, a desenvolver meus primeiros projetos pessoais e até cheguei a fazer faculdade na área (de Sistemas de Informação).</p>
                    <p>E por consequência, com o tempo, fui me tocando na realidade em que nosso país vive, perante a tecnologia. Tanto no investimento no fator de desenvolvimento, quanto no de segurança. Ambos acabaram me preocupando bastante (por não estar em uma situação muito agradável).</p>
                    <p>Eis que então o projeto <a href="https://www.instagram.com/ohackersincero/">Hacker Sincero</a> foi originado e criado. Queria poder 'passar a visão' e os meus conhecimentos sobre cybersegurança (segurança digital) para meus amigos e conhecidos próximos, e a quem mais se interessar pelo assunto, de forma totalmente acessível, já que o investimento ao mesmo no nosso país é muito escasso, tanto por parte do governo, quanto pelas próprias empresas ou pessoalmente mesmo. (pouco se procura saber e aprimar sobre, infelizmente)</p>
                    <p>No mais, o objetivo da página é mostrar, de forma simples, intuitiva e prática, como esse mundo da segurança da informação / segurança digital / cybersegurança funciona e o que você pode fazer, como usuário, para poder lidar sobre o assunto. Espero que de certa forma venho ser útil a você, jovem gafanhoto.</p>
                </div>
            </div>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default About;