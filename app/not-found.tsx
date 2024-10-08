import Link from 'next/link'
import React from 'react'
import s from "./notfound.module.css"
import logo from "../public/algani.png"
import Image from 'next/image'
import Button from './components/Button/Button'

function notFound() {
  return (
    <>
    <center><div>
        <h1 className={s.notFoundCode}>404</h1>
        <h2 className={s.notFound}>გვერდი არ არსებობს</h2>
        <p className={s.notFoundText}>თქვენს მიერ მოთხოვნილ მისამართზე არაფერი მოიძებნა.</p>
        <Link href="/"><Button title="მთავარი გვერდი"></Button></Link>
        
    </div></center>
    <center><Image src={logo} alt='error' height={200}  className={s.img2}/></center>
    </>
  )
}

export default notFound
