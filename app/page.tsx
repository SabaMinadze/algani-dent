import React from 'react'
import Burgernav from './components/Burgernav/Burgernav'
import HelloTxt from './components/HelloTxt/HelloTxt'
import ServiceAndPrice from './components/ServiceAndPrice/ServiceAndPrice'
import Main from './components/Main/Main'


function page() {
  return (
    <>
    <Burgernav/>
    <HelloTxt/>
    <ServiceAndPrice/>
    <Main/>
    </>
  )
}

export default page
