import React from 'react'
import Button from '../Button/Button'
import Link from 'next/link'


function Main() {
  return (
    <>
    <center><div>
        <h1>იხილედ ჩვენი თანამშრომლები რომლებსაც აქვთ მოქნილი ხელი <Link href="/stomatologi"><Button title="დააჭირე აქ"/></Link></h1>
        
    </div></center>
    </>
  )
}

export default Main