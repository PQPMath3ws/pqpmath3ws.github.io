import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';
import PostsComponent from '../../components/posts_component';

import Posts from './posts/files';

const headerImage = require('../../assets/images/programador_louco.png');

const Home = () => {
    document.title = "Programador Louco | Início";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/programador-louco/";
    const headerImageAlt = "Logo da Página Programador Louco, com um desenho de uma pessoa mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Programador, com a cor preta, em uma linha, alinhada ao desenho, e a palavra Louco, na cor verde, embaixo.";
    const params = useParams();
    const id = params.id ? Math.abs(params.id) : 1;
    const postsToShow = Posts.length > 0 ? Posts.slice((id - 1) * 5, id * 5) : [];
    if(params.id && postsToShow.length === 0) {
        return <Navigate replace to="/programador-louco/" />
    }
    if(params.id) {
        document.title += " | Página " + id;
    }
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <PostsComponent baseUrl = {baseLink + actualDir} postsFiles={postsToShow} haveNextPage={Posts.length > (id * 5) ? true : false} haveBackPage={id > 1 ? true : false} pageID={id}></PostsComponent>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default Home;