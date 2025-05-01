import { useEffect, useState } from "react";

function Home() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    function recibirProductos(event) {
      if (event.data?.productosRegistrados) {
        setProductos(event.data.productosRegistrados);
      }
    }
    window.addEventListener("message", recibirProductos);
    return () => window.removeEventListener("message", recibirProductos);
  }, []);

  return (
    <div className="container py-4">
      <h2>Productos Destacados</h2>
      <div className="row">
        {productos.map((producto, index) => (
          <div key={index} className="card col-md-4 mb-3">
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title">{producto.nombre}</h5>
              <p className="card-text">Sección: {producto.seccion}</p>
              <p className="card-text">Precio: ${producto.precio.toFixed(2)}</p>
              <p className="card-text">Stock: {producto.stock}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
