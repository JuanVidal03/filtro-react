// dependencias
import { useContext, useEffect, useState } from 'react';
// componentes
import Tabla from './components/Tabla.jsx';
import Buscador from './components/Buscador.jsx';
import Paginacion from './components/Paginacion.jsx';
// contexto
import { GlobalContext } from './context/GlobalContext.jsx';


function App() {

  const data = [
    {
      id: "1",
      nombre: "Camisa de algodón suave",
      descripcion: "Camisa de manga larga con tejido suave y cómodo, ideal para el día a día."
    },
    {
      id: "2",
      nombre: "Cafetera de acero inoxidable",
      descripcion: "Cafeera moderna con capacidad para preparar hasta 12 tazas de café, perfecta para amantes del buen café."
    },
    {
      id: "3",
      nombre: "Silla ergonómica ajustable",
      descripcion: "Silla de oficina con diseño ergonómico y ajustable, proporciona comodidad y soporte durante largas horas de trabajo."
    },
    {
      id: "4",
      nombre: "Paquete de seis cervezas artesanales",
      descripcion: "Disfruta de una variedad de cervezas artesanales, elaboradas con ingredientes de alta calidad y sabores únicos."
    },
    {
      id: "5",
      nombre: "Juego de sartenes antiadherentes",
      descripcion: "Set de sartenes de diferentes tamaños con recubrimiento antiadherente, facilita la preparación de deliciosas comidas sin que los alimentos se peguen."
    },
    {
      id: "6",
      nombre: "Libro de cocina internacional",
      descripcion: "Explora recetas auténticas de diferentes partes del mundo con este libro de cocina, perfecto para aficionados culinarios."
    },
    {
      id: "7",
      nombre: "Mochila resistente al agua",
      descripcion: "Mochila espaciosa con compartimentos impermeables, ideal para actividades al aire libre y viajes aventureros."
    },
    {
      id: "8",
      nombre: "Lámpara de escritorio LED",
      descripcion: "Lámpara moderna con tecnología LED, proporciona iluminación ajustable y sin parpadeos, perfecta para estudiar o trabajar."
    },
    {
      id: "9",
      nombre: "Altavoz Bluetooth portátil",
      descripcion: "Altavoz compacto con conexión Bluetooth, ofrece un sonido potente y claro en cualquier lugar, ideal para fiestas y reuniones."
    },
    {
      id: "10",
      nombre: "Cámara digital de alta resolución",
      descripcion: "Captura momentos especiales con esta cámara digital de alta resolución, equipada con funciones avanzadas para obtener imágenes y videos de calidad."
    },
    {
      id: "11",
      nombre: "Juego de herramientas de bricolaje",
      descripcion: "Kit completo de herramientas para bricolaje y reparaciones en el hogar, incluye todo lo necesario para proyectos de carpintería, fontanería y más."
    },
    {
      id: "12",
      nombre: "Zapatillas deportivas transpirables",
      descripcion: "Zapatillas cómodas y transpirables, ideales para correr, hacer ejercicio o simplemente para uso diario."
    },
    {
      id: "13",
      nombre: "Set de maquillaje profesional",
      descripcion: "Kit completo de maquillaje con una variedad de tonos y productos de alta calidad, perfecto para crear looks profesionales."
    },
    {
      id: "14",
      nombre: "Teclado mecánico para gaming",
      descripcion: "Teclado diseñado especialmente para gaming, con interruptores mecánicos y retroiluminación RGB para una experiencia de juego inmersiva."
    },
    {
      id: "15",
      nombre: "Colchón ortopédico de espuma viscoelástica",
      descripcion: "Colchón ergonómico con espuma viscoelástica que se adapta al cuerpo, proporciona un descanso óptimo y alivia la presión en puntos clave."
    },
    {
      id: "16",
      nombre: "Cepillo de dientes eléctrico recargable",
      descripcion: "Cepillo de dientes con tecnología sónica y cabezales intercambiables, garantiza una limpieza profunda y efectiva de los dientes y encías."
    },
    {
      id: "17",
      nombre: "Reloj inteligente con monitor de actividad",
      descripcion: "Reloj inteligente con pantalla táctil a color y monitor de actividad integrado, registra tus pasos, ritmo cardíaco y calidad del sueño."
    },
    {
      id: "18",
      nombre: "Tabla de cortar de bambú",
      descripcion: "Tabla de cortar ecológica y resistente, fabricada con bambú natural, ideal para preparar alimentos de forma segura y sostenible."
    },
    {
      id: "19",
      nombre: "Juego de toallas de algodón orgánico",
      descripcion: "Set de toallas suaves y absorbentes, elaboradas con algodón orgánico de alta calidad, perfectas para el baño o la playa."
    },
    {
      id: "20",
      nombre: "Termo de acero inoxidable",
      descripcion: "Termo de doble pared con aislamiento al vacío, mantiene las bebidas calientes o frías durante horas, perfecto para llevar café o agua."
    }
  ]

  // pagionacion de la data
  const { paginacion } = useContext(GlobalContext);
  console.log(paginacion)

  let filteredData = data;
  const selectPagination = () => {
    switch (paginacion) {
      case '5':
        filteredData = filteredData.slice(0, 5)
        break;
      case '10':
        filteredData = filteredData.slice(0, 10)
        break;
      case '15':
        filteredData = filteredData.slice(0, 15)
        break;
      case '20':
        filteredData = filteredData.slice(0, 20)
        break;
    
      default:
        filteredData
        break;
    }
  }

  selectPagination();
  
  // data filtrada
  const { buscador } = useContext(GlobalContext);
  
  const dataFiltrada = filteredData.filter(item => (item.id.includes(buscador.toLowerCase())) || (item.nombre.toLowerCase().includes(buscador.toLowerCase())) || (item.descripcion.toLowerCase().includes(buscador.toLowerCase())));

  return (
    <div className='w-scrren p-12 flex justify-center items-center flex-col max-w-[1000px] m-auto gap-8'>
      <h1 className='text-3xl uppercase font-bold'>Buscador!</h1>
      <div className='w-full flex justify-center items-center gap-8'>
        <Buscador/>
        <Paginacion/>
      </div>

      <Tabla data={dataFiltrada}/>
      <div className='w-full flex justify-center items-center'>
        <p>{paginacion} de 20</p>
      </div>
    </div>
  )
}

export default App
