import React from 'react'
import s from "./HelloTxt.module.css"
import Link from 'next/link'
import Image from 'next/image'
import logo from "./algani.png"

function HelloTxt() {
  return (
    <center><div className={s.mainBox2}>
        <h1 className={s.txt}>ალგანი დენტი</h1>
        <center><Image src={logo} alt='error' height={300}  className={s.img2}/></center>
        <Link href="/questions"><button className={s.btn4}>კითხვა გაქვთ? დაგვიკავშირდით</button></Link>

    </div></center>
  )
}

export default HelloTxt