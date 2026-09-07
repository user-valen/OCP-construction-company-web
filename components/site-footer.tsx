export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-background py-12">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div className="flex items-center gap-3">
            {/* ocp-logo.jpg — logo de la empresa */}
            <img
              src="/images/ocp-logo.jpg"
              alt="OCP Ingeniería y Construcciones"
              className="h-12 w-12 rounded-md object-cover"
            />
            <div>
              <p className="font-display text-lg font-bold tracking-wide text-foreground">
                OCP Ingeniería y Construcciones
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                Obras Civiles Patagónicas
              </p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              ['Inicio', '#inicio'],
              ['Quiénes Somos', '#nosotros'],
              ['Servicios', '#servicios'],
              ['Proyectos', '#proyectos'],
              ['Contacto', '#contacto'],
            ].map(([label, href]) => (
              <a
                key={href}
                href={href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        <div className="mt-8 border-t border-border pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} OCP Ingeniería y Construcciones. Todos los
          derechos reservados. — Rawson, Chubut, Patagonia Argentina.
        </div>
      </div>
    </footer>
  )
}
