import { motion } from 'framer-motion'
import { Map, Video, Share2 } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const phases = [
  {
    icon: Map,
    title: '1. PRE-PRODUCCIÓN E INTELIGENCIA',
    description:
      'Iniciamos con una junta creativa para alinear la dirección de la marca y limitar los alcances. Realizamos un minucioso estudio de mercado para perfilar la audiencia. Esto se complementa con un riguroso scouting de locaciones y la gestión milimétrica de necesidades corporativas (talento, vehículos y logística) para asegurar la perfección en el set.',
  },
  {
    icon: Video,
    title: '2. PRODUCCIÓN Y POST-PRODUCCIÓN',
    description:
      'Un rodaje estructurado de dos días cubriendo locaciones estratégicas y sucursales. Desplegamos un equipo profesional de alto rendimiento equipado con cámaras de calidad cinematográfica, seguimiento aéreo dinámico (drones) e iluminación de estándar estudio. El resultado final asegura un ritmo visual premium y corrección de color técnica.',
  },
  {
    icon: Share2,
    title: '3. ESTRATEGIA DIGITAL Y DISTRIBUCIÓN',
    description:
      'No solo entregamos material audiovisual; construimos una maquinaria de retención. Entregamos una parrilla de contenido estratégica para la distribución del material en redes sociales. El contenido está adaptado para impactar a múltiples segmentos a través de algoritmos, maximizando el engagement y conversiones.',
  },
]

export default function TechSpecs() {
  return (
    <section
      id="metodologia"
      className="relative py-32 md:py-40 overflow-hidden bg-black"
    >
      {/* Dynamic Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dieszqcrn/image/upload/v1776281799/Gemini_Generated_Image_h30mv7h30mv7h30m_tjzjyl.png"
          alt="Producción Background"
          className="w-full h-full object-cover opacity-50 mix-blend-overlay"
        />
        {/* Dark overlays to maintain readability */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
      </div>

      {/* Background ambient glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[250px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[200px] pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-20 text-center md:text-left"
        >
          <span className="text-accent font-inter text-xs md:text-sm tracking-[0.4em] uppercase font-medium block mb-4">
            Metodología Cinematográfica
          </span>
          <h2 className="font-anton text-4xl md:text-5xl lg:text-6xl uppercase text-white tracking-tight">
            INFRAESTRUCTURA <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">DE PRODUCCIÓN</span>
          </h2>
        </motion.div>

        {/* Phases Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
        >
          {phases.map((phase, i) => {
            const Icon = phase.icon
            return (
              <motion.div
                key={phase.title}
                variants={fadeUp}
                custom={i * 0.1}
                className="group relative p-8 md:p-10 rounded-2xl border border-white/5 hover:border-primary/30 transition-all duration-500 bg-white/[0.02] hover:bg-white/[0.04] flex flex-col h-full"
              >
                {/* Icon */}
                <div className="mb-8 relative self-start">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-white/5 to-white/10 flex items-center justify-center group-hover:from-primary/20 group-hover:to-secondary/20 transition-all duration-500 border border-white/10 group-hover:border-primary/20">
                    <Icon className="w-7 h-7 text-white/70 group-hover:text-white transition-colors duration-500" />
                  </div>
                  {/* Glow effect on hover */}
                  <div className="absolute -inset-3 rounded-2xl bg-primary/0 group-hover:bg-primary/10 blur-2xl transition-all duration-500" />
                </div>

                {/* Title */}
                <h3 className="font-oswald text-xl md:text-2xl uppercase tracking-wide text-white font-semibold mb-4">
                  {phase.title}
                </h3>

                {/* Description */}
                <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed flex-grow">
                  {phase.description}
                </p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/50 transition-all duration-700" />
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
