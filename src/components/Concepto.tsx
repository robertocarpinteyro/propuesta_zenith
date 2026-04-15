import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function Concepto() {
  const sectionRef = useRef<HTMLElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const headingOpacity = useTransform(scrollYProgress, [0.1, 0.3, 0.7, 0.9], [0, 1, 1, 0])
  const headingY = useTransform(scrollYProgress, [0.1, 0.3], [60, 0])
  const subtitleOpacity = useTransform(scrollYProgress, [0.25, 0.4, 0.7, 0.9], [0, 1, 1, 0])
  const subtitleY = useTransform(scrollYProgress, [0.25, 0.4], [40, 0])
  const lineWidth = useTransform(scrollYProgress, [0.15, 0.35], ['0%', '100%'])

  // Word-by-word reveal for the heading
  const headingWords = 'MÁS QUE UNA AGENCIA, UN ESTILO DE VIDA.'.split(' ')

  return (
    <section
      id="concepto"
      ref={sectionRef}
      className="relative py-40 md:py-64 bg-black overflow-hidden"
    >
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-8 text-center">
        {/* Decorative line */}
        <motion.div
          style={{ width: lineWidth }}
          className="h-px bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-16"
        />

        {/* Main heading with word-by-word reveal */}
        <motion.h2
          style={{ opacity: headingOpacity, y: headingY }}
          className="font-anton text-4xl md:text-6xl lg:text-7xl uppercase tracking-tight text-white leading-tight"
        >
          {headingWords.map((word, i) => {
            const wordStart = 0.1 + i * 0.025
            const wordEnd = wordStart + 0.08

            return (
              <WordReveal
                key={i}
                word={word}
                scrollYProgress={scrollYProgress}
                start={wordStart}
                end={wordEnd}
              />
            )
          })}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          style={{ opacity: subtitleOpacity, y: subtitleY }}
          className="text-lg md:text-xl font-inter font-light text-muted-foreground mt-8 md:mt-12 max-w-2xl mx-auto leading-relaxed"
        >
          Un spot cinemático que entrelaza historias en Puebla. Demostramos que{' '}
          <span className="text-white font-medium">Zenith</span> tiene el vehículo exacto
          para cada persona, integrando una experiencia de compra y{' '}
          <span className="text-primary font-medium">trade-in</span> impecable.
        </motion.p>

        {/* Bottom decorative */}
        <motion.div
          style={{ width: lineWidth }}
          className="h-px bg-gradient-to-r from-transparent via-secondary to-transparent mx-auto mt-16"
        />
      </div>
    </section>
  )
}

function WordReveal({
  word,
  scrollYProgress,
  start,
  end,
}: {
  word: string
  scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress']
  start: number
  end: number
}) {
  const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
  const color = useTransform(
    scrollYProgress,
    [start, end],
    ['rgba(255,255,255,0.15)', 'rgba(255,255,255,1)']
  )

  return (
    <motion.span style={{ opacity, color }} className="inline-block mr-[0.3em]">
      {word}
    </motion.span>
  )
}
