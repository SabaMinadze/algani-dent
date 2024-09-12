import React from 'react'
import s from "./RateBox.module.css"
import Image from 'next/image'
import saba from "./saba.jpg"

function RateBox() {
  return (
    <>
    <div className={s.rateBox}>
      <Image src={saba} height={90} width={90} className={s.rateBoxImg}/>
    </div>
    </>
  )
}

export default RateBox