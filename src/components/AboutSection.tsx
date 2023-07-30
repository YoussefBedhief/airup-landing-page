const AboutSection = () => {
  return (
    <section
      className="flex justify-center items-center lg:justify-between w-[100vw] h-[100vh] bg-[#09080D]"
      id="second"
    >
      <div className="hidden lg:flex"></div>
      <div
        className="flex flex-col justify-center items-center lg:items-end px-10 lg:pr-56"
        id="section--two--container"
      >
        <h1 className="font-bold lg:font-extrabold text-2xl lg:text-3xl py-2 z-30">
          About the Bottle
        </h1>
        <p className="text-gray-500 text-xs text-center z-30">
          we are on a mission to revolutionize the way you hydrate.
        </p>
        <p className="text-gray-500 text-xs text-center z-30">
          Our innovative bottle infuses pure water with mouthwatering flavors,
        </p>
        <p className="text-gray-500 text-xs text-center z-30">
          offering a refreshing and eco-friendly hydration experience.
        </p>
        <p className="text-gray-500 text-xs text-center z-30">
          Embrace the future of sustainable and delicious hydration with AirUp.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
