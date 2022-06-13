import { useParams, Navigate } from 'react-router-dom';

import Header from '../../components/header_page';
import Footer from '../../components/footer_page';
import PostsComponent from '../../components/posts_component';

import Posts from './posts/files';

const headerImage = require('../../assets/images/produtor_otimista.png');

const Home = () => {
    document.title = "Produtor Otimista | Início";
    const baseLink = window.location.protocol + "//" + window.location.host + "/";
    const actualDir = "#/produtor-otimista/";
    const headerImageAlt = "Logo da Página Produtor Otimista, com um desenho de um headphone com uma onde de som dentro do fone, e ao lado do desenho, as palavras Produtor, com a cor preta e embaixo, um traço de onda sonora seguido da palavra otimista, ambos em vermelho.";
    const params = useParams();
    const id = params.id ? Math.abs(params.id) : 1;
    const postsToShow = Posts.length > 0 ? Posts.slice((id - 1) * 10, id * 10) : [];
    if(params.id && postsToShow.length === 0) {
        return <Navigate replace to="/produtor-otimista/" />
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