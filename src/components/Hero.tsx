import { motion } from 'framer-motion'
import { Play } from 'lucide-react'

export default function Hero() {
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

        <motion.a
          href="https://wa.me/522221728882"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 md:mt-10 inline-flex items-center gap-3 bg-white text-black px-8 py-4 md:px-10 md:py-5 font-oswald text-lg md:text-xl uppercase font-bold tracking-wide hover:bg-white/90 transition-colors cursor-pointer"
        >
          <Play className="w-5 h-5 fill-black" />
          VER TRAILER
        </motion.a>
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
    </section>
  )
}
