import AboutSection from "./components/AboutSection"
import AirUpModel from "./components/AirUpModel"
import DisplaySection from "./components/DisplaySection"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className=" scroll-smooth flex min-h-screen flex-col items-center pb-3 bg-[#121117] text-white scrollbar-hide overflow-y-hidden">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DisplaySection />
      <Footer />
      <AirUpModel />
    </main>
  )
}

export default App
