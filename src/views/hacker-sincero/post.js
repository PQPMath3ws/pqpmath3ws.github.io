import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';

import Posts from './posts/files';

const headerImage = require('../../assets/images/hacker_sincero.png');

const Post = () => {
    const params = useParams();
    if (!params.id || params.id === '0') {
        return <Navigate replace to="/hacker-sincero/" />
    }
    try {
        const id = Math.abs(params.id);
        const reversePostsArray = [].concat(Posts).reverse();
        const post = reversePostsArray[id - 1];
        const Content = post[2];
        document.title = post[0].title + " | Hacker Sincero";
        const baseLink = window.location.protocol + "//" + window.location.host + "/";
        const actualDir = "#/hacker-sincero/";
        const headerImageAlt = "Logo da Página Hacker Sincero, com um desenho de um hacker mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Hacker em uma linha, alinhada ao desenho, e a palavra Sincero em outra, embaixo da letra K, de Hacker.";

        return (
            <div>
                <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
                <Content></Content>
                <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
            </div>
        );
    } catch (error) {
        return <Navigate replace to="/hacker-sincero/" />
    }
};

export default Post;