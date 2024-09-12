import React from 'react'
import s from "./RateBox.module.css"
import Image from 'next/image'
import saba from "./saba.jpg"

function RateBox() {
  return (
    <>
    <div className={s.rateBox}>
      <div className={s.flexBox}>
        <Image src={saba} height={90} width={90} className={s.rateBoxImg} alt={'error'}/>
        <h1 className={s.name}>საბა მინაზე</h1>
      </div>
      <p className={s.txt}>ეს არის ადგილი, სადაც  მეგობრობა, ნდობა და პასუხისმგებლობა ღირებულია,
         რადგან თითოეული მენტორი თითოეული სტუდენტისთვის აბსოლუტურ  რესურსს და ენერგიას
          ხარჯავს, რომ მათი ცოდნა იყოს სიღრმისეული და მყარი, როგორც თეორიულ ნაწილში ასევე
           პრაქტიკულ საკითხში.</p>
    </div>
    </>
  )
}

export default RateBox