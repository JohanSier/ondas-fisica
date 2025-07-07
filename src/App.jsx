// App.jsx o donde quieras mostrar el fondo animado
import AnimatedRings from './components/AnimatedRings';

function App() {
  return (
    <div className="absolute z-0">
      <AnimatedRings />
      <div className="absolute top-0 z-10 text-white flex items-center justify-center">
        {/* Aquí va el contenido de tu sitio */}
        <h1 className="text-4xl font-bold">Simuladores de Ondas</h1>
      </div>
    </div>
  );
}

export default App;