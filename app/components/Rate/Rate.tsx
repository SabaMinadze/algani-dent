import React from 'react'
import s from "./Rate.module.css"
import RateBox from '../RateBox/RateBox'

function Rate() {
  return (
    <>
    <div className={s.rateMainBox}>
        <h1 className={s.rateText}>რას ამბობენ პაციენტები ჩვენზე</h1>
        <div className={s.rateBoxes}>
            <RateBox/>
        </div>
    </div>
    </>
  )
}

export default Rate