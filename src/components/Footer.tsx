import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center md:items-start gap-2"
          >
            <span className="font-oswald text-sm font-bold tracking-[0.3em] uppercase text-white/60">
              PG Estrategias
            </span>
            <span className="font-inter text-xs text-white/25">
              © 2026 PG Estrategias. Strictly Confidential.
            </span>
          </motion.div>

          {/* Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-8"
          >
            <a
              href="#"
              className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase"
            >
              Términos
            </a>
            <span className="text-white/10">|</span>
            <a
              href="#"
              className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase"
            >
              Privacidad
            </a>
            <span className="text-white/10">|</span>
            <a
              href="https://wa.me/522221728882"
              target="_blank"
              rel="noopener noreferrer"
              className="font-inter text-xs text-white/30 hover:text-white/60 transition-colors tracking-wide uppercase"
            >
              Contacto
            </a>
          </motion.div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-white/5 to-transparent" />

        {/* Made with text */}
        <p className="text-center mt-6 font-inter text-[10px] text-white/15 tracking-[0.2em] uppercase">
          Producido con pasión en Puebla, México
        </p>
      </div>
    </footer>
  )
}
