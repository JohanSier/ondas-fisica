import { useState, useEffect } from 'react';
import { TbMoodLookDown } from "react-icons/tb";
import { TbMoodLookRight } from "react-icons/tb";
import { IoArrowBackOutline } from "react-icons/io5";
import { IoPlay } from "react-icons/io5";
import Overlay from "../../components/ExplanatoryVideos";

import ondasVideo from "../videos/longitudesDeOnda.mp4"
import videoEjemplo from "../videos/videoEjemplo.mp4"
import { Link } from 'react-router-dom';

export default function LightLab() {
  const [frequency, setFrequency] = useState(0); // Default to black

  const [confirmedFrequency, setConfirmedFrequency] = useState(null);
  const [wavelength, setWavelength] = useState(0);
  const [color, setColor] = useState('rgb(0, 0, 0)');
  const [visible, setVisible] = useState(false);

  const [showRanges, setShowRanges] = useState(false);
  const [src, setSrc] = useState("")
  const [q, setQ] = useState("")
  const [showOverlay, setShowOverlay] = useState(false);
  // New state for watched videos and current video
  const [watchedVideos, setWatchedVideos] = useState(new Set());
  const [currentVideo, setCurrentVideo] = useState(null);

  function visibleOverlay(link, question) {
    setShowOverlay(false);
    setTimeout(() => {
      setSrc(link);
      setQ(question);
      setCurrentVideo(link);
      setShowOverlay(true);
    }, 50);
  }
  
  // Frequency to color mapping
  const frequencyToColor = (freq) => {
    // Visible spectrum ranges (THz)
    const visibleRanges = [
      { min: 405, max: 480, color: 'red' },       // 625–740 nm
      { min: 480, max: 510, color: 'orange' },    // 590–625 nm
      { min: 510, max: 530, color: 'yellow' },    // 565–590 nm
      { min: 530, max: 600, color: 'green' },     // 500–565 nm
      { min: 600, max: 620, color: 'cyan' },      // 485–500 nm
      { min: 620, max: 680, color: 'blue' },      // 440–485 nm
      { min: 680, max: 790, color: 'violet' }     // 380–440 nm
    ];

    // Convert frequency to wavelength (nm)
    const wavelength = (3e8 / (freq * 1e12)) * 1e9;
    setWavelength(wavelength);

    // Check if frequency is visible
    if (freq < 405 || freq > 790) {
      setVisible(false);
      return freq < 405 ? 'black' : 'white'; // Infrared or ultraviolet
    }

    setVisible(true);
    
    // Find which visible range the frequency falls into
    const range = visibleRanges.find(r => freq >= r.min && freq < r.max);
    if (!range) return 'white';

    // Calculate RGB values based on frequency position in the range
    const position = (freq - range.min) / (range.max - range.min);

    const interpolate = (start, end, factor) => Math.round(start + (end - start) * factor);

    switch (range.color) {
      case 'red': {
        const r = 255;
        const g = interpolate(0, 100, 1 - position); 
        const b = 0;
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'orange': {
        const r = 255;
        const g = interpolate(100, 165, position);
        const b = 0;
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'yellow': {
        const r = 255;
        const g = 255;
        const b = interpolate(0, 50, 1 - position);
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'green': {
        const r = 0;
        const g = 255;
        const b = interpolate(0, 100, position);
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'cyan': {
        const r = 0;
        const g = 255;
        const b = interpolate(255, 200, 1 - position);
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'blue': {
        const r = interpolate(0, 50, 1 - position);
        const g = interpolate(0, 50, 1 - position);
        const b = 255;
        return `rgb(${r}, ${g}, ${b})`;
      }
      case 'violet': {
        const r = interpolate(100, 148, position);
        const g = 0;
        const b = interpolate(211, 255, position);
        return `rgb(${r}, ${g}, ${b})`;
      }
    }
  };

  useEffect(() => {
    if (confirmedFrequency !== null) {
      const newColor = frequencyToColor(confirmedFrequency);
      setColor(newColor);
    }
  }, [confirmedFrequency]);

  return (
    
    <div 
      className="min-h-screen flex items-center justify-center gap-1 p-8 transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      {showOverlay && (
        <Overlay
          videoSrc={src}
          question={q}
          onClose={() => {
            setWatchedVideos((prev) => new Set(prev).add(currentVideo));
            setShowOverlay(false);
          }}
        />
      )}

      <div className='flex flex-col pt-3 px-2 bg-black w-15 h-165 rounded-xl'>
        <Link to='/' title="Back Button "className='cursor-pointer flex items-center justify-center w-full h-10 bg-[black] hover:bg-[#1B1D23] rounded-[.8rem]'>
          <IoArrowBackOutline size={24}/>
        </Link>

        <div className='flex mt-5 flex-col gap-1'>
          <button
            title="First Video"
            onClick={() => visibleOverlay(ondasVideo, "¿Qué representa la longitud de onda en el contexto de la luz?")}
            className={`cursor-pointer border border-black flex items-center justify-center w-full h-10 rounded-[.8rem] ${
              watchedVideos.has(ondasVideo)
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#1B1D23] hover:bg-[#121317]'
            }`}
          >
            <IoPlay color="#E2E2E2" size={20} />
          </button>

          <button
            title="Second Video"
            onClick={() => visibleOverlay(videoEjemplo, "¿Cúal es la física detrás de la percepción del color?")}
            className={`cursor-pointer border border-black flex items-center justify-center w-full h-10 rounded-[.8rem] ${
              watchedVideos.has(videoEjemplo)
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#1B1D23] hover:bg-[#121317]'
            }`}
          >
            <IoPlay color="#E2E2E2" size={20} />
          </button>

          <Link title="Third Video" className='cursor-pointer border border-black flex items-center justify-center w-full h-10 bg-[#1B1D23] hover:bg-[#121317] rounded-[.8rem]'>
            <IoPlay color="#E2E2E2" size={20}/>
          </Link>

          <Link title="Fourth Video" className='cursor-pointer border border-black flex items-center justify-center w-full h-10 bg-[#1B1D23] hover:bg-[#121317] rounded-[.8rem]'>
            <IoPlay color="#E2E2E2" size={20}/>
          </Link>

          <Link title="Fifth Video" className='cursor-pointer border border-black flex items-center justify-center w-full h-10 bg-[#1B1D23] hover:bg-[#121317] rounded-[.8rem]'>
            <IoPlay color="#E2E2E2" size={20}/>
          </Link>

          <Link title="Sixth Video" className='cursor-pointer border border-black flex items-center justify-center w-full h-10 bg-[#1B1D23] hover:bg-[#121317] rounded-[.8rem]'>
            <IoPlay color="#E2E2E2" size={20}/>
          </Link>
        </div>






        
      </div>
      <div className="bg-black bg-opacity-70 text-white p-8 rounded-lg h-165 max-w-2xl w-full">
        <h1 className="text-4xl mb-6">Simulador Frecuencias de Luz</h1>
        
        <div className="">
          <label htmlFor="frequency" className="block text-xl mb-2">
            Introduce la Frecuencia de la Luz (THz):
          </label>
          <input
            id="frequency"
            type="number"
            min="1"
            max="1000"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                setConfirmedFrequency(Number(e.target.value));
              }
            }}
            className="w-full p-3 rounded border border-white text-white text-xl"
          />
          {confirmedFrequency !== null && (
            <div className="mt-2 text-lg">
              Actual: {confirmedFrequency} THz ({wavelength.toFixed(2)} nm)
            </div>
          )}
        </div>

        <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-6">
          <div className="flex justify-between">
          <h2 className="text-2xl mb-3">
            {visible ? (
              <span className="text-green-400">Luz Visible</span>
            ) : confirmedFrequency < 405 ? (
              <span className="text-red-400">Infrarrojo (No Visible)</span>
            ) : (
              <span className="text-purple-400">Ultravioleta (No Visible)</span>
            )}
          </h2>
          
          <button
            onClick={() => setShowRanges(!showRanges)}
            className="cursor-pointer mb-4 px-3 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all duration-300 ease-in-out"
            title="Mostrar/Ocultar Rangos"
          >
            {showRanges ? <TbMoodLookDown size={24}/> : <TbMoodLookRight size={24}/>}
          </button>
          </div>
          

          <div className="grid grid-cols-9 gap-2">
            {[
              { label: 'Infrarrojo', min: 300, max: 404, color: 'black' },
              { label: 'Rojo', min: 405, max: 479, color: 'red' },
              { label: 'Naranja', min: 480, max: 509, color: 'orange' },
              { label: 'Amarillo', min: 510, max: 529, color: 'yellow' },
              { label: 'Verde', min: 530, max: 599, color: 'green' },
              { label: 'Cian', min: 600, max: 619, color: 'cyan' },
              { label: 'Azul', min: 620, max: 679, color: 'blue' },
              { label: 'Violeta', min: 680, max: 789, color: 'purple' },
              { label: 'Ultravioleta', min: 790, max: 850, color: 'white' }
            ].map((range) => (
              <div key={range.label} className="text-center">
                <div 
                  style={{ backgroundColor: range.color }}
                  className={`h-6 w-full border ${frequency >= range.min && frequency < range.max ? 'border-white border-2' : ''}`}
                ></div>
                <div className="text-sm mt-1">{range.label}</div>
                {showRanges && (
                  <div className="text-xs">
                    {range.min}-{range.max}THz
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black bg-opacity-50 p-4 -mt-8 rounded-lg">
          <h2 className="text-2xl mb-2">Explicación Física</h2>
          <p className="mb-3">
            La luz visible representa una pequeña porción del espectro electromagnético,
            que va aproximadamente desde los 405 THz (rojo) hasta los 790 THz (violeta).
          </p>
          {!visible && (
            <p className="text-yellow-300">
              La frecuencia que has seleccionado está fuera del rango visible para los humanos.
              Estamos mostrando {confirmedFrequency < 405 ? 'negro para infrarrojo' : 'blanco para ultravioleta'}.
            </p>
          )}
          <p className="mt-3">
            La frecuencia y la longitud de onda están relacionadas por la fórmula: λ = c/f,
            donde c ≈ 3×10⁸ m/s (velocidad de la luz).
          </p>
        </div>
      </div>
    </div>
  );
}