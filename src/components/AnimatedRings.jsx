// components/AnimatedRings.jsx
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const AnimatedRings = () => {
  const svgRef = useRef(null);

  useEffect(() => {
    gsap.set(svgRef.current, { visibility: "visible" });

    const circles = svgRef.current.querySelectorAll("#ringGroup circle");

    gsap.from(circles, {
      duration: 3,
      rotation: -360,
      transformOrigin: "50% 50%",
      stagger: {
        each: 0.095,
        repeat: -1,
        yoyo: true,
      },
    });
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden flex items-center justify-center">
      <svg
        ref={svgRef}
        id="mainSVG"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 800 600"
        className="w-full h-full"
      >
        {/* Copia aquí todo el contenido de tu <defs> y <g> de tu SVG */}
        <defs>
          <linearGradient
            class="grad"
            id="ringGrad_2"
            data-name="New Gradient Swatch 2"
            x1="128.85"
            y1="300"
            x2="671.15"
            y2="300"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stop-color="#f7ffd4" />
            <stop offset=".3" stop-color="#00AA69" />
            <stop offset=".83" stop-color="#000" />
          </linearGradient>
          <linearGradient
            class="grad"
            id="ringGrad_2-2"
            data-name="New Gradient Swatch 2"
            x1="135.2"
            x2="664.8"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-3"
            data-name="New Gradient Swatch 2"
            x1="141.56"
            y1="300"
            x2="658.44"
            y2="300"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-4"
            data-name="New Gradient Swatch 2"
            x1="147.92"
            x2="652.08"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-5"
            data-name="New Gradient Swatch 2"
            x1="154.27"
            x2="645.73"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-6"
            data-name="New Gradient Swatch 2"
            x1="160.63"
            x2="639.37"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-7"
            data-name="New Gradient Swatch 2"
            x1="166.98"
            x2="633.02"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-8"
            data-name="New Gradient Swatch 2"
            x1="173.34"
            x2="626.66"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-9"
            data-name="New Gradient Swatch 2"
            x1="179.69"
            y1="300"
            x2="620.31"
            y2="300"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-10"
            data-name="New Gradient Swatch 2"
            x1="186.05"
            x2="613.95"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-11"
            data-name="New Gradient Swatch 2"
            x1="192.41"
            x2="607.59"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-12"
            data-name="New Gradient Swatch 2"
            x1="198.76"
            x2="601.24"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-13"
            data-name="New Gradient Swatch 2"
            x1="205.12"
            x2="594.88"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-14"
            data-name="New Gradient Swatch 2"
            x1="211.47"
            x2="588.53"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-15"
            data-name="New Gradient Swatch 2"
            x1="217.83"
            x2="582.17"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-16"
            data-name="New Gradient Swatch 2"
            x1="224.19"
            x2="575.81"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-17"
            data-name="New Gradient Swatch 2"
            x1="230.54"
            x2="569.46"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-18"
            data-name="New Gradient Swatch 2"
            x1="236.9"
            x2="563.1"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-19"
            data-name="New Gradient Swatch 2"
            x1="243.25"
            y1="300"
            x2="556.75"
            y2="300"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-20"
            data-name="New Gradient Swatch 2"
            x1="249.61"
            x2="550.39"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-21"
            data-name="New Gradient Swatch 2"
            x1="255.96"
            x2="544.04"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-22"
            data-name="New Gradient Swatch 2"
            x1="262.32"
            y1="300"
            x2="537.68"
            y2="300"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-23"
            data-name="New Gradient Swatch 2"
            x1="268.68"
            x2="531.32"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-24"
            data-name="New Gradient Swatch 2"
            x1="275.03"
            x2="524.97"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-25"
            data-name="New Gradient Swatch 2"
            x1="281.39"
            x2="518.61"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-26"
            data-name="New Gradient Swatch 2"
            x1="287.74"
            x2="512.26"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-27"
            data-name="New Gradient Swatch 2"
            x1="294.1"
            x2="505.9"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-28"
            data-name="New Gradient Swatch 2"
            x1="300.45"
            x2="499.55"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-29"
            data-name="New Gradient Swatch 2"
            x1="306.81"
            x2="493.19"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-30"
            data-name="New Gradient Swatch 2"
            x1="313.17"
            x2="486.83"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-31"
            data-name="New Gradient Swatch 2"
            x1="319.52"
            x2="480.48"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-32"
            data-name="New Gradient Swatch 2"
            x1="325.88"
            x2="474.12"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-33"
            data-name="New Gradient Swatch 2"
            x1="332.23"
            x2="467.77"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-34"
            data-name="New Gradient Swatch 2"
            x1="338.59"
            x2="461.41"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-35"
            data-name="New Gradient Swatch 2"
            x1="344.95"
            x2="455.05"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-36"
            data-name="New Gradient Swatch 2"
            x1="351.3"
            x2="448.7"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-37"
            data-name="New Gradient Swatch 2"
            x1="357.66"
            x2="442.34"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-38"
            data-name="New Gradient Swatch 2"
            x1="364.01"
            x2="435.99"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-39"
            data-name="New Gradient Swatch 2"
            x1="370.37"
            x2="429.63"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-40"
            data-name="New Gradient Swatch 2"
            x1="376.72"
            y1="300"
            x2="423.28"
            y2="300"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-41"
            data-name="New Gradient Swatch 2"
            x1="383.08"
            x2="416.92"
            xlink:href="#ringGrad_2"
          />
          <linearGradient
            class="grad"
            id="ringGrad_2-42"
            data-name="New Gradient Swatch 2"
            x1="389.44"
            x2="410.56"
            xlink:href="#ringGrad_2"
          />
        </defs>

        <g id="ringGroup" strokeWidth="5">
          <circle
            cx="400"
            cy="300"
            r="270.65"
            fill="none"
            stroke="url(#ringGrad_2)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="264.3"
            fill="none"
            stroke="url(#ringGrad_2-2)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="257.94"
            fill="none"
            stroke="url(#ringGrad_2-3)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="251.58"
            fill="none"
            stroke="url(#ringGrad_2-4)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="245.23"
            fill="none"
            stroke="url(#ringGrad_2-5)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="238.87"
            fill="none"
            stroke="url(#ringGrad_2-6)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="232.52"
            fill="none"
            stroke="url(#ringGrad_2-7)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="226.16"
            fill="none"
            stroke="url(#ringGrad_2-8)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="219.81"
            fill="none"
            stroke="url(#ringGrad_2-9)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="213.45"
            fill="none"
            stroke="url(#ringGrad_2-10)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="207.09"
            fill="none"
            stroke="url(#ringGrad_2-11)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="200.74"
            fill="none"
            stroke="url(#ringGrad_2-12)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="194.38"
            fill="none"
            stroke="url(#ringGrad_2-13)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="188.03"
            fill="none"
            stroke="url(#ringGrad_2-14)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="181.67"
            fill="none"
            stroke="url(#ringGrad_2-15)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="175.31"
            fill="none"
            stroke="url(#ringGrad_2-16)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="168.96"
            fill="none"
            stroke="url(#ringGrad_2-17)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="162.6"
            fill="none"
            stroke="url(#ringGrad_2-18)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="156.25"
            fill="none"
            stroke="url(#ringGrad_2-19)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="149.89"
            fill="none"
            stroke="url(#ringGrad_2-20)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="143.54"
            fill="none"
            stroke="url(#ringGrad_2-21)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="137.18"
            fill="none"
            stroke="url(#ringGrad_2-22)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="130.82"
            fill="none"
            stroke="url(#ringGrad_2-23)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="124.47"
            fill="none"
            stroke="url(#ringGrad_2-24)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="118.11"
            fill="none"
            stroke="url(#ringGrad_2-25)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="111.76"
            fill="none"
            stroke="url(#ringGrad_2-26)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="105.4"
            fill="none"
            stroke="url(#ringGrad_2-27)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="99.05"
            fill="none"
            stroke="url(#ringGrad_2-28)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="92.69"
            fill="none"
            stroke="url(#ringGrad_2-29)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="86.33"
            fill="none"
            stroke="url(#ringGrad_2-30)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="79.98"
            fill="none"
            stroke="url(#ringGrad_2-31)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="73.62"
            fill="none"
            stroke="url(#ringGrad_2-32)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="67.27"
            fill="none"
            stroke="url(#ringGrad_2-33)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="60.91"
            fill="none"
            stroke="url(#ringGrad_2-34)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="54.55"
            fill="none"
            stroke="url(#ringGrad_2-35)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="48.2"
            fill="none"
            stroke="url(#ringGrad_2-36)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="41.84"
            fill="none"
            stroke="url(#ringGrad_2-37)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="35.49"
            fill="none"
            stroke="url(#ringGrad_2-38)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="29.13"
            fill="none"
            stroke="url(#ringGrad_2-39)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="22.78"
            fill="none"
            stroke="url(#ringGrad_2-40)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="16.42"
            fill="none"
            stroke="url(#ringGrad_2-41)"
            stroke-miterlimit="10"
          />
          <circle
            cx="400"
            cy="300"
            r="10.06"
            fill="none"
            stroke="url(#ringGrad_2-42)"
            stroke-miterlimit="10"
          />
        </g>
      </svg>
    </div>
  );
};

export default AnimatedRings;
