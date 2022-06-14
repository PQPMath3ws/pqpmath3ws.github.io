import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import Posts from './posts/files';

const headerImage = require('../../assets/images/programador_louco.png');

const Post = () => {
    const params = useParams();
    if(!params.id || params.id === '0') {
        return <Navigate replace to="/programador-louco/" />
    }
    const id = Math.abs(params.id);
    const reversePostsArray = [].concat(Posts).reverse();
    const post = reversePostsArray[id - 1];
    const Content = post[2];
    document.title = post[0].title + " | Programador Louco";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/programador-louco/";
    const headerImageAlt = "Logo da Página Programador Louco, com um desenho de uma pessoa mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Programador, com a cor preta, em uma linha, alinhada ao desenho, e a palavra Louco, na cor verde, embaixo.";
    
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <Content></Content>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default Post;