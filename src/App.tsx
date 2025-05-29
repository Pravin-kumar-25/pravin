import './App.css'
import AboutMe from './components/AboutMe'
import ContactMe from './components/ContactMe'
import HeroSection from './components/HeroSection'
import Navbar from './components/Navbar'
import ProjectSection from './components/ProjectSection'

function App() {

  return (
    <>
      <div className="bg-red-50 min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans">
        <Navbar />
        <HeroSection />
        <AboutMe />
        <ProjectSection />
        <ContactMe />
      </div>
    </>
  )
}

export default App
