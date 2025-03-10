import Header from '../components/common/Header'
import InfoGrid from '../components/InfoGrid'
import BackToTop from '../components/BackToTop'
import AboutSection from '../components/sections/AboutSection'
import WatchSection from '../components/sections/WatchSection'
import MinistriesSection from '../components/sections/MinistriesSection'
import EventsSection from '../components/sections/EventsSection'
import GiveSection from '../components/sections/GiveSection'
import Banner from '../components/Banner'

export default function Home() {
  return (
    <div className="">
      <Header />
      <main className="space-y-12 sm:space-y-24 pt-16">
        <section id="home" aria-label="Home" className="relative">
          <Banner />
        </section>
        <section id="about" aria-label="About Us" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <AboutSection />
            <InfoGrid />
          </div>
        </section>
        <section id="watch" aria-label="Watch Services" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto sm:mt-3">
            <WatchSection />
          </div>
        </section>
        <section id="ministries" aria-label="Our Ministries" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <MinistriesSection />
          </div>
        </section>
        <section id="events" aria-label="Upcoming Events" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <EventsSection />
          </div>
        </section>
        <section id="give" aria-label="Give" className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <GiveSection />
          </div>
        </section>
      </main>
      <BackToTop />
    </div>
  )
}