import { RocketLaunchIcon, BanknotesIcon } from "@heroicons/react/24/outline"
import { BsMouse } from "react-icons/bs"
import { BiChevronsDown } from "react-icons/bi"
const HeroSection = () => {
  return (
    <section
      className="flex justify-end lg:justify-between w-full h-screen"
      id="first"
    >
      <div
        className="flex flex-col justify-center pl-14 lg:pl-56"
        id="section--one--container"
      >
        <p className="z-20 font-bold uppercase text-transparent text-lg bg-clip-text bg-gradient-to-b from-black via-orange-500 to-orange-600 lg:py-3">
          Air Up
        </p>
        <h1 className="z-30 font-extrabold text-3xl lg:text-4xl p-2">
          New Bottle generation
        </h1>
        <p className="text-gray-500 text-xs z-30">
          Hydration Reinvented. Pure water, endless flavors.
        </p>
        <div className="flex gap-x-3 py-4 justify-start ">
          <a
            href="#second"
            className="z-30 border cursor-pointer scroll-smooth border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent"
          >
            <RocketLaunchIcon className="h-5 w-5" />
            Explore
          </a>
          <a
            href="#"
            className=" z-50 border cursor-pointer border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent"
          >
            <BanknotesIcon className="h-5 w-5" />
            Buy
          </a>
        </div>
        <div className="flex flex-col items-center w-full mt-12 pr-16 ">
          <BsMouse className=" h-8 w-8 lg:h-12 lg:w-12 text-orange-600 animate-bounce lg:-mb-2" />
          <BiChevronsDown className="h-7 w-7 lg:h-10 lg:w-10 text-orange-600 animate-bounce" />
        </div>
      </div>
      {/*3D watch model */}
      <div className="hidden lg:block"></div>
    </section>
  )
}

export default HeroSection
