const AboutSection = () => {
  return (
    <section
      className="overflow-y-hidden flex justify-between w-[100vw] h-[100vh] bg-[#09080D]"
      id="second"
    >
      <div></div>
      <div
        className="flex flex-col justify-center items-end pr-56"
        id="section--two--container"
      >
        <h1 className="font-extrabold text-3xl py-2">About the gourds</h1>
        <p className="text-gray-500 text-xs">
          we are on a mission to revolutionize the way you hydrate.
        </p>
        <p className="text-gray-500 text-xs">
          Our innovative bottle infuses pure water with mouthwatering flavors,
        </p>
        <p className="text-gray-500 text-xs">
          offering a refreshing and eco-friendly hydration experience.
        </p>
        <p className="text-gray-500 text-xs">
          Embrace the future of sustainable and delicious hydration with AirUp.
        </p>
      </div>
    </section>
  )
}

export default AboutSection
