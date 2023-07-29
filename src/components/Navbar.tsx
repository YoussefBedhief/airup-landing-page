import { WalletIcon } from "@heroicons/react/24/outline"
import { useEffect, useState } from "react"
import { cn } from "../lib/utils"
import Logo from "../assets/images/airUpLogo.png"

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 600) {
        setScrolling(true)
      } else {
        setScrolling(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div
      id="navbar"
      className={cn(
        "flex justify-around fixed items-center w-full p-1 z-10 transition-all duration-500",
        { "p-4 bg-[#121117] shadow-lg": scrolling }
      )}
    >
      <img src={Logo} alt="Watch logo" className="h-14 w-10" />
      <div className="flex items-center gap-x-4">
        <p className="text-white font-semibold p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600">
          Home
        </p>
        <p className="text-white font-semibold p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600">
          About
        </p>
        <p className="text-white font-semibold p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600">
          3D View
        </p>
        <p className="text-white font-semibold p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600">
          More
        </p>
      </div>
      <button className="border border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent">
        <WalletIcon className="h-5 w-5" />
        Buy a Bottle
      </button>
    </div>
  )
}

export default Navbar
