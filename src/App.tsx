import AboutSection from "./components/AboutSection"
import AirUpModel from "./components/AirUpModel"
import DisplaySection from "./components/DisplaySection"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main className="flex min-h-screen flex-col items-center pb-3 bg-[#121117] text-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <DisplaySection />
      <AirUpModel />
    </main>
  )
}

export default App