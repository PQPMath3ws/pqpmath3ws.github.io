import Image from 'next/image'
import Link from 'next/link'
import { Metadata } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faInstagram, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { hammersmithOne, kablammo, lilitaOne, pressStart2P } from '../fonts'
import HeaderButtonDropdown from '../components/header_dropdown_button'
import { faComputer } from '@fortawesome/free-solid-svg-icons'

interface HeaderObject {
  itemName: string,
  linkAddress: string,
}

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

  const blogsItems: HeaderObject[] = [
    {
      itemName: "Hacker Sincero",
      linkAddress: "/hacker-sincero/",
    },
    {
      itemName: "Produtor Otimista",
      linkAddress: "/produtor-otimista/",
    },
    {
      itemName: "Programador Louco",
      linkAddress: "/programador-louco/",
    },
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
      projectName: "MobilePress - Um Cliente WordPress Mobile (Flutter (Dart) + MySQL) - Em breve!",
      projectLink: "#",
    },
  ]

  return (
    <div className="w-full h-full overflow-x-hidden">
      <div className="w-max h-[30px] flex gap-8 bg-[#202020] pl-[8px] pr-[8px] relative overflow-x-hidden overflow-y-hidden">
        <div className="w-max h-full flex justify-around gap-8 items-center overflow-x-hidden overflow-y-hidden whitespace-nowrap relative animate-[headerMoviment_34s_linear_infinite]">
          {headerMessages.map((message, index) => (<div className={`${lilitaOne.className} text-[#DEDEDE] text-[12px] inline-block`} key={"header1_" + index}>{message.toUpperCase()}</div>))}
        </div>
        <div className="w-max h-full flex justify-around gap-8 items-center overflow-x-hidden overflow-y-hidden whitespace-nowrap relative animate-[headerMoviment_34s_linear_infinite]">
          {headerMessages.map((message, index) => (<div className={`${lilitaOne.className} text-[#DEDEDE] text-[12px] inline-block`} key={"header2_" + index}>{message.toUpperCase()}</div>))}
        </div>
      </div>
      <div className="w-full h-[120px] flex justify-center items-center bg-[#202020] border-b-4 border-red-800 border-solid">
        <p className={`${kablammo.className} text-[#DEDEDE] sm:text-[38px] md:text-[58px] lg:text-[58px] xl:text-[68px] 2xl:text-[78px]`}>
          Mathews Martins
        </p>
      </div>
      <div className={`w-full h-[38px] flex items-center justify-around ${pressStart2P.className} text-[#DEDEDE] text-[10px] bg-[#101010] border-b-4 border-red-800 border-solid`}>
        <Link href="/inicio">Início</Link>
        <HeaderButtonDropdown headerItemName="Blogs" items={blogsItems} marginTopAdjust="mt-[173px]"></HeaderButtonDropdown>
        <Link href="/extras">Extras</Link>
      </div>
      <div className="bg-[#EEEEEE]">
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Sobre Mim</p>
          <div className={`w-[80%] ${hammersmithOne.className} text-center text-[20px] flex flex-col gap-5 text-[#202020]`}>
            <p>Olá, Jovem Gafanhoto - Tudo bom contigo? Satisfação em ver você por aqui!</p>
            <p>Deixe-me apresentar-me por um momento: Me chamo <b className="text-red-800"><i>Mathews Martins</i></b>, tenho <b className="text-red-800"><i>24 anos</i></b> e moro atualmente em <b className="text-red-800"><i>Montes Claros, Minas Gerais</i></b>.</p>
            <p>Estudo programação desde os meus <b className="text-red-800"><i>13 anos</i></b> de idade. Desde então, comecei pequenos projetos pessoais e fui escalonando meus conhecimentos e práticas na área.</p>
            <p>Aos <b className="text-red-800"><i>18 anos</i></b> de idade, comecei a fazer faculdade de <b className="text-red-800"><i>Sistemas de Informação</i></b>. Aos <b className="text-red-800"><i>20 anos</i></b>, realizei meu primeiro estágio na área de <i className="text-[#000000]">Desenvolvimento Mobile (Android e iOS)</i> e também meu primeiro estágio em <i className="text-[#000000]">Desenvolvimento Web.</i></p>
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
              <time className="text-lg text-gray-900 dark:text-white">Janeiro de 2023 - Atualmente</time>
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
                  Manutenção e criação de novas features de sistema legacy construído na Stack MEAN.js (MongoDB, Express.js, Angular.js & Node.js); Manutenção e criação de novas features no aplicativo Android Java Nativo (com Angular.js no webview); Adaptação do sistema para nova tecnologia (Django / Python & Django) no web com Docker; Adaptação do sistema mobile para nova tecnologia (React Native & RealmDB);
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
                  Desenvolvimento de aplicação mobile (Android e iOS) em Flutter (Dart), consultando API pública do WordPress; Adaptação e correção de jogos educativos no Unity 2D (C#) e no Flutter (Dart).
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
                  Desenvolvimento de página principal da empresa (PHP Puro); Desenvolvimento de sistema OS (Ordem de Serviço) em CodeIgniter 4 (PHP + MySQL + Bootstrap 4)
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
                  Desenvolvimento e manutenção de aplicação mobile (Android & iOS) usando Xamarin.Forms (C# + XAML + MySQL), com servidor (Windows Server) próprio; Manutenção de website WordPress (PHP 7 + MySQL).
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="w-full sm:h-[180px] md:h-[200px] lg:h-[240px] xl:h-[260px] 2xl:h-[280px] flex flex-col justify-center items-center bg-[#202020]">
        <p className={`${pressStart2P.className} text-[#DEDEDE] sm:text-[12px] md:text-[14px] lg:text-[18px] xl:text-[20px] 2xl:text-[24px]`}>Me siga/adicione nas redes sociais:</p>
        <div className="mt-[16px] flex sm:gap-5 md:gap-6 lg:gap-7 xl:gap-8 2xl:gap-9">
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.facebook.com/pqpmath3ws/" aria-label="Facebook" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#4267B2]" icon={faFacebookSquare}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://github.com/PQPMath3ws/" aria-label="GitHub" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#DEDEDE]" icon={faGithub}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.instagram.com/pqpmath3ws/" aria-label="Instagram" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#BC2A8D]" icon={faInstagram}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.linkedin.com/in/pqpmath3ws/" aria-label="LinkedIn" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#0077B5]" icon={faLinkedin}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://t.me/PQPMath3ws/" aria-label="Telegram" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#229ED9]" icon={faTelegram}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.twitch.com/pqpmath3ws/" aria-label="Twitch" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#6441A5]" icon={faTwitch}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.twitter.com/pqpmath3ws/" aria-label="Twitter" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#1DA1F2]" icon={faTwitterSquare}></FontAwesomeIcon>
          </Link>
          <Link className="sm:text-[30px] md:text-[36px] lg:text-[50px] xl:text-[50px] 2xl:text-[50px]" href="https://www.youtube.com/c/PQPMath3ws/" aria-label="YouTube" rel="noreferrer" target="_blank">
            <FontAwesomeIcon className="text-[#FF0000]" icon={faYoutube}></FontAwesomeIcon>
          </Link>
        </div>
      </div>
    </div>
  )
}
