import React, { useEffect } from 'react'
import Nav from './Nav'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

export default function Parallax() {
  return (
    <div className="h-screen overflow-y-auto overflow-x-hidden pb-12 sm:pb-0 relative scroll-smooth perspective">
        <Nav />
        <Header />
        <Main />
        <Footer />
    </div>
  )
}
