'use client'

import { Reveal3D } from './reveal-3d'

// Ajustá el path si tus imágenes NO están en public/images/
// (si las pusiste directo en public/, cambiá '/images/cX.jpg' por '/cX.jpg')
const logos = [
  { src: '/images/c0.jpg', scale: 2 },
  { src: '/images/c1.jpg', scale: 3 },   // este más grande
  { src: '/images/c2.jpg', scale: 1 },
  { src: '/images/c3.jpg', scale: 1 },  // este un poco más grande
  { src: '/images/c4.jpg', scale: 3 },
  { src: '/images/c5.jpg', scale: 1.4 },
  { src: '/images/c6.jpg', scale: 1.5 },
]
export function Clients() {
  const loop = [...logos, ...logos] // duplicamos para que el loop sea continuo

  return (
    <section id="clientes" className="relative border-t border-border bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <Reveal3D>
          <div className="text-center">
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Clientes
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance md:text-5xl">
              Confían en nosotros
            </h2>
          </div>
        </Reveal3D>
      </div>

      <div className="logos-marquee mt-14">
        <div className="logos-marquee-track flex w-max">
          {loop.map((logo, i) => (
            <div
              key={i}
              className="mr-6 flex h-24 w-44 shrink-0 items-center justify-center rounded-xl bg-white p-6"
            >
              <img
                src={logo.src}
                alt={`Cliente ${(i % logos.length) + 1}`}
                className="max-h-full max-w-full object-contain"
                style={{ transform: `scale(${logo.scale})` }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .logos-marquee {
          overflow: hidden;
          -webkit-mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
          mask-image: linear-gradient(to right, transparent, black 6%, black 94%, transparent);
        }
        .logos-marquee-track {
          animation: logos-scroll 25s linear infinite;
        }
        .logos-marquee:hover .logos-marquee-track {
          animation-play-state: paused;
        }
        @keyframes logos-scroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @media (prefers-reduced-motion: reduce) {
          .logos-marquee-track { animation: none; transform: none; }
        }
      `}</style>
    </section>
  )
}