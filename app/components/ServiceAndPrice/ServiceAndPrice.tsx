import React from 'react'
import s from "./ServiceAndPrice.module.css"
import Image from 'next/image'
import arrowImage from "./arr2.jpg"

function ServiceAndPrice() {
  return (
    <>
    <div>
        <h1>იხელედ ჩვენი სერვისები და ფასები აქ</h1>
        <div className={s.line}>a</div>
        <button className={s.arrowButton}>
            <div className={s.arrow}></div>
        </button>
    </div>
    </>
  )
}

export default ServiceAndPrice