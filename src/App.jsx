import Navbar from './components/common/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import MotionGallery from './components/MotionGallery/MotionGallery'
import YouTube from './components/YouTube/YouTube'
import Education from './components/Education/Education'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <div className="bg-navy min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <MotionGallery />
        <YouTube />
        <Education />
      </main>
      <Footer />
    </div>
  )
}
