'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MapPin } from 'lucide-react'
import { categories } from './site-data'

export function Projects() {
  const [active, setActive] = useState(categories[0].id)
  const current = categories.find((c) => c.id === active) ?? categories[0]

  return (
    <section id="proyectos" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            Nuestros Proyectos
          </span>
          <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance md:text-5xl">
            Obras que dejan huella
          </h2>
          <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
            Una selección de trabajos ejecutados en toda la provincia del
            Chubut, agrupados por área de especialidad.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {categories.map((c) => (
            <button
              key={c.id}
              type="button"
              onClick={() => setActive(c.id)}
              className={`rounded-full px-6 py-2.5 text-sm font-semibold uppercase tracking-wide transition-colors ${
                active === c.id
                  ? 'bg-primary text-primary-foreground'
                  : 'border border-border bg-card text-muted-foreground hover:border-primary/60 hover:text-foreground'
              }`}
            >
              {c.title}
            </button>
          ))}
        </div>

        <div className="scene-3d mt-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, rotateY: 12, y: 40 }}
              animate={{ opacity: 1, rotateY: 0, y: 0 }}
              exit={{ opacity: 0, rotateY: -12, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformStyle: 'preserve-3d' }}
              className="grid gap-8 lg:grid-cols-2 lg:items-stretch"
            >
              <div className="group relative min-h-72 overflow-hidden rounded-2xl border border-border">
                {/* imagen representativa de la categoría de proyecto */}
                <img
                  src={current.image || '/placeholder.svg'}
                  alt={current.alt}
                  className="size-full min-h-72 object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6">
                  <span className="font-display text-3xl font-bold uppercase tracking-wide text-foreground">
                    {current.title}
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {current.projects.length} obras destacadas
                  </p>
                </div>
              </div>

              <ul className="grid content-start gap-3">
                {current.projects.map((p, i) => (
                  <motion.li
                    key={p}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
                    className="flex items-start gap-3 rounded-lg border border-border bg-card px-4 py-3.5 transition-colors hover:border-primary/60"
                  >
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                    <span className="text-sm leading-relaxed text-foreground">
                      {p}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
