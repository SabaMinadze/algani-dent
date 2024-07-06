import React from 'react'
import Subnav from './components/Subnav/Subnav'
import Video from './components/Video/Video'
import styles from './page.module.css'
import Burgernav from './components/Burgernav/Burgernav'
import Link from 'next/link'


function page() {
  return (
    <>
    <div className={styles.box}>
    <Subnav/>
    <Burgernav/>
    <h1>გამარჯობათ ალგანი დენტის ვებსაიტზე</h1>
    <h2>Test h2 tag</h2>
    </div>
    </>
  )
}

export default page
