import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGithub, faInstagram, faLinkedin, faTelegram, faTwitch, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons'

import { pressStart2P } from '../fonts'

export default function Footer() {
  return (
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
  );
}
