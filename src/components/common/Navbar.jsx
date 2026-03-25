import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navItems = [
  { label: 'About', href: 'about' },
  { label: 'Skills', href: 'skills' },
  { label: 'Experience', href: 'experience' },
  { label: 'Projects', href: 'projects' },
  { label: 'Motion', href: 'motion' },
  { label: 'Videos', href: 'videos' },
  { label: 'Education', href: 'education' },
]

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-navy/90 backdrop-blur-md border-b border-surface-2' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="text-white font-bold text-lg tracking-tight hover:text-accent transition-colors"
        >
          AN<span className="text-accent">.</span>
        </button>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <button
                onClick={() => scrollTo(item.href)}
                className="text-gray-400 hover:text-white text-sm font-medium transition-colors duration-200 hover:text-accent"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Hire Me button */}
        <a
          href="mailto:akarshnavhule@gmail.com"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent-dark text-white text-sm font-semibold rounded-lg transition-colors glow-hover"
        >
          Hire Me
        </a>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-400 hover:text-white"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-navy/95 backdrop-blur-md border-b border-surface-2"
          >
            <ul className="flex flex-col px-4 py-4 gap-4">
              {navItems.map((item) => (
                <li key={item.href}>
                  <button
                    onClick={() => { scrollTo(item.href); setMenuOpen(false) }}
                    className="text-gray-300 hover:text-accent text-base font-medium w-full text-left"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
              <li>
                <a
                  href="mailto:akarshnavhule@gmail.com"
                  className="inline-flex px-4 py-2 bg-accent text-white text-sm font-semibold rounded-lg"
                >
                  Hire Me
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
