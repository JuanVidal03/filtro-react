
const Tabla = ({ data }) => {

    return (
        <table className="border">
            <thead>
                <tr>
                    <th className="border p-4 uppercase bg-blue-500 text-white w-[10%]">ID</th>
                    <th className="border p-4 uppercase bg-blue-500 text-white w-[20%]">Nombre</th>
                    <th className="border p-4 uppercase bg-blue-500 text-white w-[70%]">Descripcion</th>
                </tr>
            </thead>
            <tbody>
                {
                    data?.map(product => (
                        <tr key={product.id}>
                            <td className="border p-4 text-center">{product.id}</td>
                            <td className="border p-4 text-center">{product.nombre}</td>
                            <td className="border p-4">{product.descripcion}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default Tabla;
