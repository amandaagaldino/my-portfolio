import Footer from "./components/Footer/Footer"
import NavBar from "./components/NavBar/NavBar"
import AboutSection from "./pages/Home/sections/AboutSection/AboutSection"
import HeroSection from "./pages/Home/sections/HeroSection/HeroSection"
import ProjectsSection from "./pages/Home/sections/ProjectsSection/ProjectsSection"


const App = () => {

  return (
    <>
      <NavBar/> 
      <HeroSection />
      <AboutSection />
      <ProjectsSection/>
      <Footer />
    </>
  )
}

export default App
