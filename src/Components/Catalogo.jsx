import React from "react";
import '../App.css'
import { RiDeleteBinLine } from "react-icons/ri";
import Audifono from './img/Audifono.png'
import Micro from './img/microfono.png'
import Mouse from './img/Mouse.png'
import Tecla from './img/Teclado.png'

export function Catalogo({ productos, eliminarProducto }) {
  const handleEliminar = (id) => {
    eliminarProducto(id);
  };
  return (
    <div className="catalogo">
      {productos.map((producto, index) => (
        <div className="card mt-5 card-custom" key={index}>
          <div className="card-body">
            <h3 className="card-title">{producto.nombre}</h3>
            <br />
            <p className="card-text">Tipo de Producto: {producto.tipo}</p>
            <p className="card-text">Precio: ${producto.precio}</p>
            <p className="card-text">Descripción: {producto.descripcion}</p>
            {producto.tipo === 'Audifono' && (
              <img src={Audifono} className="card-img-top mb-2 -img" alt="Audífono"  />
            )}
            {producto.tipo === 'Teclado' && (
              <img src={Tecla} className="card-img-top mb-2 -img" alt="Teclado"  />
            )}
            {producto.tipo === 'Microfono' && (
              <img src={Micro} className="card-img-top mb-2 -img" alt="Microfono"  />
            )}
            {producto.tipo === 'Mouse' && (
              <img src={Mouse} className="card-img-top mb-2 -img-M" alt="Mouse" />
            )}
            <button
              className="card-footer btn btn-eliminar"
              onClick={() => handleEliminar(producto.id)}
            >
              <RiDeleteBinLine />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}



























































