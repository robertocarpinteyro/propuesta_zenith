import { motion } from 'framer-motion'
import { Sparkles, Check } from 'lucide-react'
import { fadeUp } from '../lib/motion'

const deliverables = [
  { label: '1 Spot Hero', desc: 'Cinemático 60" — Guión, producción, post-producción completa' },
  { label: '4 Reels Spin-off', desc: 'Formato 9:16 optimizado para Instagram / TikTok / Meta Ads' },
  { label: 'Fotografía Premium', desc: '50+ fotografías editoriales de cada vehículo protagonista' },
]

export default function Investment() {
  return (
    <section id="inversion" className="relative py-40 md:py-52 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/sunset.png"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40" />
      </div>

      {/* Ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-primary/8 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-8 text-center">
        {/* Label */}
        <motion.span
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0}
          className="inline-block text-primary font-inter text-xs md:text-sm tracking-[0.4em] uppercase font-semibold mb-8"
        >
          Alcance del Proyecto
        </motion.span>

        {/* Deliverables */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.15}
          className="vice-glass rounded-2xl p-8 md:p-12 mb-12"
        >
          <div className="space-y-6">
            {deliverables.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 text-left border-b border-white/5 pb-5 last:border-0 last:pb-0"
              >
                <div className="mt-0.5 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3.5 h-3.5 text-primary" />
                </div>
                <div>
                  <h4 className="font-oswald text-lg md:text-xl uppercase tracking-wide text-white font-semibold">
                    {item.label}
                  </h4>
                  <p className="font-inter text-sm text-muted-foreground mt-1">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Price */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.3}
        >
          <p className="font-inter text-sm text-muted-foreground tracking-wide uppercase mb-3">
            Inversión Total
          </p>
          <h3 className="font-anton text-6xl md:text-8xl lg:text-9xl text-white tracking-tighter">
            $55,000
            <span className="text-2xl md:text-4xl text-muted-foreground ml-2 font-oswald font-normal">
              MXN
            </span>
          </h3>
          <p className="font-inter text-sm text-muted-foreground mt-3">
            Precio fijo. Sin costos ocultos. No incluye IVA, en caso de requerir factura es + IVA.
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={0.45}
          className="mt-12 md:mt-16"
        >
          <motion.a
            href="https://wa.me/522221728882"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="glow-button inline-flex items-center gap-3 px-12 py-5 md:px-16 md:py-6 rounded-full text-white font-oswald text-xl md:text-2xl uppercase tracking-widest font-bold cursor-pointer"
          >
            <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
            Aprobar Propuesta
          </motion.a>

          <p className="font-inter text-xs text-muted-foreground mt-6 tracking-wide">
            Al aprobar, agendaremos una reunión de kick-off dentro de 48 horas.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
