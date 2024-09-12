import React from 'react'
import s from "./RateBox.module.css"
import Image from 'next/image'
import saba from "./saba.jpg"

function RateBox() {
  return (
    <>
    <div className={s.rateBox}>
      <div className={s.flexBox}>
        <Image src={saba} height={90} width={90} className={s.rateBoxImg}/>
        <h1 className={s.name}>საბა მინაზე</h1>
      </div>
      <p>რაც AlgoUni-ს შემოვუერთდი, დიდ პროგრესს ვხედავ ჩემი სწავლის პროცესში.
         წინდაწინ მივიწევ. მენტორი ყოველთვის მაქსიმალურად ცდილობს დამეხმაროს.
          ჩემთვის ეს გარემო ზუსტად ისაა, რაც მჭირდება. მუხტი არასდროს ეცემა.
           მადლობას გიხდით ამისთვის ყველა თქვენგანს!</p>
    </div>
    </>
  )
}

export default RateBox