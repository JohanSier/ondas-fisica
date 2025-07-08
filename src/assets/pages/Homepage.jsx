import AnimatedRings from "../../components/AnimatedRings";
import SimulationCards from "../../components/SimulationCard"

import Waves from "../images/waves.svg"
import Color from "../images/ElectromagneticWaves.svg"

const Homepage = () => {
  return (
    <div className="absolute left-[20%] z-0">
      <AnimatedRings />
      <div className=" z-10 text-white flex items-center justify-center">
        {/* Aquí va el contenido de tu sitio */}
        <div className="flex flex-col justify-center items-center absolute top-[50%] left-[37%] transform -translate-x-1/2 -translate-y-1/2 text-4xl font-medium">
          <h1>Simuladores de Ondas</h1>
          <div className="mt-10 flex gap-10">
            <SimulationCards title="Ondas Sonoras" src={Waves}/>
            <SimulationCards title="Ondas Electromagnéticas" src={Color}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
