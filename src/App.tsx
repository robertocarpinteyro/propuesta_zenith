import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Concepto from './components/Concepto'
import Lineup from './components/Lineup'
import TechSpecs from './components/TechSpecs'
import Investment from './components/Investment'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-black min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Concepto />
        <Lineup />
        <TechSpecs />
        <Investment />
      </main>
      <Footer />
    </div>
  )
}
