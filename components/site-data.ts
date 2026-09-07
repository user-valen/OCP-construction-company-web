export type ProjectCategory = {
  id: string
  title: string
  image: string
  alt: string
  projects: string[]
}

export const services = [
  {
    title: 'Edificación',
    description:
      'Construcción integral de edificios institucionales, educativos y residenciales bajo estrictos estándares de calidad.',
  },
  {
    title: 'Remodelaciones',
    description:
      'Refacción, ampliación y puesta en valor de espacios existentes, optimizando cada superficie intervenida.',
  },
  {
    title: 'Obras Civiles',
    description:
      'Plazas, playones deportivos, playas de estacionamiento y obras de infraestructura pública y privada.',
  },
  {
    title: 'Gerencia de Proyectos',
    description:
      'Dirección técnica, planificación y control de obra de principio a fin, cumpliendo plazos y presupuestos.',
  },
]

export const categories: ProjectCategory[] = [
  {
    id: 'institucional',
    title: 'Institucional',
    image: '/images/institucional.jpg',
    alt: 'Edificio institucional de gobierno con bandera argentina en Rawson',
    projects: [
      'Ministerio de Ambiente y Desarrollo Sustentable — Rawson',
      'Refacción Centro de Datos en Casa de Gobierno — Rawson',
      'Centro de Datos en Ministerio de Economía — Rawson',
      'Ampliación y Refacción Residencia del Vicegobernador — Rawson',
      'Refacción Oficinas Casa de Gobierno, Fontana 50 — Rawson',
      'Adecuación Edificio Fuero Penal — Lago Puelo',
      'Instalación de gas en Superior Tribunal de Justicia — Rawson',
      'Nuevo acceso Sala de Audiencia S.T.J.CH. — Rawson',
    ],
  },
  {
    id: 'educativo',
    title: 'Educativo',
    image: '/images/educativo.jpg',
    alt: 'Escuela Ysgol yr Hendre de ladrillo visto en Trelew, Chubut',
    projects: [
      'Construcción Escuela Ysgol yr Hendre (1ra a 3ra etapa) — Trelew',
      'Ampliación Escuela N° 202 — Rawson',
      'Ampliación y Refacción Escuela N° 130 — Gaiman',
      'Ampliación y Refacción Escuela N° 415 — Gaiman',
      'Trabajos varios Escuela N° 440 — C. Rivadavia',
    ],
  },
  {
    id: 'urbano',
    title: 'Urbano',
    image: '/images/urbano.jpg',
    alt: 'Edificio urbano y playa de estacionamiento en Rawson',
    projects: [
      'Plaza 490 Norte — Rawson',
      'Plaza Macizo 200 — Rawson',
      'Construcción Plaza — Las Plumas',
      'Playones Deportivos — Rawson / Gan Gan / Playa Unión',
      'Playa de Estacionamiento U.N.P.S.J.B.',
      'Terminaciones Pórtico de Acceso a Rawson',
      'Construcción de 20 Viviendas (B° 3 de Abril) — Trelew',
      'Construcción de 26 Viviendas (B° Illia) — Trelew',
      'Proyecto y Construcción de 15 Viviendas — Gan Gan',
    ],
  },
  {
    id: 'corporativo',
    title: 'Corporativo',
    image: '/images/corporativo.jpg',
    alt: 'Edificio de departamentos ALPAT II con amenities en Playa Unión',
    projects: [
      'Ampliación y Refacción Casino Club — Playa Unión',
      'Oficinas y Depósito para Pesquera Makro S.A — Puerto Rawson',
      'Galpón para Minera Argenta — Gan Gan',
      'Edificio de Departamentos con amenities (ALPAT II) — Playa Unión',
    ],
  },
]
