import { useContext } from "react";
import { DataContext } from "../Contexts/dataContext";

const Carrito = () => {
  const { productos, setProductos } = useContext(DataContext)

  return (
    <div>
      <h1>Carrito</h1>
      {productos.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        productos.map((id, index) => (
          <p key={index}>Producto ID: {id}</p>
        ))
      )}
    </div>
  );
};

export default Carrito;
