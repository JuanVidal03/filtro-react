// contexto del buscador
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

const Buscador = () => {

    const { setBuscador } = useContext(GlobalContext);

    return (
        <div>
            <input
            className="border p-2 w-[300px]"
            onChange={(e) => setBuscador(e.target.value)}
            type="text"
            placeholder="Bucar..."
            />
        </div>
    );
}

export default Buscador;