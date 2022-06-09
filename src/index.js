import React from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter, Route, Routes } from 'react-router-dom';

import Homepage from './views/index';
import HackerSinceroHomepage from './views/hacker-sincero/index';
import HackerSinceroSobre from './views/hacker-sincero/sobre';
import HackerSinceroApoiadores from './views/hacker-sincero/apoiadores';
import MusicasHomepage from './views/musicas/index';
import PorfolioDevHomepage from './views/portfolio-dev/index';
import ProdutorOtimistaHomepage from './views/produtor-otimista/index';
import ProgramadorLoucoHomepage from './views/programador-louco/index';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/inicial" element={ <Homepage/> } />
        <Route path="/hacker-sincero/" element={ <HackerSinceroHomepage/> } />
        <Route path="/hacker-sincero/inicial/" element={ <HackerSinceroHomepage/> } />
        <Route path="/hacker-sincero/pagina/:id/" element={ <HackerSinceroHomepage/> } />
        <Route path="/hacker-sincero/sobre/" element={ <HackerSinceroSobre/> } />
        <Route path="/hacker-sincero/apoiadores/" element={ <HackerSinceroApoiadores/> } />
        <Route path="/musicas/" element={ <MusicasHomepage/> } />
        <Route path="/musicas/inicial" element={ <MusicasHomepage/> } />
        <Route path="/portfolio-dev/" element={ <PorfolioDevHomepage/> } />
        <Route path="/portfolio-dev/inicial/" element={ <PorfolioDevHomepage/> } />
        <Route path="/produtor-otimista/" element={ <ProdutorOtimistaHomepage/> } />
        <Route path="/produtor-otimista/inicial/" element={ <ProdutorOtimistaHomepage/> } />
        <Route path="/programador-louco/" element={ <ProgramadorLoucoHomepage/> } />
        <Route path="/programador-louco/inicial/" element={ <ProgramadorLoucoHomepage/> } />
        <Route path="*" element={ <Homepage/> } />
        { /* rotas para assets */ }
      </Routes>
    </HashRouter>
  </React.StrictMode>
);