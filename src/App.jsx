import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './assets/pages/Homepage';
import LightLab from "./assets/pages/LightLab";
import SoundLab from "./assets/pages/SoundLab";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index path="/" element={<Homepage/>}/>
      <Route index path="simulador-sonido" element={<SoundLab/>}/>
      <Route index path="simulador-frecuencias" element={<LightLab/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;