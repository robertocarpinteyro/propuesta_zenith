import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Zap, Target, Crosshair, BarChart, Radar } from 'lucide-react'
import { fadeUp, staggerContainer } from '../lib/motion'

const cards = [
  {
    id: 1,
    video:
      'https://res.cloudinary.com/dieszqcrn/video/upload/v1776280477/hf_20260415_043026_0712022b-7423-4a91-bc65-8c5569f10d30_1_jjcjua.mp4',
    title: 'ESPÍRITU LIBRE',
    subtitle: 'Aventura • Off-Road UGC',
    accent: 'from-green-500/40 to-emerald-800/20',
    statsColor: 'text-green-400',
    barColor: 'bg-green-500',
    bgGlow: 'bg-green-500/20',
    profile: {
      segment: 'Aventura Joven / Exploración',
      target: 'Generación Z tardía a Millennial (24 - 35 años)',
      description:
        'El Spin-off diseñado para quienes buscan escapar de la rutina. Transmite libertad, independencia y una energía inagotable. El segmento se identifica con la narrativa cruda y sin filtros (UGC) porque sienten que son ellos mismos detrás del volante.',
      skills: [
        { name: 'ADRENALINA', value: 95 },
        { name: 'AUTENTICIDAD', value: 90 },
        { name: 'STATUS', value: 60 },
      ],
    },
  },
  {
    id: 2,
    video:
      'https://res.cloudinary.com/dieszqcrn/video/upload/v1776280477/hf_20260415_044155_7e3ed989-8568-42e2-b29a-a993cba3af9e_yfjuat.mp4',
    title: 'ALTO VOLTAJE',
    subtitle: 'Deportivos • Cinematic High-Speed',
    accent: 'from-red-500/40 to-pink-800/20',
    statsColor: 'text-red-400',
    barColor: 'bg-red-500',
    bgGlow: 'bg-red-500/20',
    profile: {
      segment: 'Éxito Joven / Adrenalina Social',
      target: 'Millennials (28 - 40 años)',
      description:
        'Captura la esencia de la vida nocturna, el éxito compartido y la máxima sofisticación. Este perfil se identifica con tomas cinematográficas espectaculares y veloces, visualizando el vehículo como un símbolo definitivo de logro social.',
      skills: [
        { name: 'VELOCIDAD', value: 98 },
        { name: 'LIDERAZGO', value: 85 },
        { name: 'ESTILO', value: 95 },
      ],
    },
  },
  {
    id: 3,
    video:
      'https://res.cloudinary.com/dieszqcrn/video/upload/v1776280476/hf_20260415_044258_9ee19b35-210a-4726-91db-644d532cffd4_oells7.mp4',
    title: 'PODER EJECUTIVO',
    subtitle: 'Luxury Segment • Testimonial',
    accent: 'from-orange-500/40 to-amber-800/20',
    statsColor: 'text-orange-400',
    barColor: 'bg-orange-500',
    bgGlow: 'bg-orange-500/20',
    profile: {
      segment: 'Liderazgo / Visión Empresarial',
      target: 'Generación X y Boomers (45 - 60+ años)',
      description:
        'Se dirige al individuo que ya ha construido su imperio. Busca confort, determinación y elegancia sobria. La narrativa proyecta autoridad y control; el prospecto se ve a sí mismo como el dueño del terreno y de su propio tiempo.',
      skills: [
        { name: 'AUTORIDAD', value: 99 },
        { name: 'CONFORT', value: 90 },
        { name: 'INFLUENCIA', value: 88 },
      ],
    },
  },
  {
    id: 4,
    video:
      'https://res.cloudinary.com/dieszqcrn/video/upload/v1776280734/hf_20260415_051905_81aaa998-2668-4331-bbda-f8c1667a6d83_tpkir3.mp4',
    title: 'TENDENCIA DIGITAL',
    subtitle: 'Comunidad • Vlog / Streamers',
    accent: 'from-blue-500/40 to-cyan-800/20',
    statsColor: 'text-cyan-400',
    barColor: 'bg-cyan-500',
    bgGlow: 'bg-cyan-500/20',
    profile: {
      segment: 'Conectividad / Creadores de Cultura',
      target: 'Generación Z y Alpha (18 - 28 años)',
      description:
        'Este Spin-off ubica al vehículo en el centro de la cultura digital contemporánea. Ideal para perfiles nativos digitales que valoran la conexión, la comunidad y estar constantemente en tendencia dentro de su red.',
      skills: [
        { name: 'NETWORKING', value: 95 },
        { name: 'TENDENCIA', value: 92 },
        { name: 'VIRALIDAD', value: 88 },
      ],
    },
  },
]

