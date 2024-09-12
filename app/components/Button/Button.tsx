import React from 'react'
import s from "./Button.module.css"

function Button(props) {
  return (
    <>
    <button className={s.btnMain}>{props.title}</button>
    </>
  )
}

export default Button