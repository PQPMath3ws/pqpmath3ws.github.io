import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Homepage from './views/index';
//import HackerSinceroHomepage from './views/hacker-sincero/index';
//import MusicasHomepage from './views/musicas/index';
//import PorfolioDevHomepage from './views/portfolio-dev/index';
//import ProdutorOtimistaHomepage from './views/produtor-otimista/index';
//import ProgramadorLoucoHomepage from './views/programador-louco/index';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Homepage/> } />
        <Route path="/inicial" element={ <Homepage/> } />
        {/*
        <Route path="/hacker-sincero/" element={ <HackerSinceroHomepage/> } />
        <Route path="/hacker-sincero/inicial" element={ <HackerSinceroHomepage/> } />
        <Route path="/musicas/" element={ <MusicasHomepage/> } />
        <Route path="/musicas/inicial" element={ <MusicasHomepage/> } />
        <Route path="/portfolio-dev/" element={ <PorfolioDevHomepage/> } />
        <Route path="/portfolio-dev/inicial" element={ <PorfolioDevHomepage/> } />
        <Route path="/produtor-otimista/" element={ <ProdutorOtimistaHomepage/> } />
        <Route path="/produtor-otimista/inicial" element={ <ProdutorOtimistaHomepage/> } />
        <Route path="/programador-louco/" element={ <ProgramadorLoucoHomepage/> } />
        <Route path="/programador-louco/inicial" element={ <ProgramadorLoucoHomepage/> } />
        <Route path="*" element={ <Homepage/> } />
        */}
        { /* rotas para assets */ }
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);