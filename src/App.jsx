// dependencias
import { useContext } from 'react';
// componentes
import Tabla from './components/Tabla.jsx';
import Buscador from './components/Buscador.jsx';
// contexto
import { InputContext } from './context/InputContext.jsx';


function App() {
  // data a renderizar
  const data = [
    {
      id: "12",
      nombre: 'Producto 1',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: "23",
      nombre: 'Producto 2',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: "45",
      nombre: 'Producto 3',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: "67",
      nombre: 'Producto 4',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: "34",
      nombre: 'Producto 5',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ]

  // data filtrada
  const { buscador } = useContext(InputContext);
  
  const dataFiltrada = data.filter(item => (item.id.includes(buscador.toLowerCase())) || (item.nombre.toLowerCase().includes(buscador.toLowerCase())) || (item.descripcion.toLowerCase().includes(buscador.toLowerCase())));

  return (
    <div className='w-scrren h-screen flex justify-center items-center flex-col max-w-[1000px] m-auto gap-8'>
      <h1 className='text-3xl uppercase font-bold'>Buscador!</h1>
      <Buscador/>
      <Tabla data={dataFiltrada}/>
    </div>
  )
}

export default App
