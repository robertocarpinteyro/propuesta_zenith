import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 md:px-16 py-5 flex items-center justify-between transition-all duration-500 ${
        scrolled ? 'vice-glass' : 'bg-transparent'
      }`}
    >
      {/* Logo */}
      <a href="https://www.pgestrategias.com/" target="_blank" rel="noopener noreferrer" className="font-oswald text-lg md:text-xl font-bold tracking-[0.25em] uppercase text-white">
        PG Estrategias
      </a>

      {/* Desktop CTA */}
      <a
        href="https://wa.me/522221728882"
        target="_blank"
        rel="noopener noreferrer"
        className="hidden md:inline-flex items-center px-6 py-2.5 rounded-full vice-glass text-sm font-inter font-medium tracking-wide text-white/90 hover:border-primary hover:text-white transition-all duration-300 hover:shadow-[0_0_20px_hsl(320_100%_60%/0.3)]"
      >
        Agendar Kick-off
      </a>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="md:hidden flex flex-col gap-1.5 z-50"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={mobileOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          className="block w-6 h-0.5 bg-white"
        />
        <motion.span
          animate={mobileOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
          className="block w-6 h-0.5 bg-white"
        />
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 z-40"
          >
            <a
              href="#concepto"
              onClick={() => setMobileOpen(false)}
              className="font-oswald text-3xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              Concepto
            </a>
            <a
              href="#lineup"
              onClick={() => setMobileOpen(false)}
              className="font-oswald text-3xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              Lineup
            </a>
            <a
              href="#produccion"
              onClick={() => setMobileOpen(false)}
              className="font-oswald text-3xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
            >
              Producción
            </a>
            <a
              href="https://wa.me/522221728882"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="mt-4 px-8 py-3 rounded-full glow-button text-white font-inter font-semibold text-lg"
            >
              Agendar Kick-off
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
