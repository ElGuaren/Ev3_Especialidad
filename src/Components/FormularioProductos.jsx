import React, { useState } from "react";

export function FormularioProductos({ guardarProducto }) {
  const [nombre, setNombre] = useState("");
  const [tipo, settipo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [precio, setPrecio] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nombre.trim() === "") {
      setError("El nombre del producto es obligatorio.");
      return;
    }

    if (isNaN(parseFloat(precio))) {
      setError("El precio debe ser un número válido.");
      return;
    }
    if (descripcion.length > 80) {
      setError("La descripción no puede exceder los 80 caracteres.");
      return;
    }

    const producto = {
      nombre,
      tipo,
      descripcion,
      precio,
    };

    guardarProducto(producto);

    setNombre("");
    settipo("");
    setDescripcion("");
    setPrecio("");
    window.alert("¡El producto se agrego correctamente!");
    setError("");
  };

  return (
    <div className="form">
      <h2 className="text-center mt-4">Formulario de Producto</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">
            <h2>Nombre del producto:</h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Nombre del producto..."
          />
          {error && !nombre && <p className="text-danger">El nombre del producto es obligatorio.</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Tipo de producto:</h2>
          </label>
          <select
            className="form-select"
            value={tipo}
            onChange={(e) => settipo(e.target.value)}
            required
          >
            <option disabled value=''>Seleccionar tipo de producto</option>
            <option value="Mouse"> Mouse</option>
            <option value="Audifono"> Audifono</option>
            <option value="Teclado"> Teclado</option>
            <option value="Microfono"> Microfono</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Descripción: </h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            placeholder="Descripción..."
          />
          {descripcion.length > 80 && <p className="text-danger">La descripción no puede exceder los 80 caracteres.</p>}
        </div>
        <div className="mb-3">
          <label className="form-label">
            <h2>Precio:</h2>
          </label>
          <input
            type="text"
            className="form-control"
            value={precio}
            onChange={(e) => setPrecio(e.target.value)}
            placeholder="Ej: 5000"
          />
          {error && isNaN(parseFloat(precio)) && (
            <p className="text-danger">El precio debe ser un número válido.</p>
          )}
        </div>
        
        <button className="btn btn-enviar">
          <i className="bi bi-check-circle"></i> Enviar formulario
        </button>
      </form>
    </div>
  );
}
















































