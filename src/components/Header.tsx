 
import { Link } from 'react-router-dom'
import MobileNav from './MobileNav'
import logoImage from '../assets/Logo.png'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  const navigationItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'watch', label: 'Watch' },
    { id: 'ministries', label: 'Ministries' },
    { id: 'events', label: 'Events' },
    { id: 'give', label: 'Give' }
  ]

  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center">
            <img src={logoImage} alt="NBBC Logo" className="h-12 w-auto" />
          </Link>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-[#0D92F4] hover:text-[#FFB200] cursor-pointer"
              >
                {label}
              </button>
            ))}
          </nav>

          <MobileNav />
        </div>
      </div>
    </header>
  )
}