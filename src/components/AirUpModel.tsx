import {
  ViewerApp,
  AssetManagerPlugin,
  GBufferPlugin,
  ProgressivePlugin,
  TonemapPlugin,
  SSRPlugin,
  SSAOPlugin,
  BloomPlugin,
  CanvasSnipperPlugin,
  AssetManagerBasicPopupPlugin,
  mobileAndTabletCheck,
  MeshBasicMaterial2,
  Color,
  GLTFAnimationPlugin,
} from "webgi"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useCallback, useEffect, useRef, useState } from "react"
import {
  ArrowLeftOnRectangleIcon,
  Cog8ToothIcon,
  PauseIcon,
} from "@heroicons/react/24/outline"
import { StopIcon } from "@heroicons/react/24/solid"

const AirUpModel = () => {
  const canvasRef = useRef(null)
  const [needsUpdate, setNeedsUpdate] = useState<boolean>(true)
  gsap.registerPlugin(ScrollTrigger)

  const setupViewer = useCallback(async () => {
    // Initialize the viewer
    const viewer = new ViewerApp({
      canvas: document.getElementById("webgi-canvas") as HTMLCanvasElement,
      useRgbm: false,
    })

    const isMobile = mobileAndTabletCheck()

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin)
    // get the active camera
    const camera = viewer.scene.activeCamera
    //get the position and the target of the active camera
    const position = camera.position
    const target = camera.target
    const exitButton = document.getElementById(
      "button--exit"
    ) as HTMLButtonElement
    const animateButton = document.getElementById(
      "button--animate"
    ) as HTMLButtonElement
    const pauseButton = document.getElementById(
      "button--pause"
    ) as HTMLButtonElement
    const stopButton = document.getElementById(
      "button--stop"
    ) as HTMLButtonElement
    const customizerInterface = document.getElementById(
      "customizer--container"
    ) as HTMLDivElement

    // Add a popup(in HTML) with download progress when any asset is downloading.
    await viewer.addPlugin(AssetManagerBasicPopupPlugin)

    // Add plugins individually.
    await viewer.addPlugin(GBufferPlugin)
    await viewer.addPlugin(new ProgressivePlugin(32))
    await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    await viewer.addPlugin(SSRPlugin)
    await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GroundPlugin)
    await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // or use this to add all main ones at once.
    // await addBasePlugins(viewer)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin)

    // This must be called once after all plugins are added.
    viewer.renderer.refreshPipeline()
    await viewer.addPlugin(GLTFAnimationPlugin).then((result) => {
      animateButton.addEventListener("click", () => {
        result.loopRepetitions = 1
        result.playAnimation()
      })
      pauseButton.addEventListener("click", () => {
        result.pauseAnimation()
      })
      stopButton.addEventListener("click", () => {
        result.resetAnimation()
      })
    })

    // Import and add a GLB file.
    await manager.addFromPath("airup.glb")

    // in case its set to false in the glb to prevent texture error

    viewer.getPlugin(TonemapPlugin)!.config!.clipBackground = true

    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap((await manager.importer!.importSinglePath<ITexture>("./assets/environment.hdr"))!);

    const plug = manager.materials!.findMaterialsByName(
      "Object_1_009"
    )[0] as MeshBasicMaterial2
    const sips = manager.materials!.findMaterialsByName(
      "Object_10"
    )[0] as MeshBasicMaterial2
    const straw = manager.materials!.findMaterialsByName(
      "Object_1_013"
    )[0] as MeshBasicMaterial2
    const cog = manager.materials!.findMaterialsByName(
      "Object_8_003"
    )[0] as MeshBasicMaterial2
    const outerShell = manager.materials!.findMaterialsByName(
      "Object_19"
    )[0] as MeshBasicMaterial2
    const interShell = manager.materials!.findMaterialsByName(
      "Object_10_003"
    )[0] as MeshBasicMaterial2
    const tail = manager.materials!.findMaterialsByName(
      "Object_1_001"
    )[0] as MeshBasicMaterial2
    const betweenTailandShell = manager.materials!.findMaterialsByName(
      "Object_3_001"
    )[0] as MeshBasicMaterial2
    const middlePart = manager.materials!.findMaterialsByName(
      "Object_8_002"
    )[0] as MeshBasicMaterial2

    // To disable the 3D model to move
    viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })

    if (isMobile) {
      position.set(-4.35, 2.05, 6.86)
      target.set(0.84, -0.39, -0.22)
      camera.setCameraOptions({ fov: 40 })
    }

    onUpdate()

    window.scrollTo(0, 0)

    function setupScrollanimation() {
      const tl = gsap.timeline()

      // FIRST SECTION

      tl.to(position, {
        x: isMobile ? 8 : 1.56,
        y: isMobile ? 1.04 : -2.26,
        z: isMobile ? -6.83 : -4.95,
        scrollTrigger: {
          trigger: "#second",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
        },
        onUpdate,
      })

        .to("#section--one--container", {
          xPercent: "-150",
          opacity: 0,
          scrollTrigger: {
            trigger: "#second",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
            immediateRender: false,
          },
        })
        .to(target, {
          x: isMobile ? 0.4 : -1.2,
          y: isMobile ? 0.02 : 0.03,
          z: isMobile ? -0.18 : -0.37,
          scrollTrigger: {
            trigger: "#second",
            start: "top bottom",
            end: " bottom 80%",
            scrub: true,
            immediateRender: false,
          },
        })
        .to("#section--two--container", {
          xPercent: "150",
          opacity: 0,
          scrollTrigger: {
            trigger: "#third",
            start: "top bottom",
            end: "top 80%",
            scrub: 1,
            immediateRender: false,
          },
        })

        // LAST SECTION

        .to(position, {
          x: isMobile ? -2.59 : -3.4,
          y: isMobile ? 13.46 : 9.6,
          z: isMobile ? 1.49 : 1.71,
          scrollTrigger: {
            trigger: "#third",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
          onUpdate,
        })

        .to(target, {
          x: isMobile ? 0.6 : -1.5,
          y: isMobile ? 0.02 : 2.13,
          z: isMobile ? 0.83 : -0.4,
          scrollTrigger: {
            trigger: "#third",
            start: "top bottom",
            end: "top top",
            scrub: true,
            immediateRender: false,
          },
        })
    }
    setupScrollanimation()

    function onUpdate() {
      setNeedsUpdate(true)
      // viewer.renderer.resetShadows()
      viewer.setDirty()
    }
    viewer.addEventListener("preFrame", () => {
      if (needsUpdate) {
        camera.positionTargetUpdated(true)
        setNeedsUpdate(false)
      }
    })

    // CUSTOMIZE
    const firstsections = document.getElementById("first") as HTMLDivElement
    const secondSection = document.getElementById("second") as HTMLDivElement
    const thirdSection = document.getElementById("third") as HTMLDivElement
    const footer = document.getElementById("footer") as HTMLDivElement
    const mainContainer = document.getElementById(
      "webgi-canvas-container"
    ) as HTMLDivElement
    document
      .getElementById("button--customize")
      ?.addEventListener("click", () => {
        gsap.to(position, {
          x: isMobile ? -14.17 : -8.05,
          y: isMobile ? 4.07 : -0.03,
          z: isMobile ? 2.39 : 1.43,
          duration: 2,
          ease: "power3.inOut",
          onUpdate,
        })
        gsap.to(target, {
          x: isMobile ? -0.05 : 0.74,
          y: isMobile ? 0.21 : -0.22,
          z: isMobile ? 1.41 : 0.03,
          duration: 2,
          ease: "power3.inOut",
          onUpdate,
          onComplete: enableControlers,
        })
        firstsections.style.display = "none"
        secondSection.style.display = "none"
        thirdSection.style.display = "none"
        footer.style.display = "none"
        mainContainer.style.pointerEvents = "all"
        document.body.style.cursor = "grab"
      })

    function enableControlers() {
      exitButton.style.display = "block"
      animateButton.style.display = "block"
      pauseButton.style.display = "block"
      stopButton.style.display = "block"
      customizerInterface.style.display = "block"
      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: true })
    }
    // EXIT CUSTOMIZER
    exitButton.addEventListener("click", () => {
      gsap.to(position, {
        x: -6.47,
        y: 1.52,
        z: 5.1,
        duration: 1,
        ease: "power3.inOut",
        onUpdate,
      })
      gsap.to(target, {
        x: -0.38,
        y: -0.33,
        z: -1.14,
        duration: 1,
        ease: "power3.inOut",
        onUpdate,
      })

      viewer.scene.activeCamera.setCameraOptions({ controlsEnabled: false })
      firstsections.style.display = "flex"
      secondSection.style.display = "flex"
      thirdSection.style.display = "flex"
      footer.style.display = "flex"
      mainContainer.style.pointerEvents = "none"
      document.body.style.cursor = "default"
      exitButton.style.display = "none"
      animateButton.style.display = "none"
      pauseButton.style.display = "none"
      stopButton.style.display = "none"
      customizerInterface.style.display = "none"
      // lenis.start()
    })

    //Change color to silver
    document.getElementById("silver")?.addEventListener("click", () => {
      interShell.color = new Color(0x302f2b).convertSRGBToLinear()
      outerShell.color = new Color(0x302f2b).convertSRGBToLinear()
      cog.color = new Color(0x302f2b).convertSRGBToLinear()
      tail.color = new Color(0x949796).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0x949796).convertSRGBToLinear()
      plug.color = new Color(0x949796).convertSRGBToLinear()
      middlePart.color = new Color(0x949796).convertSRGBToLinear()
      sips.color = new Color(0xcbd916).convertSRGBToLinear()
      straw.color = new Color(0xcbd916).convertSRGBToLinear()
    })
    //Change color to black
    document.getElementById("black")?.addEventListener("click", () => {
      outerShell.color = new Color(0x151515).convertSRGBToLinear()
      interShell.color = new Color(0x151515).convertSRGBToLinear()
      cog.color = new Color(0x151515).convertSRGBToLinear()
      tail.color = new Color(0xff4901).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0xff4901).convertSRGBToLinear()
      plug.color = new Color(0x151515).convertSRGBToLinear()
      middlePart.color = new Color(0x000000).convertSRGBToLinear()
      sips.color = new Color(0xff4901).convertSRGBToLinear()
      straw.color = new Color(0xff4901).convertSRGBToLinear()
    })
    //Change color to cyon
    document.getElementById("cyon")?.addEventListener("click", () => {
      outerShell.color = new Color(0x00cff6).convertSRGBToLinear()
      interShell.color = new Color(0x00cff6).convertSRGBToLinear()
      cog.color = new Color(0x00cff6).convertSRGBToLinear()
      tail.color = new Color(0x3197b2).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0x3197b2).convertSRGBToLinear()
      plug.color = new Color(0x00cff6).convertSRGBToLinear()
      middlePart.color = new Color(0x00cff6).convertSRGBToLinear()
      sips.color = new Color(0x3197b2).convertSRGBToLinear()
      straw.color = new Color(0x5a646a).convertSRGBToLinear()
    })
    //Change color to pink
    document.getElementById("pink")?.addEventListener("click", () => {
      outerShell.color = new Color(0xffbbed).convertSRGBToLinear()
      interShell.color = new Color(0xffbbed).convertSRGBToLinear()
      cog.color = new Color(0xffbbed).convertSRGBToLinear()
      tail.color = new Color(0xff779c).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0xff779c).convertSRGBToLinear()
      plug.color = new Color(0xffbbed).convertSRGBToLinear()
      middlePart.color = new Color(0xffbbed).convertSRGBToLinear()
      sips.color = new Color(0xff779c).convertSRGBToLinear()
      straw.color = new Color(0x726c6c).convertSRGBToLinear()
    })
    //Change color to blue
    document.getElementById("blue")?.addEventListener("click", () => {
      outerShell.color = new Color(0x2b5dd7).convertSRGBToLinear()
      interShell.color = new Color(0x2b5dd7).convertSRGBToLinear()
      cog.color = new Color(0x2b5dd7).convertSRGBToLinear()
      tail.color = new Color(0x3448b3).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0x3448b3).convertSRGBToLinear()
      plug.color = new Color(0x2b5dd7).convertSRGBToLinear()
      middlePart.color = new Color(0x2b5dd7).convertSRGBToLinear()
      sips.color = new Color(0x3448b3).convertSRGBToLinear()
      straw.color = new Color(0x5a646a).convertSRGBToLinear()
    })
    //Change color to indigo
    document.getElementById("indigo")?.addEventListener("click", () => {
      outerShell.color = new Color(0x713bb9).convertSRGBToLinear()
      interShell.color = new Color(0x713bb9).convertSRGBToLinear()
      cog.color = new Color(0x713bb9).convertSRGBToLinear()
      tail.color = new Color(0xaf76ec).convertSRGBToLinear()
      betweenTailandShell.color = new Color(0xaf76ec).convertSRGBToLinear()
      plug.color = new Color(0x713bb9).convertSRGBToLinear()
      middlePart.color = new Color(0x713bb9).convertSRGBToLinear()
      sips.color = new Color(0xaf76ec).convertSRGBToLinear()
      straw.color = new Color(0x5a646a).convertSRGBToLinear()
    })
  }, [])

  useEffect(() => {
    setupViewer()
  }, [])
  return (
    <>
      <div
        id="webgi-canvas-container"
        className=" w-screen h-screen fixed flex justify-end items-center flex-col"
      >
        <canvas
          id="webgi-canvas"
          ref={canvasRef}
          className="h-full w-full bg-transparent fixed top-0"
        />

        <button
          id="button--exit"
          className="border hidden border-white rounded-3xl py-2 px-5 items-center gap-x-2 hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent z-20 mb-2"
        >
          <div className="flex items-center gap-x-3">
            <ArrowLeftOnRectangleIcon className="h-5 w-5" />
            Exit
          </div>
        </button>
      </div>
      <div
        id="customizer--container"
        className="fixed top-[30%] left-0 ml-2 m-auto hidden"
      >
        <ul id="strap--colors" className="flex flex-col gap-y-2">
          <li
            id="silver"
            className="w-9 h-9 rounded-full p-2 bg-[#A1A19F] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
          <li
            id="black"
            className="w-9 h-9 rounded-full p-2 bg-[#151515] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
          <li
            id="cyon"
            className="w-9 h-9 rounded-full p-2 bg-[#00CFF6] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
          <li
            id="pink"
            className="w-9 h-9 rounded-full p-2 bg-[#DF2A56] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
          <li
            id="blue"
            className="w-9 h-9 rounded-full p-2 bg-[#3646D3] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
          <li
            id="indigo"
            className="w-9 h-9 rounded-full p-2 bg-[#713BB9] hover:w-12 hover:h-12 hover:shadow-lg transition-all duration-150"
          ></li>
        </ul>
        <div className="fixed top-[30%] right-0 mr-2">
          <button
            id="button--animate"
            className="border hidden border-white rounded-full p-2 items-center hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent z-20 mb-2"
          >
            <Cog8ToothIcon className="h-8 w-8" />
          </button>
          <button
            id="button--pause"
            className="border hidden border-white rounded-full p-2 items-center hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent z-20 mb-2"
          >
            <PauseIcon className="h-8 w-8" />
          </button>
          <button
            id="button--stop"
            className="border hidden border-white rounded-full p-2 items-center hover:bg-gradient-to-r from-[#ff7043] to-orange-600 hover:border-transparent z-20 mb-2"
          >
            <StopIcon className="h-8 w-8" />
          </button>
        </div>
      </div>
    </>
  )
}

export default AirUpModel
