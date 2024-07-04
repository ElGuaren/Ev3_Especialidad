import React, { useState } from "react";

export function BarraBusqueda({ buscarProductos }) {
  const [terminoBusqueda, setTerminoBusqueda] = useState("");

  const handleChange = (e) => {
    const valorBusqueda = e.target.value;
    setTerminoBusqueda(valorBusqueda);
    buscarProductos(valorBusqueda);
  };

  return (
    <div className="mt-4 barra">
      <h2 className="text-center mt-4 cata">Catálogo de Productos</h2>
      <h2>Buscar Productos:<h5>(Por nombre o tipo)</h5></h2>
  
      <input type="text" className="form-control" value={terminoBusqueda} onChange={handleChange} placeholder="Buscar productos..." />
    </div>
  );
}

