import { useState, useEffect } from 'react';

export default function LightLab() {
  const [frequency, setFrequency] = useState(500); // Default to green-ish
  const [wavelength, setWavelength] = useState(0);
  const [color, setColor] = useState('rgb(0, 255, 0)');
  const [visible, setVisible] = useState(true);

  // Frequency to color mapping
  const frequencyToColor = (freq) => {
    // Visible spectrum ranges (THz)
    const visibleRanges = [
      { min: 400, max: 484, color: 'red' },     // Red
      { min: 484, max: 508, color: 'orange' },  // Orange
      { min: 508, max: 526, color: 'yellow' },   // Yellow
      { min: 526, max: 606, color: 'green' },    // Green
      { min: 606, max: 668, color: 'blue' },     // Blue
      { min: 668, max: 789, color: 'violet' }   // Violet
    ];

    // Convert frequency to wavelength (nm)
    const wavelength = (3e8 / (freq * 1e12)) * 1e9;
    setWavelength(wavelength);

    // Check if frequency is visible
    if (freq < 400 || freq > 789) {
      setVisible(false);
      return freq < 400 ? 'black' : 'white'; // Infrared or ultraviolet
    }

    setVisible(true);
    
    // Find which visible range the frequency falls into
    const range = visibleRanges.find(r => freq >= r.min && freq < r.max);
    if (!range) return 'white';

    // Calculate RGB values based on frequency position in the range
    const position = (freq - range.min) / (range.max - range.min);
    
    switch(range.color) {
      case 'red':
        return `rgb(255, ${Math.floor(255 * (1 - position))}, 0)`;
      case 'orange':
        return `rgb(255, ${Math.floor(165 + 90 * position)}, 0)`;
      case 'yellow':
        return `rgb(255, 255, ${Math.floor(100 * position)})`;
      case 'green':
        return `rgb(${Math.floor(255 * (1 - position))}, 255, 0)`;
      case 'blue':
        return `rgb(0, ${Math.floor(255 * (1 - position))}, 255)`;
      case 'violet':
        return `rgb(${Math.floor(150 + 105 * position)}, 0, ${Math.floor(255 - 100 * position)})`;
      default:
        return 'white';
    }
  };

  useEffect(() => {
    const newColor = frequencyToColor(frequency);
    setColor(newColor);
  }, [frequency]);

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center p-8 transition-colors duration-500"
      style={{ backgroundColor: color }}
    >
      <div className="bg-black bg-opacity-70 text-white p-8 rounded-lg max-w-2xl w-full">
        <h1 className="text-4xl mb-6">Electromagnetic Spectrum Explorer</h1>
        
        <div className="mb-8">
          <label htmlFor="frequency" className="block text-xl mb-2">
            Enter Light Frequency (THz):
          </label>
          <input
            id="frequency"
            type="number"
            min="1"
            max="1000"
            step="1"
            value={frequency}
            onChange={(e) => setFrequency(Number(e.target.value))}
            className="w-full p-3 rounded text-black text-xl"
          />
          <div className="mt-2 text-lg">
            Current: {frequency} THz ({wavelength.toFixed(2)} nm)
          </div>
        </div>

        <div className="bg-black bg-opacity-50 p-4 rounded-lg mb-6">
          <h2 className="text-2xl mb-3">
            {visible ? (
              <span className="text-green-400">Visible Light</span>
            ) : frequency < 400 ? (
              <span className="text-red-400">Infrared (Not Visible)</span>
            ) : (
              <span className="text-purple-400">Ultraviolet (Not Visible)</span>
            )}
          </h2>
          
          <div className="grid grid-cols-7 gap-2 mb-4">
            {[
              { label: 'Infrared', min: 300, max: 400, color: 'black' },
              { label: 'Red', min: 400, max: 484, color: 'red' },
              { label: 'Orange', min: 484, max: 508, color: 'orange' },
              { label: 'Yellow', min: 508, max: 526, color: 'yellow' },
              { label: 'Green', min: 526, max: 606, color: 'green' },
              { label: 'Blue', min: 606, max: 668, color: 'blue' },
              { label: 'UV', min: 668, max: 800, color: 'purple' }
            ].map((range) => (
              <div key={range.label} className="text-center">
                <div 
                  className={`h-6 w-full bg-${range.color}-500 border ${frequency >= range.min && frequency < range.max ? 'border-white border-2' : ''}`}
                ></div>
                <div className="text-sm mt-1">{range.label}</div>
                <div className="text-xs">
                  {range.min}-{range.max}THz
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
          <h2 className="text-2xl mb-2">Physics Explanation</h2>
          <p className="mb-3">
            Visible light occupies just a small portion of the electromagnetic spectrum,
            ranging from approximately 400 THz (violet) to 789 THz (red).
          </p>
          {!visible && (
            <p className="text-yellow-300">
              The frequency you've selected is outside the visible range for humans.
              We're displaying {frequency < 400 ? 'black for infrared' : 'white for ultraviolet'}.
            </p>
          )}
          <p className="mt-3">
            Frequency and wavelength are related by: λ = c/f where c ≈ 3×10⁸ m/s (speed of light).
          </p>
        </div>
      </div>
    </div>
  );
}