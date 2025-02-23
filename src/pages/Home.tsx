import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import InfoGrid from '../components/InfoGrid'
import WorshipSection from '../components/WorshipSection'
import BackToTop from '../components/BackToTop'
import AboutSection from '../components/sections/AboutSection'
import WatchSection from '../components/sections/WatchSection'
import MinistriesSection from '../components/sections/MinistriesSection'
import EventsSection from '../components/sections/EventsSection'
import GiveSection from '../components/sections/GiveSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <div id="home">
        <Banner />
      </div>
      <div id="about">
        <AboutSection />
        <InfoGrid />
      </div>
      <div id="watch">
        <WatchSection />
      </div>
      <div id="ministries">
        <MinistriesSection />
      </div>
      <div id="events">
        <EventsSection />
      </div>
      <div id="give">
        <GiveSection />
      </div>
      <Footer />
      <BackToTop />
    </div>
  )
}