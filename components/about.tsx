'use client'

import { Reveal3D } from './reveal-3d'
import { Target, Eye, HeartHandshake } from 'lucide-react'

const values = [
  {
    icon: Target,
    title: 'Misión',
    text: 'Ejecutar obras de ingeniería y construcción que aporten valor real a las comunidades de la Patagonia, con seguridad, calidad y responsabilidad.',
  },
  {
    icon: Eye,
    title: 'Visión',
    text: 'Ser la constructora de referencia en la región, reconocida por la excelencia técnica y el cumplimiento en cada proyecto que emprendemos.',
  },
  {
    icon: HeartHandshake,
    title: 'Valores',
    text: 'Compromiso, transparencia, trabajo en equipo y arraigo patagónico. Construimos relaciones tan sólidas como nuestras obras.',
  },
]

export function About() {
  return (
    <section id="nosotros" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <Reveal3D>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Quiénes Somos
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance md:text-5xl">
              Obras Civiles Patagónicas con sello propio
            </h2>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground">
              OCP nace en el corazón de la Patagonia con la convicción de que
              cada obra es un compromiso con la gente. Desde edificios
              gubernamentales y escuelas hasta plazas, viviendas y complejos
              corporativos, acompañamos el crecimiento de Chubut con soluciones
              constructivas integrales.
            </p>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Nuestro equipo combina experiencia técnica, planificación
              rigurosa y una gestión cercana que garantiza obras entregadas en
              tiempo, en forma y con la calidad que nuestros clientes esperan.
            </p>
          </Reveal3D>

          <div className="grid gap-5">
            {values.map((v, i) => (
              <Reveal3D key={v.title} delay={i * 0.12}>
                <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/60">
                  <div className="flex items-start gap-4">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-primary/12 text-primary">
                      <v.icon className="size-6" />
                    </span>
                    <div>
                      <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
                        {v.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal3D>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
