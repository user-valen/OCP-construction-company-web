'use client'

import { useState } from 'react'
import Script from 'next/script'
import { Reveal3D } from './reveal-3d'
import { Phone, MapPin, Check } from 'lucide-react'

declare global {
  interface Window {
    hcaptcha?: { reset: (widgetId?: string) => void }
  }
}

// ⬇️⬇️⬇️ LO ÚNICO QUE TENÉS QUE CAMBIAR ⬇️⬇️⬇️
// Pegá acá la access key que te da Web3Forms.
// IMPORTANTE: generá la access key registrando el mail luis_igarzabal@yahoo.com.ar,
// así los mensajes del formulario le llegan a esa casilla.
const WEB3FORMS_ACCESS_KEY = '1df1a4f6-12b5-4a88-b878-1595e529213d'
// ⬆️⬆️⬆️ ------------------------------- ⬆️⬆️⬆️

// A quién le llegan las consultas del formulario.
const CONTACT_RECIPIENT_EMAIL = 'luis_igarzabal@yahoo.com.ar'

// Site key compartida de hCaptcha para el plan free de Web3Forms.
// En un plan pago se reemplaza por la site key propia.
const HCAPTCHA_SITE_KEY = '50b2fe65-b00b-4b9e-ad62-3ba471098be2'

const info = [
  { icon: Phone, label: 'Teléfono', value: '+54 2804 412390' },
  { icon: MapPin, label: 'Dirección', value: 'Rawson, Chubut' },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(false)
    setCaptchaError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    // hCaptcha inyecta el token en el campo "h-captcha-response".
    if (!formData.get('h-captcha-response')) {
      setCaptchaError(true)
      return
    }

    setSending(true)
    formData.append('access_key', WEB3FORMS_ACCESS_KEY)
    formData.append('subject', 'Nueva solicitud de presupuesto desde la web')
    formData.append('to', CONTACT_RECIPIENT_EMAIL)
    // Para que "Responder" vaya directo al cliente que escribió.
    formData.append('replyto', String(formData.get('email') ?? ''))

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await res.json()
      if (data.success) {
        setSent(true)
        form.reset()
        window.hcaptcha?.reset()
        setTimeout(() => setSent(false), 4000)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <section id="contacto" className="relative border-t border-border bg-secondary/30 py-24 md:py-32">
      <Script src="https://js.hcaptcha.com/1/api.js" async defer />
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <Reveal3D>
            <span className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
              Contacto
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold uppercase leading-tight tracking-tight text-foreground text-balance md:text-5xl">
              Construyamos juntos tu proyecto
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              Contanos qué tenés en mente y nuestro equipo te acompañará desde
              la primera idea hasta la entrega de la obra.
            </p>

            <div className="mt-10 grid gap-4">
              {info.map((i) => (
                <div key={i.label} className="flex items-center gap-4">
                  <span className="flex size-11 items-center justify-center rounded-lg bg-primary/12 text-primary">
                    <i.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs uppercase tracking-wide text-muted-foreground">
                      {i.label}
                    </p>
                    <p className="font-medium text-foreground">{i.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal3D>

          <Reveal3D delay={0.15} rotateX={-18}>
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-7 md:p-8"
            >
              <div className="grid gap-5">
                <div className="grid gap-2">
                  <label htmlFor="nombre" className="text-sm font-medium text-foreground">
                    Nombre
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    placeholder="Nombre Completo"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Correo
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="tucorreo@ejemplo.com"
                    className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>
                <div className="grid gap-2">
                  <label htmlFor="mensaje" className="text-sm font-medium text-foreground">
                    Mensaje
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    placeholder="Contanos sobre tu proyecto..."
                    className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                  />
                </div>

                {/* Honeypot anti-spam: invisible para humanos, los bots lo completan y el envío se descarta */}
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="h-captcha" data-sitekey={HCAPTCHA_SITE_KEY} />

                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {sending ? (
                    'Enviando...'
                  ) : sent ? (
                    <>
                      <Check className="size-4" /> Mensaje enviado
                    </>
                  ) : (
                    'Enviar mensaje'
                  )}
                </button>

                {captchaError && (
                  <p className="text-sm text-red-500">
                    Completá el captcha antes de enviar.
                  </p>
                )}

                {error && (
                  <p className="text-sm text-red-500">
                    Hubo un problema al enviar. Probá de nuevo o escribinos por teléfono.
                  </p>
                )}
              </div>
            </form>
          </Reveal3D>
        </div>
      </div>
    </section>
  )
}