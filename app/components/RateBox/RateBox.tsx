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
      <p className={s.txt}>Lorem ipsum dolor sit amet consectetur,
         adipisicing elit. Aut, distinctio et placeat molestiae
          atque repudiandae voluptate dolore accusamus, quidem iusto 
          cumque dolorem necessitatibus consequuntur dolor commodi consequatur
           magni itaque earum!</p>
    </div>
    </>
  )
}

export default RateBox