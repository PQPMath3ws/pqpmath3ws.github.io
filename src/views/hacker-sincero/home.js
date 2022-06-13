import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';
import PostsComponent from '../../components/posts_component';

import Posts from './posts/files';

const headerImage = require('../../assets/images/hacker_sincero.png');

const Home = () => {
    document.title = "Hacker Sincero | Início";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/hacker-sincero/";
    const headerImageAlt = "Logo da Página Hacker Sincero, com um desenho de um hacker mexendo no computador com o rosto do dono do site, e na direita do desenho, a escrita Hacker em uma linha, alinhada ao desenho, e a palavra Sincero em outra, embaixo da letra K, de Hacker.";
    const params = useParams();
    const id = params.id ? Math.abs(params.id) : 1;
    const postsToShow = Posts.length > 0 ? Posts.slice((id - 1) * 10, id * 10) : [];
    if(params.id && postsToShow.length === 0) {
        return <Navigate replace to="/hacker-sincero/" />
    }
    if(params.id) {
        document.title += " | Página " + id;
    }
    return(
        <div>
            <Header imageHeader={headerImage} baseUrl={baseLink + actualDir} headerImageAlt={headerImageAlt}></Header>
            <PostsComponent baseUrl = {baseLink + actualDir} postsFiles={postsToShow} haveNextPage={Posts.length > (id * 10) ? true : false} haveBackPage={id > 1 ? true : false} pageID={id}></PostsComponent>
            <Footer homeAddress={baseLink + actualDir} aboutAddress={baseLink + actualDir + "sobre/"} supportersAddress={baseLink + actualDir + "apoiadores/"}></Footer>
        </div>
    );
};

export default Home;