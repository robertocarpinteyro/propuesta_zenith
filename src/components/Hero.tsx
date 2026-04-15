import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

export default function Hero() {
  const [trailerOpen, setTrailerOpen] = useState(false)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (trailerOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [trailerOpen])

  return (
    <section id="hero" className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="https://res.cloudinary.com/dieszqcrn/video/upload/v1776232320/hf_20260415_044155_7e3ed989-8568-42e2-b29a-a993cba3af9e_zvv2ev.mp4"
          type="video/mp4"
        />
      </video>

      {/* Vignette Overlay */}
      <div className="absolute inset-0 hero-vignette z-[2]" />

      {/* Noise Layer */}
      <div className="absolute inset-0 noise-overlay z-[3]" />

      {/* Content */}
      <div className="absolute bottom-16 md:bottom-20 left-6 md:left-20 z-10 max-w-4xl">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-anton text-7xl md:text-[10rem] leading-[0.85] uppercase tracking-tighter text-white"
        >
          ZENITH
          <br />
          <span className="gta-gradient-text">MOTORS</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-lg md:text-2xl font-inter font-light text-white/60 mt-4 md:mt-6 max-w-xl"
        >
          El Motor de tu Vida. Propuesta de Campaña por{' '}
          <span className="text-white/90 font-medium">PG Estrategias</span>.
        </motion.p>

        <motion.button
          onClick={() => setTrailerOpen(true)}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 font-oswald text-lg md:text-xl uppercase font-bold tracking-wide hover:bg-white/90 transition-colors cursor-pointer rounded-full"
        >
          <Play className="w-5 h-5 fill-black" />
          VER TRAILER
        </motion.button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-white/30 text-xs font-inter tracking-[0.3em] uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent"
        />
      </motion.div>

      {/* Trailer Modal Popup */}
      <AnimatePresence>
        {trailerOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setTrailerOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl bg-black border border-white/10"
            >
              {/* Close button */}
              <button
                onClick={() => setTrailerOpen(false)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-full flex items-center justify-center transition-all text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Video Player */}
              <div className="relative aspect-video w-full bg-black">
                <video
                  src="https://res.cloudinary.com/dieszqcrn/video/upload/v1776232320/hf_20260415_044155_7e3ed989-8568-42e2-b29a-a993cba3af9e_zvv2ev.mp4"
                  autoPlay
                  controls
                  playsInline
                  className="w-full h-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
