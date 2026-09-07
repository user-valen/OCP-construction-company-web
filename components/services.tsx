'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react'
import { Building2, Hammer, TrafficCone, ClipboardList } from 'lucide-react'
import { services } from './site-data'

const icons = [Building2, Hammer, TrafficCone, ClipboardList]

function TiltCard({
  index,
  title,
  description,
}: {
  index: number
  title: string
  description: string
}) {
  const ref = useRef<HTMLDivElement>(null)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 15,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 15,
  })

  const Icon = icons[index % icons.length]

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    mx.set((e.clientX - r.left) / r.width - 0.5)
    my.set((e.clientY - r.top) / r.height - 0.5)
  }
  const reset = () => {
    mx.set(0)
    my.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 20 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="scene-3d"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={reset}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="group relative h-full overflow-hidden rounded-xl border border-border bg-card p-7"
      >
        <span className="absolute right-5 top-5 font-display text-5xl font-bold text-muted/50">
          0{index + 1}
        </span>
        <span
          style={{ transform: 'translateZ(40px)' }}
          className="flex size-14 items-center justify-center rounded-lg bg-primary text-primary-foreground"
        >
          <Icon className="size-7" />
        </span>
        <h3
          style={{ transform: 'translateZ(30px)' }}
          className="mt-6 font-display text-2xl font-semibold uppercase tracking-wide text-foreground"
        >
          {title}
        </h3>
        <p
          style={{ transform: 'translateZ(20px)' }}
          className="mt-3 text-sm leading-relaxed text-muted-foreground"
        >
          {description}
        </p>
        <span className="absolute inset-x-0 bottom-0 h-1 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
      </motion.div>
    </motion.div>
  )
}

export function Services() {
  return (
    <section id="servicios" className="relative border-y border-border bg-secondary/30 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Nuestros Servicios
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Soluciones constructivas integrales
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Acompañamos cada etapa de la obra, desde el proyecto hasta la
            entrega final, con un equipo especializado en cada disciplina.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <TiltCard
              key={s.title}
              index={i}
              title={s.title}
              description={s.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
