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
        "hidden lg:flex justify-around fixed items-center w-full p-1 z-10 transition-all duration-500",
        { "p-4 bg-[#121117] shadow-lg": scrolling }
      )}
    >
      <img
        src={Logo}
        alt="Watch logo"
        className="h-14 w-10 pt-2 hidden lg:flex"
      />
      <div className="flex items-center gap-x-4">
        <a
          href="#first"
          className="text-white font-normal text-xs lg:text-base lg:font-semibold  p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600"
        >
          Home
        </a>
        <a
          href="#second"
          className="text-white font-normal text-xs lg:text-base lg:font-semibold  p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600"
        >
          About
        </a>
        <a
          href="#third"
          className="text-white font-normal text-xs lg:text-base lg:font-semibold  p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600"
        >
          3D View
        </a>
        <p className="text-white font-normal text-xs lg:text-base lg:font-semibold  p-4 cursor-pointer hover:text-transparent hover:bg-clip-text hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600">
          More
        </p>
      </div>
      <a
        href="#"
        className="border border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent"
      >
        <WalletIcon className="h-5 w-5" />
        Buy a Bottle
      </a>
    </div>
  )
}

export default Navbar
