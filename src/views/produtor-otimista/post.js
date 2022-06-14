import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import Posts from './posts/files';

const headerImage = require('../../assets/images/produtor_otimista.png');

const Post = () => {
    const params = useParams();
    if(!params.id || params.id === '0') {
        return <Navigate replace to="/produtor-otimista/" />
    }
    const id = Math.abs(params.id);
    const reversePostsArray = [].concat(Posts).reverse();
    const post = reversePostsArray[id - 1];
    const Content = post[2];
    document.title = post[0].title + " | Produtor Otimista";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/produtor-otimista/";
    const headerImageAlt = "Logo da Página Produtor Otimista, com um desenho de um headphone com uma onde de som dentro do fone, e ao lado do desenho, as palavras Produtor, com a cor preta e embaixo, um traço de onda sonora seguido da palavra otimista, ambos em vermelho.";

    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <Content></Content>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default Post;