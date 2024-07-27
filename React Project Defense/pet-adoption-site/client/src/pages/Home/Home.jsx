import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import MainContent from '../../components/MainContent/MainContent'
import './Home.css'

export default function Home() {
  return (
    <div className='home'>
      <Header/>
      <MainContent />
      <Footer />
    </div>
  )
}
