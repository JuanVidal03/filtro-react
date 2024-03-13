// contexto para actualizar el filtro
import { GlobalContext } from "../context/GlobalContext.jsx";
// dependecias
import { useContext } from "react";

const Paginacion = () => {

    const { paginacion, setPaginacion } = useContext(GlobalContext);
    
    const handleChange = (e) => {
        setPaginacion(e.target.value);
    }

    return (
        <select className="border p-2 w-[200px]" onChange={handleChange}>
            <option value="pag">Paginación</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </select>
    );
}

export default Paginacion;