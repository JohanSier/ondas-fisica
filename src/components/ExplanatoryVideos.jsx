import { useState, useRef } from "react";
import { CgClose } from "react-icons/cg";

const ExplanatoryVideos = ({ question, videoSrc, onClose }) => {
  const [isFading, setIsFading] = useState(false);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
    setIsFading(true);
  };

  const handleTransitionEnd = () => {
    if (isFading && typeof onClose === "function") {
      onClose();
    }
  };

  return (
    <main
      className={`px-15 py-15 absolute w-full h-full flex items-center justify-center backdrop-blur-md transition-opacity duration-1000 ease-in-out ${
        isFading ? "opacity-0 pointer-events-none" : "opacity-100"
      } z-100`}
      onTransitionEnd={handleTransitionEnd}
    >
      <div className="relative h-150 bg-neutral-900 rounded-xl shadow-xl max-w-xl w-full font-light text-lg whitespace-pre-wrap p-8 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
        <div
          onClick={handleClick}
          className="absolute right-6 flex items-center justify-center cursor-pointer rounded-full w-7 h-7 bg-red-500 "
        >
          <CgClose size={0} />
        </div>

        <div className="mt-5 flex flex-col gap-2">
          <span className="inline-flex w-fit rounded-full bg-purple-700 text-white text-[.8rem] font-medium py-1 px-3 text-center">
            Pregunta
          </span>
          <p className="text-white text-4xl font-bold">{question}</p>
        </div>

        <div className="mt-5 flex flex-col gap-4">
          <span className="inline-flex w-fit rounded-full bg-orange-600 text-white text-[.8rem] font-medium py-1 px-3 text-center">
            Video Explicatorio
          </span>
          <video
            ref={videoRef}
            src={videoSrc}
            muted
            autoPlay
            loop={false}
            controls
            playsInline
            className="object-cover"
            preload="none"
          ></video>
        </div>
      </div>
    </main>
  );
};

export default ExplanatoryVideos;
