import React, { useState } from 'react';
import './Carrito.css';

interface Producto {
  id: number;
  nombre: string;
  precio: number;
}

const productos: Producto[] = [
    { id: 1, nombre: 'Producto 1', precio: 0.0 },
    { id: 2, nombre: 'Producto 2', precio: 0.0 },
    { id: 3, nombre: 'Producto 3', precio: 0.0 },
    { id: 4, nombre: 'Producto 4', precio: 0.0 },
  ];

const CarritoDeCompras = () => {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [total, setTotal] = useState(0);

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.precio);
  };

  const eliminarDelCarrito = (id: number) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    setTotal(nuevoCarrito.reduce((acc, producto) => acc + producto.precio, 0));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#046cdb] mb-4">Carrito de Compras</h1>
      <div className="flex flex-wrap justify-center mb-4">
        {productos.map((producto) => (
          <div key={producto.id} className="bg-white shadow-md rounded p-4 w-48 m-4">
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h2 className="text-lg font-bold mb-2">{producto.nombre}</h2>
            <p className="text-lg font-bold text-[#046cdb] mb-4">${producto.precio}</p>
            <button
              className="bg-[#046cdb] hover:bg-[#034ea2] text-white font-bold py-2 px-4 rounded"
              onClick={() => agregarAlCarrito(producto)}
            >
              Agregar al Carrito
            </button>
          </div>
        ))}
      </div>
      <h2 className="text-2xl font-bold text-[#046cdb] mb-4">Carrito</h2>
      <ul>
        {carrito.map((producto) => (
          <li key={producto.id} className="flex justify-between mb-2">
            <span>{producto.nombre}</span>
            <span>${producto.precio}</span>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={() => eliminarDelCarrito(producto.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
      <p className="text-lg font-bold text-[#046cdb] mb-4">Total: ${total}</p>
    </div>
  );
};

export default CarritoDeCompras;