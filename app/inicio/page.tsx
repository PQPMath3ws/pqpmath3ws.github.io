import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

import Footer from '../components/footer'
import Header from '../components/header'
import { hammersmithOne, pressStart2P } from '../fonts'

interface ProjectItem {
  projectName: string,
  projectLink: string,
}

export const metadata: Metadata = {
  title: 'PQPMath3ws | Início',
  description: 'Porfólio Pessoal & Portal Gratuito de Informações sobre Hacking & Segurança Digital, Programação, Produção Musical e o que mais EU dominar hahaha',
  verification: {
    google: "oL4MxYP2fowyLzvCkMY7M8c4MrjlN0uNjd3dbLpegJg",
  },
}

export default function PaginaDeInicio() {
  const headerMessages: string[] = [
    "Seja bem-vindo ao meu site",
    "Essa é a página de um desenvolvedor web full stack e desenvolvedor mobile",
    "Desenvolvedor ou Programador?",
    "Rubber Duck Debugging :3",
    "RDD Hoje, RDD Amanhã, RDD Sempre!",
    "5 anos de experiência",
    "Eclético? Com certeza!",
    "Novo Desafio? Mas é Claro!",
    "Freelancer Disponível!",
    "Isso daqui é um teleprompter?",
  ]

  const projectsList: ProjectItem[] = [
    {
      projectName: "MQTT Client Receiver (HTML5 + JS + CSS3)",
      projectLink: "https://github.com/PQPMath3ws/MQTT-Receiver",
    },
    {
      projectName: "Jumpman Craft - Repositório Privado (Unity2D (C#) + JS) - Vídeo Demo",
      projectLink: "https://www.youtube.com/watch?v=12CBz2qbZi0",
    },
    {
      projectName: "FindMe.io (Unity2D (C#) - Android) - Play Store",
      projectLink: "https://play.google.com/store/apps/details?id=com.GreatBit.FindMeGame.io",
    },
    {
      projectName: "MaLi Discord Bot (PostgreSQL + TypeScript + Node.js + Prisma)",
      projectLink: "https://github.com/PQPMath3ws/mali-discord-bot-poc",
    },
    {
      projectName: "Dart Console Application Project (Dart 3)",
      projectLink: "https://github.com/PQPMath3ws/dart_course_console_application",
    },
    {
      projectName: "MobilePress - Um Cliente WordPress Mobile (Flutter (Dart) + MySQL) - Em breve!",
      projectLink: "#",
    },
    {
      projectName: "Where Am I? (Unity2D (C#) - Android) - Em breve!",
      projectLink: "#",
    },
  ]

  const birthDate: Date = new Date(1998, 10, 24, 11, 30, 0, 0)
  const todayDate: Date = new Date()

  const monthDiff: number = todayDate.getTime() - birthDate.getTime() + 3600000
  const realAgeDateDiff: Date = new Date(monthDiff)

  const birthDateAndTodayDateResult: number = Math.abs(realAgeDateDiff.getFullYear() - 1970)

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Header headerMessages={headerMessages}></Header>
      <div className="bg-[#EEEEEE]">
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Sobre Mim</p>
          <div className={`w-[80%] ${hammersmithOne.className} text-center text-[20px] flex flex-col gap-5 text-[#202020]`}>
            <p>Olá, Jovem Gafanhoto - Tudo bom contigo? Satisfação em ver você por aqui!</p>
            <p>Deixe-me apresentar-me por um momento: Me chamo <b className="text-red-800"><i>Mathews Martins</i></b>, tenho <b className="text-red-800"><i>{birthDateAndTodayDateResult} anos</i></b> e moro atualmente em <b className="text-red-800"><i>Montes Claros, Minas Gerais</i></b>.</p>
            <p>Estudo programação desde os meus <b className="text-red-800"><i>13 anos</i></b> de idade. Desde então, comecei pequenos projetos pessoais e fui escalonando meus conhecimentos e práticas na área.</p>
            <p>Aos <b className="text-red-800"><i>18 anos</i></b> de idade, comecei a fazer faculdade de <b className="text-red-800"><i>Sistemas de Informação</i></b>. Aos <b className="text-red-800"><i>20 anos</i></b>, realizei meu primeiro estágio na área de <i className="text-[#000000]">Desenvolvimento Mobile (Android e iOS)</i> e também meu primeiro estágio em <i className="text-[#000000]">Desenvolvimento Web.</i></p>
            <p>Já participei/colaborei em alguns projetos de forma <b className="text-red-800"><i>voluntária</i></b>, projetos esses que dei o meu melhor para fazer acontecer e dar certo.</p>
            <p>E desde então, entre idas e vindas, estou há <b className="text-red-800"><i>5 anos</i></b> como programador/desenvolvedor no mercado. Participei também de alguns projetos colaborativos durante esse tempo.</p>
            <p>E esse sou euzinho:</p>
            <Image src="./images/me.png" alt="Uma imagem do autor do website, que é branco, dos olhos castanhos, cabelo baixo, e vestido com camisa social branca." width="1000" height="1000">
            </Image>
            <p>Satisfação em conhecer-lo! Siga abaixo para conhecer mais sobre o meu lado profissional.</p>
          </div>
        </div>
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Contribuições</p>
          <div className={`w-[80%] ${hammersmithOne.className} text-center text-[20px] flex flex-col gap-5 text-[#202020]`}>
            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <time className="text-lg text-gray-900 dark:text-white">Janeiro de 2023 - Agosto de 2023</time>
              <div className="mt-3">
                <Link href="https://discord.gg/sectorcrp" className={`items-center block p-3 sm:flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700 gap-6 text-[#DEDEDE] text-[24px] ${hammersmithOne.className}`} rel="noreferrer" target="_blank">
                  <Image className="w-[40%] h-[40%] mb-3 mr-3 rounded-full sm:mb-0" src="./images/sectorc.webp" alt="Jese Leos image" width="500" height="500"></Image>
                  <b><p>Programador/Desenvolvedor no Sector C (Voluntário)</p></b>
                  <p className="text-[16px]">Sector C RP é um projeto de servidor brasileiro customizado de Grand Theft Auto Online para PC, via FiveM, com uma pegada de Cyber Punk (futurista). Atuo como Tech Leader e programador full-stack no pŕojeto, com LUA, JavaScript, e alguns frameworks front-end (Vue.js, React.js ou JavaScript Nativo + Html + CSS.)</p>
                </Link>
              </div>
            </div>
            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <time className="text-lg text-gray-900 dark:text-white">Dezembro de 2020 - Maio de 2021</time>
              <div className="mt-3">
                <Link href="https://www.linkedin.com/company/educame/" className={`items-center block p-3 sm:flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700 gap-6 text-[#DEDEDE] text-[24px] ${hammersmithOne.className}`} rel="noreferrer" target="_blank">
                  <Image className="w-[40%] h-[40%] mb-3 mr-3 rounded-full sm:mb-0" src="./images/educame.jpg" alt="Jese Leos image" width="500" height="500"></Image>
                  <b><p>Programador/Desenvolvedor na Startup Educame (Voluntário)</p></b>
                  <p className="text-[16px]">Participante e finalista da 9ª edição da Campus Mobile com a Startup Educame, na qual participei como desenvolvedor mobile (Flutter) de um sistema voltado para o auxílio do ensino básico escolar para crianças e adolescentes.</p>
                </Link>
              </div>
            </div>
            <div className="p-5 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <time className="text-lg text-gray-900 dark:text-white">Agosto de 2019 - Novembro de 2019</time>
              <div className="mt-3">
                <Link href="#" className={`items-center block p-3 sm:flex flex-col hover:bg-gray-100 dark:hover:bg-gray-700 gap-6 text-[#DEDEDE] text-[24px] ${hammersmithOne.className}`} rel="noreferrer" target="_blank">
                  <Image className="w-[40%] h-[40%] mb-3 mr-3 rounded-full sm:mb-0" src="./images/clickinnovation.jpg" alt="Jese Leos image" width="500" height="500"></Image>
                  <b><p>Programador/Desenvolvedor na Startup Click Innovation (Voluntário)</p></b>
                  <p className="text-[16px]">Participante e finalista do Agita! (Sebrae - Montes Claros) de 2019 com a Startup Click Innovation, prestando serviço como Desenvolvedor Full Stack Web (PHP) de um sistema de cardápio e pedidos online para lanchonetes e restaurantes.</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Projetos</p>
          <div className={`w-[80%] ${hammersmithOne.className} text-center text-[20px] flex flex-col gap-5 text-[#202020]`}>
            {projectsList.map((project, index) => <Link key={`project_index_${index}`} href={project.projectLink} className={`w-full py-[26px] flex justify-center items-center bg-[#202020] hover:bg-red-800 ${hammersmithOne.className} rounded-[20px] text-[20px] text-[#DEDEDE]`} rel="noreferrer" target="_blank">
              <p className="w-[86%]">{project.projectName}</p>
            </Link>)}
          </div>
        </div>
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Experiências</p>
          <div className={`w-[80%] ${hammersmithOne.className} text-center text-[20px] flex flex-col gap-5 text-[#202020]`}>
            <ol className="relative border-l border-gray-200 dark:border-gray-700">
              <li className={`mb-10 ml-6 ${hammersmithOne.className}`}>
                <span className="absolute flex items-center justify-center w-7 h-7 text-[#DEDEDE] text-[18px] bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                </span>
                <h3 className="mb-6 text-[24px] text-gray-900 dark:text-black">
                  Desenvolvedor Web Full Stack & Desenvolvedor Android na <b className="text-red-800"><i>ABM Technology</i></b>
                </h3>
                <time className="block mb-6 text-[18px] font-normal leading-none text-gray-400 dark:text-gray-500">
                  Abril de 2021 - Junho de 2023
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Responsável por dar manutenção e desenvolver novas funções/recursos - tanto no sistema web / api da empresa, usando MEAN.js (MongoDB, Express.js, Angular.js e Node.js), em um ambiente com containers e CI/CD para os servidores dos clientes - quanto na aplicação android nativa, usando Java no aplicativo, e Angular.js na parte webview (página web local).
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Uso do GitHub para versionamento da aplicação e distribuição (CI/CD) da aplicação em todos os clientes.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Responsável por realizar manutenção nos servidores dos clientes e em seu ambiente configurado (manutenção e configuração do ambiente do docker, para antigos e novos clientes, e manutenção no firewall), e atualização do processo de CI/CD do sistema (tanto no GitHub, quanto nos servidores).
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Responsável por iniciar e começar a migração do sistema da empresa para novas tecnologias disponíveis no mercado, a fim de implementar boas práticas de desenvolvimento da aplicação web e mobile, e reduzir as limitações existentes no cenário atual, por utilizar tecnologias antigas anteriormente. As tecnologias selecionadas foram: Django (com Python 3) + PostgreSql + HTML5 + CSS3 + JavaScript para a parte Web, e React Native (com JavaScript) + RealmDB para a parte Android.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Realizado estudo e prática de DevOps para manutenção dos ambientes.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Liderança do time de desenvolvimento durante parte de minha experiência na empresa.
                </p>
              </li>
              <li className={`mb-10 ml-6 ${hammersmithOne.className}`}>
                <span className="absolute flex items-center justify-center w-7 h-7 text-[#DEDEDE] text-[18px] bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                </span>
                <h3 className="mb-6 text-[24px] text-gray-900 dark:text-black">
                  Desenvolvedor Mobile (Android e iOS) na Startup <b className="text-red-800"><i>Educame</i></b>
                </h3>
                <time className="block mb-6 text-[18px] font-normal leading-none text-gray-400 dark:text-gray-500">
                  Novembro de 2020 - Abril de 2022
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Recebimento, colaboração e liderança no desenvolvimento da aplicação da startup.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilização da framework Flutter (com a linguagem Dart) para o desenvolvimento do aplicativo mobile.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilização do Unity 2D (com a linguagem C#) para desenvolvimento de alguns jogos educacionais relacionados ao objetivo do projeto.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilização do framework Flutter (com a linguagem Dart) para desenvolvimento de alguns jogos educacionais relacionados ao objetivo do projeto.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilização da metodologia ágil Scrum durante o ciclo de desenvolvimento da aplicação.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Entendimento e aplicação da consulta da Rest API pública do WordPress pelo aplicativo.
                </p>
              </li>
              <li className={`mb-10 ml-6 ${hammersmithOne.className}`}>
                <span className="absolute flex items-center justify-center w-7 h-7 text-[#DEDEDE] text-[18px] bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                </span>
                <h3 className="mb-6 text-[24px] text-gray-900 dark:text-black">
                  Desenvolvedor Web Full Stack na <b className="text-red-800"><i>Críston</i></b>
                </h3>
                <time className="block mb-6 text-[18px] font-normal leading-none text-gray-400 dark:text-gray-500">
                  Novembro de 2019 - Dezembro de 2020
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Responsável por desenvolver o site principal da empresa para apresentação dos serviços para possíveis clientes, utilizando PHP Puro, HTML, CSS, JavaScript e Bootstrap 4 (para o front-end).
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Responsável por desenvolver o sistema de OS (Ordem de Serviço) da empresa para troca de documentos entre clientes e funcionários da empresa, utilizando CodeIgniter 4 (em PHP), HTML, CSS, JavaScript e Bootstrap 4 (para o front-end).
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Responsável por levantar tecnologias, requisitos funcionais e não-funcionais para o desenvolvimento de site da empresa e sistema de OS da mesma.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilizado a metodologia ágil XP durante o ciclo de desenvolvimento de ambos os sistemas.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Realizado estudo e prática de PHP durante o estágio realizado na empresa.
                </p>
              </li>
              <li className={`ml-6 ${hammersmithOne.className}`}>
                <span className="absolute flex items-center justify-center w-7 h-7 text-[#DEDEDE] text-[18px] bg-blue-100 rounded-full -left-4 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <FontAwesomeIcon icon={faComputer}></FontAwesomeIcon>
                </span>
                <h3 className="mb-6 text-[24px] text-gray-900 dark:text-black">
                  Desenvolvedor Mobile na <b className="text-red-800"><i>TudOn</i></b>
                </h3>
                <time className="block mb-6 text-[18px] font-normal leading-none text-gray-400 dark:text-gray-500">
                  Maio de 2019 - Agosto de 2019
                </time>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                  - Responsável por dar continuidade ao desenvolvimento da aplicação da empresa, onde foram utilizadas as tecnologias: Xamarin.Forms (com a linguagem C#, para o back-end e XAML, para o front-end da aplicação) e SQLite (dentro da aplicação, para armazenar informações e estados do aplicativo).
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Utilização e prática da metodologia ágil Scrum no ciclo de vida útil do desenvolvimento da aplicação.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Resposável por realizar testes de integração da API com a aplicação mobile, para identificar possíveis erros/alterações necessárias a realizar.
                </p>
                <p className="text-base font-normal text-gray-500 dark:text-gray-400 mt-4">
                  - Realizado estudo e prática de Xamarin.Forms (com C# e XAML), SQLite e Windows Server durante o estágio realizado na empresa.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
