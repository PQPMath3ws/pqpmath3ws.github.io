'use client'

import Link from 'next/link'
import { useState } from 'react'

interface HeaderObject {
  itemName: string,
  linkAddress: string,
}

export default function HeaderButtonDropdown({headerItemName, items, marginTopAdjust}: {headerItemName: string, items: HeaderObject[], marginTopAdjust: string}) {
  const [dropdownOpenedStatus, setDropdownOpenedStatus] = useState(false);

  return (
    <div className="w-fit relative flex justify-center items-center gap-1 cursor-pointer" onClick={() => setDropdownOpenedStatus(!dropdownOpenedStatus)}>
      <div>{headerItemName}</div>
      <div className={`w-[56vw] absolute ${dropdownOpenedStatus ? "flex flex-col" : "hidden"} bg-[#101010] ${marginTopAdjust}`}>
        {items.map((item, index) => <div className={`py-[14px] px-[20px] hover:bg-red-800 ${index !== items.length - 1 ? "border-b-[1px] border-white border-solid" : ""}`} key={`header_index_${index}`}>
          <Link href={item.linkAddress}>{item.itemName}</Link>
        </div>)}
      </div>
    </div>
  );
}
