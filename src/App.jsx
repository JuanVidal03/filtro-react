// tabla componente
import Tabla from './components/Tabla.jsx';

function App() {
  
  const data = [
    {
      id: 12,
      nombre: 'Producto 1',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: 23,
      nombre: 'Producto 2',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: 45,
      nombre: 'Producto 3',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: 67,
      nombre: 'Producto 4',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    },
    {
      id: 34,
      nombre: 'Producto 5',
      descripcion: 'lLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam'
    }
  ]

  return (
    <div className='w-scrren h-screen flex justify-center items-center'>
      <Tabla data={data}/>
    </div>
  )
}

export default App
