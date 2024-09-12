import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'
import s from "./Main.module.css"


function Main() {
  return (
    <>
    <center><div className={s.mainBox1}>
        <h1 className={s.mainTxt}>იხილედ ჩვენი თანამშრომლები რომლებსაც აქვთ მოქნილი ხელი <Link href="/stomatologi"><Button title="დააჭირე აქ"/></Link></h1>
        
    </div></center>
    </>
  )
}

export default Main