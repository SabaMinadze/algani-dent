import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Video from './components/Video/Video'
import styles from './page.module.css'
import Burgernav from './components/Burgernav/Burgernav'
import Image from 'next/image'


function page() {
  return (
    <>
    <div className={styles.box}>
    <Burgernav/>
    </div>
    </>
  )
}

export default page
