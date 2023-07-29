import { RocketLaunchIcon, BanknotesIcon } from "@heroicons/react/24/outline"

const HeroSection = () => {
  return (
    <section className=" flex justify-between w-full h-screen" id="first">
      <div
        className="flex flex-col justify-center pl-56"
        id="section--one--container"
      >
        <p className="z-20 font-bold uppercase text-transparent text-lg bg-clip-text bg-gradient-to-b from-black via-orange-500 to-orange-600 py-3">
          Air Up
        </p>
        <h1 className="z-30 font-extrabold text-4xl py-2">
          New Bottle generation
        </h1>
        <p className="text-gray-500 text-xs z-30">
          Hydration Reinvented. Pure water, endless flavors.
        </p>
        <div className="flex gap-x-3 py-4 justify-start ">
          <button className="z-30 border border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent">
            <RocketLaunchIcon className="h-5 w-5" />
            Explore
          </button>
          <button className=" z-30 border border-white rounded-3xl py-2 px-5 flex items-center gap-x-2 hover:hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent">
            <BanknotesIcon className="h-5 w-5" />
            Buy
          </button>
        </div>
      </div>
      {/*3D watch model */}
      <div></div>
    </section>
  )
}

export default HeroSection
