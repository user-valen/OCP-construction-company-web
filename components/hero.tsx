'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, ChevronDown } from 'lucide-react'

export function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // background pushes back in Z and scales as you scroll -> 3D depth
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.15, 1.35])
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '22%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-40%'])
  const contentRotate = useTransform(scrollYProgress, [0, 1], [0, -8])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section
      id="inicio"
      ref={ref}
      className="scene-3d relative flex min-h-screen items-center overflow-hidden"
    >
      {/* hero-img-1x.png — vista aérea del Edificio ALPAT II, obra corporativa/residencial */}
      <motion.div
        aria-hidden
        style={{ scale: bgScale, y: bgY }}
        className="absolute inset-0 -z-10"
      >
        <img
          src="/images/corporativo.jpg"
          alt=""
          className="size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/55 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-transparent" />
      </motion.div>

      <motion.div
        style={{ y: contentY, rotateX: contentRotate, opacity: contentOpacity }}
        className="mx-auto w-full max-w-7xl px-4 pt-28 md:px-8"
      >
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Obras Civiles Patagónicas
          </span>
          <h1 className="mt-6 font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight text-foreground text-balance sm:text-6xl md:text-7xl lg:text-8xl">
            Construimos el
            <span className="block text-primary">futuro de la Patagonia</span>
          </h1>
          <p className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            OCP Ingeniería y Construcciones ejecuta obras institucionales,
            educativas, urbanas y corporativas con estándares de excelencia,
            compromiso y precisión en cada proyecto.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#proyectos"
              className="group inline-flex items-center justify-center gap-2 rounded-md bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
            >
              Ver nuestros proyectos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur-sm transition-colors hover:border-primary hover:text-primary"
            >
              Contactanos
            </a>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: '+120', v: 'Proyectos Completados' },
              { k: '20', v: 'Años de Experiencia' },
              { k: '100%', v: 'Compromiso patagónico' },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-bold text-primary md:text-4xl">
                  {s.k}
                </dt>
                <dd className="mt-1 text-xs uppercase tracking-wide text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </motion.div>

      <div className="absolute inset-x-0 bottom-6 flex justify-center">
        <ChevronDown className="size-7 animate-bounce text-primary" />
      </div>
    </section>
  )
}
