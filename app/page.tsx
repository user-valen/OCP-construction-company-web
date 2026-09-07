import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Projects } from '@/components/projects'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'
import { Clients } from '@/components/clients'

export default function Page() {
  return (
    <main className="relative overflow-x-hidden">
      <SiteHeader />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Clients/>
      <Contact />
      <SiteFooter />
    </main>
  )
}
