import Logo from "../assets/images/airUpLogo.png"

const Footer = () => {
  return (
    <footer
      id="footer"
      className="bg-[#121117] p-4 w-full flex items-center justify-between"
    >
      <div className="flex items-center justify-between w-56">
        <img src={Logo} alt="Logo image" className="p-2" />
      </div>
      <div className="flex items-center justify-between w-1/4">
        <p className=" p-2 text-left w-64">
          <a
            className="text-orange-600 cursor-pointer"
            href="https://skfb.ly/oJD8U"
          >
            Air Up pro bottle - Industrial design{" "}
          </a>
          by{" "}
          <a
            className="text-orange-600 cursor-pointer"
            href="https://sketchfab.com/nixo_design"
          >
            NIXO{" "}
          </a>
          is licensed under{" "}
          <a
            className="text-orange-600 cursor-pointer"
            href="http://creativecommons.org/licenses/by/4.0/"
          >
            Creative Commons Attributionx.{" "}
          </a>
        </p>
      </div>
      <div className="flex items-center justify-between w-1/4">
        <p className="p-2 text-center w-56">
          3D model of the water bottle of the brand
          <a
            href="https://fr.air-up.com/collections/bottles"
            className="text-orange-600 cursor-pointer"
          >
            {" "}
            Air Up{" "}
          </a>{" "}
          .
        </p>
      </div>
      <div className="flex items-center justify-between w-1/4">
        <p className="w-56">
          &copy; {new Date().getFullYear()}
          <a href="" className="text-orange-600 cursor-pointer">
            {" "}
            YB{" "}
          </a>
          . All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
