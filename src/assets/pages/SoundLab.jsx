import { useRef, useState, useEffect } from "react";
import ondaGina from "../videos/onda.mp4";
import viajeSonido from "../videos/comoViajaSonido.mp4";

import { IoArrowBackOutline } from "react-icons/io5";
import { Chart } from "chart.js/auto";
import { useNavigate } from "react-router-dom";

import Overlay from "../../components/ExplanatoryVideos"

export default function SoundLab() {
  const [isListening, setIsListening] = useState(false);
  const [audioLevel, setAudioLevel] = useState(0);
  const audioContextRef = useRef(null);
  const analyserRef = useRef(null);
  const microphoneRef = useRef(null);
  const chartRef = useRef(null);
  const canvasRef = useRef(null);
  const animationFrameRef = useRef(null);
  const isListeningRef = useRef(false);
  const mediaStreamRef = useRef(null);
  const navigate = useNavigate();

  // Overlay/video state
  const [showOverlay, setShowOverlay] = useState(false);
  const [src, setSrc] = useState(null);
  const [q, setQ] = useState(null);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [watchedVideos, setWatchedVideos] = useState(new Set());

  function visibleOverlay(link, question) {
    setShowOverlay(false);
    setTimeout(() => {
      setSrc(link);
      setQ(question);
      setCurrentVideo(link);
      setShowOverlay(true);
    }, 50);
  }

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    chartRef.current = new Chart(ctx, {
      type: "line",
      data: {
        labels: Array.from({ length: 256 }, (_, i) => i),
        datasets: [
          {
            label: "Onda de Sonido",
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(75, 192, 192, 0.1)",
            borderWidth: 1,
            tension: 0.1,
            pointRadius: 0,
            fill: true,
            data: Array(256).fill(128),
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: { min: 0, max: 255, display: true },
          x: { display: true },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
        animation: {
          duration: 0,
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    return () => {
      detenerMicrofono();
    };
  }, []);

  const iniciarMicrofono = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: false,
          noiseSuppression: false,
          autoGainControl: false,
        },
      });
      mediaStreamRef.current = stream;

      audioContextRef.current = new (window.AudioContext ||
        window.webkitAudioContext)();
      await audioContextRef.current.resume();
      analyserRef.current = audioContextRef.current.createAnalyser();
      analyserRef.current.fftSize = 2048;
      analyserRef.current.smoothingTimeConstant = 0.8;

      microphoneRef.current =
        audioContextRef.current.createMediaStreamSource(stream);
      microphoneRef.current.connect(analyserRef.current);

      isListeningRef.current = true;
      setIsListening(true);
      animarOnda();
    } catch (err) {
      console.error("Error al acceder al micrófono:", err);
      alert(
        "No se pudo acceder al micrófono. Por favor verifica los permisos."
      );
    }
  };

  const detenerMicrofono = () => {
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
    }

    if (microphoneRef.current) {
      microphoneRef.current.disconnect();
    }

    if (audioContextRef.current && audioContextRef.current.state !== "closed") {
      audioContextRef.current.close();
    }

    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach((track) => track.stop());
    }

    isListeningRef.current = false;
    setIsListening(false);
    setAudioLevel(0);
  };

  const alternarMicrofono = () => {
    if (isListening) {
      detenerMicrofono();
    } else {
      iniciarMicrofono();
    }
  };

  const animarOnda = () => {
    if (!isListeningRef.current) return;

    const analyser = analyserRef.current;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);

    analyser.getByteTimeDomainData(dataArray);

    let sum = 0;
    for (let i = 0; i < bufferLength; i++) {
      const value = (dataArray[i] - 128) * 2;
      sum += value * value;
    }
    const rms = Math.sqrt(sum / bufferLength);
    const nivel = Math.min(100, Math.max(0, (rms / 128) * 100));
    setAudioLevel(nivel);

    if (chartRef.current) {
      chartRef.current.data.datasets[0].data = Array.from(dataArray);
      chartRef.current.update("none");
    }

    animationFrameRef.current = requestAnimationFrame(animarOnda);
  };

  return (
    <>
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
    <div className="pt-30 min-h-screen bg-gray-900 text-white p-8">

      
      <h1 className="text-center text-4xl mb-8">Simulador Ondas Sonoras</h1>

      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center gap-5">
          <button
            onClick={() => navigate("/")}
            className="cursor-pointer items-center flex-inline w-fit whitespace-nowrap bg-black hover:opacity-75 px-4 py-3 rounded-lg text-lg mb-8 text-center"
          >
            <IoArrowBackOutline size={24} />
          </button>

          <button
            onClick={alternarMicrofono}
            className={`cursor-pointer flex-inline w-fit items-center whitespace-nowrap px-6 py-3 rounded-lg text-lg mb-8 text-center ${
              isListening
                ? "bg-red-600 hover:bg-red-700"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isListening ? "Detener Micrófono" : "Activar Micrófono"}
          </button>


          <div className="flex -mt-7 gap-4 items-center">
            <button
            title="Video 1"
            onClick={() =>
              visibleOverlay(
                ondaGina,
                "¿Cómo las ondas de sonido se propagan por el aire?"
              )
            }
            className={`cursor-pointer flex items-center justify-center w-fit h-10 px-4 rounded-[.8rem] ${
              watchedVideos.has(ondaGina)
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#1B1D23] hover:bg-[#121317]'
            }`}
          >
            Video Explicativo 1
          </button>

          <button
            title="Video 2"
            onClick={() =>
              visibleOverlay(
                viajeSonido,
                "¿Qué es una onda?"
              )
            }
            className={`cursor-pointer flex items-center justify-center w-fit h-10 px-4 rounded-[.8rem] ${
              watchedVideos.has(viajeSonido)
                ? 'bg-green-600 hover:bg-green-700'
                : 'bg-[#1B1D23] hover:bg-[#121317]'
            }`}
          >
            Video Explicativo 2
          </button>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between mb-1">
            <span>Nivel de Audio:</span>
            <span>{Math.round(audioLevel)}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5 overflow-hidden">
            <div
              className="h-full transition-all duration-150 ease-out"
              style={{
                width: `${audioLevel}%`,
                backgroundColor:
                  audioLevel > 90
                    ? "#DC2626" // rojo
                    : audioLevel > 60
                    ? "#F97316" // naranja
                    : audioLevel > 30
                    ? "#FACC15" // amarillo
                    : "#3B82F6", // azul
              }}
            ></div>
          </div>
        </div>

        <div className="bg-gray-800 p-4 rounded-lg h-64">
          <canvas ref={canvasRef} className="w-full h-full"></canvas>
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg">
          <h2 className="text-2xl mb-4 font-bold">
            Física de las Ondas Sonoras
          </h2>
          <p className="mb-4">
            Cuando hablas, tus cuerdas vocales vibran, creando ondas de presión
            en el aire. Estas ondas son capturadas por el micrófono y
            visualizadas arriba.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Amplitud:</strong> indica qué tan alta es la onda, y está relacionada con el volumen del sonido.
            </li>
            <li>
              <strong>Frecuencia:</strong> representa el número de oscilaciones por segundo, y determina el tono que percibimos.
            </li>
            <li>
              Los humanos pueden percibir sonidos con frecuencias entre 20 Hz y 20 000 Hz (20 kHz).
            </li>
          </ul>
        </div>
      </div>
    </div>
    </>
  );
}
