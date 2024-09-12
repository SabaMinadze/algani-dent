import React from 'react'
import s from "./HelloTxt.module.css"
import Link from 'next/link'
import Image from 'next/image'

function HelloTxt() {
  return (
    <center><div className={s.mainBox2}>
        <h1>ალგანი დენტი</h1>
        <center><Image src={logo} alt='error' height={200}  className={s.img2}/></center>
        <Link href="/asdda"><button className={s.btn4}>კითხვა გაქვთ? დაგვიკავშირდით</button></Link>

    </div></center>
  )
}

export default HelloTxt