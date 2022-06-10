import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import produtorOtimistaStyles from '../../assets/css/produtorotimista.module.css';

const headerImage = require('../../assets/images/produtor_otimista.png');

const About = () => {
    document.title = "Produtor Otimista | Sobre";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/produtor-otimista/";
    const headerImageAlt = "Logo da Página Produtor Otimista, com um desenho de um headphone com uma onde de som dentro do fone, e ao lado do desenho, as palavras Produtor, com a cor preta e embaixo, um traço de onda sonora seguido da palavra otimista, ambos em vermelho.";
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <div id={produtorOtimistaStyles["about-div"]} className={produtorOtimistaStyles["center"]}>
                <h1>Sobre o Projeto - Produtor Otimista</h1>
                <div id={produtorOtimistaStyles["about-produtor-otimista-div"]}>
                    <p>Apresentei interesse pela música desde muito novo, por influência do meu pai. Aos meus 12 anos, decidi aprender a tocar meu primeiro instrumento melódico. Então meu pai me emprestou o seu violão, me passou alguns acordes e o resto deixou comigo. Desde então, comecei pelo básico, a entender como o instrumento era e funcionava, consegui aprender os acordes que ele tinha me passado, aprendi a fazer ritmos e assim foi progredindo. Totalmente independente e sozinho. E obviamente que alguns tutoriais na internet, perto dos meus 14 anos, ajudaram bastante também (mesmo tendo muita revista de cifra em casa).</p>
                    <p> E agora, na fase adulta, após meus 20 anos, resolvi aprofundar meus conhecimentos sobre música e produção musical por conta própria. Cheguei até a produzir minhas próprias músicas, para praticar o que aprendi. A música (prática, estudo ou implementação), desde o início, se tornou um grande e amado hobby para mim. Nunca me vi tabalhando profissionalmente até hoje nesse ramo. (Mas não é por isso que vou aplicar a música de qualquer forma, né? Existem teorias e regras a seguir, e assim eu o faço! hahaha)</p>
                    <p>Então, o projeto <a href="https://www.instagram.com/produtorotimista/">Produtor Otimista</a> foi originado e criado para compartilhar o que aprendi nesse tempo de estudo e prática sobre o que é uma das mais belas artes que existem no mundo: A MÚSICA! Aqui, eu 'passo a visão' e os meus conhecimentos sobre a música e sua produção nos dias de hoje (com foco na produção digital "in the box") para meus amigos e conhecidos próximos, e a quem mais se interessar pelo assunto, de forma totalmente acessível, e fácil.</p>
                    <p>No mais, o objetivo da página é mostrar, de forma simples, intuitiva e prática, como essa arte da música funciona e o que você pode fazer e aplicar, como músico, para poder lidar sobre o assunto. Espero que de certa forma venho ser útil a você, jovem gafanhoto.</p>
                </div>
            </div>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default About;