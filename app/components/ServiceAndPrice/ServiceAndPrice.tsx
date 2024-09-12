import React from 'react'
import s from "./ServiceAndPrice.module.css"
import Image from 'next/image'
import arrowImage from "./images.png"
import Button from '../Button/Button'
import Link from 'next/link'

function ServiceAndPrice() {
  return (
    <>
    <center><div>
        <h1 className={s.simpleTxtr}>გამარჯობათ ჩვენ გვაქვს ყველაზე ხელმისაწვდომი სერვისები ფასები</h1>
        <h1 className={s.simpleTxt}>იხელედ ჩვენი სერვისები და ფასები აქ</h1>
        <Image src={arrowImage} alt={''} className={s.arrImage}/>
        <br />
        <Link href="/servicesandprices"><Button title="დააჭირე და იხილე"/></Link>
    </div></center>
    </>
  )
}

export default ServiceAndPrice