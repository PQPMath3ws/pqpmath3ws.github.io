'use client'

import Image from 'next/image'
import Link from 'next/link'

// @ts-ignore
import Flickity from 'react-flickity-component'

import { openSans } from '../fonts'

import MusicsList from './musics_list.json'

import './flickity.css'

export default function MusicsSlide() {
  return (
    <Flickity reloadOnUpdate={true}>
      {MusicsList.map((music, index) => <div key={`music_index_${index}`} className="w-[300px] inline-block mb-[20px] mr-[40px]">
        <div>
          <Image src={`./images/capa_musicas/${music.musicPhotoFile}`} width={300} height={300} alt=""></Image>
        </div>
        <div className={`bg-[#2E2E2E] font-bold text-[#FFFFFF] text-[15px] ${openSans.className}`}>
          <p className="pt-[12px] italic">{music.musicTitle}</p>
          <p className="pt-[12px] pb-[12px] italic text-[11px]">Escolha o serviço de streaming favorito para ouvir:</p>
        </div>
        <div className="border-solid border-l-2 border-r-2 border-b-2 border-l-red-800 border-r-red-800 border-b-red-800 mb-[20px] pt-[4px]">
          <ul className="list-none">
            {music.amazonLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/amazon_music.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.amazonLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.deezerLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/deezer.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.deezerLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.iTunesLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/itunes.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.iTunesLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.napsterLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/napster.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.napsterLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.shazamLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/shazam.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.shazamLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.soundCloudLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/soundcloud.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.soundCloudLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.spotifyLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/spotify.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.spotifyLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.tiktokLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/tiktok.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.tiktokLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.yandexLink !== "" && <li className="mb-[20px] divide-red-800">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/yandex.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.yandexLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
              <hr></hr>
            </li>}
            {music.youTubeLink !== "" && <li className="mb-[20px]">
              <div className="flex justify-between mx-[14px] my-[14px]">
                <Image src="./images/logos/youtube.png" width={140} height={80} alt=""></Image>
                <Link className="text-[13px] uppercase bg-red-800 rounded-lg text-[#DEDEDE] px-[10px] py-[10px]" href={music.youTubeLink} rel="noreferrer" target="_blank">Reproduzir</Link>
              </div>
            </li>}
          </ul>
        </div>
      </div>)}
    </Flickity>
  )
}
