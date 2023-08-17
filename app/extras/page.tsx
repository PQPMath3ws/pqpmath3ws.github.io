import { Metadata } from 'next'

import Footer from '../components/footer'
import Header from '../components/header'
import { hammersmithOne, pressStart2P } from '../fonts'
import MusicsSlide from './musics_slide'

export const metadata: Metadata = {
  title: 'PQPMath3ws | Extras',
  description: 'Porfólio Pessoal & Portal Gratuito de Informações sobre Hacking & Segurança Digital, Programação, Produção Musical e o que mais EU dominar hahaha',
  verification: {
    google: "oL4MxYP2fowyLzvCkMY7M8c4MrjlN0uNjd3dbLpegJg",
  },
}

export default function PaginaDeExtras() {
  const headerMessages: string[] = [
    "Seja bem-vindo ao meu site",
    "Essa é a página de um amante da música e da tecnologia",
    "Extras? O que é isso?",
    "Mexer com música é um dos meus hobbies favoritos",
    "Dizem que canto bem e eu finjo que acredito",
    "Toco vários instrumentos atualmente",
    "Eclético? Com certeza!",
    "Atualmente, estou aprendendo a tocar violino",
    "Bora um projetinho?",
    "Legal ;)",
  ]

  return (
    <div className="w-full h-full overflow-x-hidden">
      <Header headerMessages={headerMessages}></Header>
      <div className="bg-[#EEEEEE]">
        <div className="pt-[30px] flex flex-col items-center gap-12 pb-[30px] border-b-4 border-red-800 border-solid">
          <p className={`${pressStart2P.className} bg-[#202020] text-[#DEDEDE] text-[30px] px-[14px] py-[14px] rounded-xl`}>Músicas</p>
          <div className={`w-[90%] ${hammersmithOne.className} text-center text-[20px] mt-[10px] mb-[30px] flex flex-col gap-5 text-[#202020]`}>
            <MusicsSlide></MusicsSlide>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  )
}
