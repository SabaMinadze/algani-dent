import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Video from './components/Video/Video'
import styles from './page.module.css'
import Burgernav from './components/Burgernav/Burgernav'
import Image from 'next/image'
import HelloTxt from './components/HelloTxt/HelloTxt'
import Rate from './components/Rate/Rate'
import ServiceAndPrice from './components/ServiceAndPrice/ServiceAndPrice'


function page() {
  return (
    <>
    <Burgernav/>
    <HelloTxt/>
    <ServiceAndPrice/>
    <Rate/>
    </>
  )
}

export default page
