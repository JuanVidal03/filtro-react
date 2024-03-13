// contexto del buscador
import { useContext } from "react";
import { InputContext } from "../context/InputContext";

const Buscador = () => {

    const { setBuscador } = useContext(InputContext);

    return (
        <div>
            <input
            className="border"
            onChange={(e) => setBuscador(e.target.value)}
            type="text"
            placeholder="Bucar..."
            />
        </div>
    );
}

export default Buscador;