export default function Lineup() {
  const [activeCard, setActiveCard] = useState<typeof cards[0] | null>(null)

  // Disable body scroll when modal is open
  useEffect(() => {
    if (activeCard) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [activeCard])

  return (
    <section id="lineup" className="relative py-24 md:py-32 bg-black overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[250px] pointer-events-none" />

      {/* Section Header and Explanation */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16 md:mb-24 px-6 relative z-10"
      >
        <span className="text-primary font-inter text-sm tracking-[0.3em] uppercase font-medium">
          Historias que Conectan
        </span>
        <h2 className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white mt-4 mb-8">
          EL <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">SPOT HERO</span> Y SUS <span className="text-white">SPIN-OFFS</span>
        </h2>
        
        <p className="font-inter text-base md:text-lg text-muted-foreground leading-relaxed text-justify md:text-center">
          La metodología inicia con la creación de un <strong>"Spot Hero"</strong>: una pieza principal de alto impacto visual y alcance masivo que planta el concepto creativo de la marca en la mente del consumidor. 
          <br /><br />
          A partir de esta narrativa base, desplegamos múltiples <strong>"Spin-offs"</strong> 
          —historias derivadas en formatos ágiles enfocadas en <strong className="text-white">nichos hiper-específicos</strong>. 
          Al hacer que cada segmento vea su estilo de vida y aspiraciones reflejadas de manera auténtica en pantalla, logramos que se identifiquen profundamente con el vehículo, catalizando la intención de compra.
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 px-6 md:px-8 max-w-[1600px] mx-auto relative z-10"
      >
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            variants={fadeUp}
            custom={i * 0.1}
            onClick={() => setActiveCard(card)}
            className="group relative aspect-[3/4] md:aspect-[4/5] rounded-xl overflow-hidden cursor-pointer bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-colors duration-500"
          >
            {/* Video Background */}
            <video
              src={card.video}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-100"
            />

            {/* Hover gradient accent */}
            <div
              className={`absolute inset-0 bg-gradient-to-t ${card.accent} opacity-80 group-hover:opacity-100 transition-opacity duration-500 z-[3] mix-blend-overlay`}
            />
            {/* Base dark gradient to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-[4]" />

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
              <div className="w-8 h-1 bg-gradient-to-r from-primary to-secondary mb-4 transition-all duration-500 group-hover:w-16 rounded-full" />
              <h3 className="font-anton text-2xl md:text-3xl uppercase tracking-tight text-white mb-1">
                {card.title}
              </h3>
              <p className="font-inter text-sm text-white/70 tracking-wide font-medium">
                {card.subtitle}
              </p>
            </div>

            {/* Top-right corner marker */}
            <div className="absolute top-4 right-4 z-10 w-4 h-4 border-t-2 border-r-2 border-white/20 group-hover:border-primary transition-colors duration-500" />
            
            {/* Click me indicator */}
             <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
               <span className="bg-black/50 backdrop-blur-sm border border-white/20 text-white font-oswald uppercase tracking-[0.2em] text-xs py-2 px-4 rounded-full flex items-center gap-2">
                 <Crosshair className="w-3 h-3" />
                 Analizar Perfil
               </span>
             </div>
          </motion.div>
        ))}
      </motion.div>

      {/* GTA Style Modal */}
      <AnimatePresence>
        {activeCard && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md"
            onClick={() => setActiveCard(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-6xl bg-[#0a0a0a] border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close button */}
              <button
                onClick={() => setActiveCard(null)}
                className="absolute top-4 right-4 z-50 w-10 h-10 bg-black/50 backdrop-blur-md border border-white/10 hover:bg-white/10 hover:border-white/30 rounded-full flex items-center justify-center transition-all text-white"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Media Section */}
              <div className="w-full md:w-1/2 lg:w-[55%] relative aspect-video md:aspect-auto md:h-[600px] border-b md:border-b-0 md:border-r border-white/5">
                <video
                  src={activeCard.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Decorative scanning line animation */}
                <motion.div
                  initial={{ top: '0%' }}
                  animate={{ top: '100%' }}
                  transition={{ duration: 3, ease: 'linear', repeat: Infinity }}
                  className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent z-10 opacity-50"
                  style={{ boxShadow: '0 0 20px rgba(255,255,255,0.2)' }}
                />
                
                {/* Visual HUD OVERLAY */}
                <div className="absolute inset-0 pointer-events-none z-20 p-6 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="font-oswald text-white/50 tracking-widest text-xs">REC • 4K RES</span>
                    <span className={`font-oswald ${activeCard.statsColor} tracking-widest text-xs flex items-center gap-2`}>
                      <span className={`w-2 h-2 rounded-full animate-pulse ${activeCard.barColor}`} />
                      DATALINK ACTIVE
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className={`w-1 h-4 ${i <= 3 ? 'bg-white/80' : 'bg-white/20'}`} />
                      ))}
                    </div>
                    <Crosshair className="w-6 h-6 text-white/30" />
                  </div>
                </div>
              </div>

              {/* Stats & Profile Section (GTA Style) */}
              <div className="w-full md:w-1/2 lg:w-[45%] p-6 md:p-10 lg:p-12 relative overflow-y-auto max-h-[70vh] md:max-h-full">
                {/* Ambient glow in sidebar */}
                <div className={`absolute top-0 right-0 w-full h-full ${activeCard.bgGlow} opacity-30 pointer-events-none blur-3xl`} />
                
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-2">
                    <Target className={`w-5 h-5 ${activeCard.statsColor}`} />
                    <span className="font-inter text-xs tracking-[0.2em] uppercase text-white/60">
                      Análisis de Perfil
                    </span>
                  </div>
                  
                  <h3 className="font-anton text-4xl lg:text-5xl uppercase tracking-tight text-white mb-2">
                    {activeCard.title}
                  </h3>
                  <div className={`inline-block px-3 py-1 bg-white/5 border border-white/10 rounded font-inter text-xs font-medium tracking-wide text-white mb-8`}>
                    {activeCard.profile.segment}
                  </div>

                  <div className="space-y-8">
                    {/* Target Demo */}
                    <div>
                      <h4 className="font-oswald text-sm md:text-base uppercase tracking-widest text-white/40 mb-2 flex items-center gap-2">
                        <BarChart className="w-4 h-4" /> Demográfico
                      </h4>
                      <p className="font-inter text-base text-white/90">
                        {activeCard.profile.target}
                      </p>
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="font-oswald text-sm md:text-base uppercase tracking-widest text-white/40 mb-3 flex items-center gap-2">
                        <Zap className="w-4 h-4" /> Enfoque Narrativo
                      </h4>
                      <p className="font-inter text-sm md:text-base text-muted-foreground leading-relaxed">
                        {activeCard.profile.description}
                      </p>
                    </div>

                    {/* Stats Bars */}
                    <div>
                      <h4 className="font-oswald text-sm md:text-base uppercase tracking-widest text-white/40 mb-4 flex items-center gap-2">
                        <Radar className="w-4 h-4" /> Atributos de Conexión
                      </h4>
                      <div className="space-y-4">
                        {activeCard.profile.skills.map((skill, index) => (
                          <div key={skill.name}>
                            <div className="flex justify-between items-center mb-1.5">
                              <span className="font-oswald text-xs tracking-wider text-white">
                                {skill.name}
                              </span>
                              <span className={`font-oswald text-xs ${activeCard.statsColor}`}>
                                {skill.value}%
                              </span>
                            </div>
                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${skill.value}%` }}
                                transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
                                className={`h-full ${activeCard.barColor}`}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
