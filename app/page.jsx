import Navbar               from '@/components/layout/Navbar'
import Footer               from '@/components/layout/Footer'
import Hero                 from '@/components/sections/Hero'
import Origen               from '@/components/sections/Origen'
import Filosofia            from '@/components/sections/Filosofia'
import Ecosistema           from '@/components/sections/Ecosistema'
import ImpactoComunidad     from '@/components/sections/ImpactoComunidad'
import GaleriaEuropa        from '@/components/sections/GaleriaEuropa'
import ServiciosPersonales  from '@/components/sections/ServiciosPersonales'
import Inversion            from '@/components/sections/Inversion'

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Origen />
        <Filosofia />
        <Ecosistema />
        <ImpactoComunidad />
        <GaleriaEuropa />
        <ServiciosPersonales />
        <Inversion />
      </main>
      <Footer />
    </>
  )
}
