import React from 'react'
import s from "./HelloTxt.module.css"

function HelloTxt() {
  return (
    <center><div className={s.mainBox2}>
        <h1>ალგანი დენტი</h1>
        <button className={s.btn3}>კითხვა გაქვთ? დაგვიკავშირდით</button>

    </div></center>
  )
}

export default HelloTxt