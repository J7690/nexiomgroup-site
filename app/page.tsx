import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Personas from '@/components/Personas'
import Resources from '@/components/Resources'
import Products from '@/components/Products'
import Services from '@/components/Services'
import Academia from '@/components/Academia'
import Testimonials from '@/components/Testimonials'
import Stats from '@/components/Stats'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <a href="#main" className="skip-to-content">Aller au contenu principal</a>
      <Header />
      <main id="main">
        <Hero />
        <Personas />
        <Resources />
        <Products />
        <Services />
        <Academia />
        <Testimonials />
        <Stats />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
