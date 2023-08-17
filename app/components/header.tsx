import Link from 'next/link'

import HeaderButtonDropdown from './header_dropdown_button'

import { kablammo, lilitaOne, pressStart2P } from '../fonts'

interface HeaderObject {
  itemName: string,
  linkAddress: string,
}

export default function Header({headerMessages}: {headerMessages: string[]}) {
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

  return (
    <>
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
    </>
  )
}
