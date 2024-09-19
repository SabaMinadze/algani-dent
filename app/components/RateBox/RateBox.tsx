import React from 'react'
import s from "./RateBox.module.css"
import Image from 'next/image'
import tooth from "../../../public/tooth.png"

function RateBox() {
  return (
    <>
    <div className={s.rateBox}>
      <div className={s.flexBox}>
        <Image src={tooth} height={90} width={90} className={s.rateBoxImg} alt={'error'}/>
        <h1 className={s.name}>გიორგი ტესტიაშვილი</h1>
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