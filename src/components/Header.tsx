// Remove the React import since it's not directly used
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import logoImage from '../assets/Logo.png'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NBBC Logo" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              About
            </button>
            <button onClick={() => scrollToSection('watch')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              Watch
            </button>
            <button onClick={() => scrollToSection('ministries')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              Ministries
            </button>
            <button onClick={() => scrollToSection('events')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              Events
            </button>
            <button onClick={() => scrollToSection('give')} className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer">
              Give
            </button>
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}