import React, { useEffect, useState } from "react";
import "./Carrito.css";
import Axios from "axios";
import { useNavigate } from "react-router-dom";

interface Producto {
  id: number;
  nombre: string;
  valor: number;
}

const CarritoDeCompras = () => {
  const [carrito, setCarrito] = useState<Producto[]>([]);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<Producto[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((res) => {
      if (res.data.length)
        setData(
          res.data.map((res: any) => ({
            ...res,
            valor: +res.valor,
          }))
        );
    });
  };

  const routeToHome = () => {
    navigate("/");
  };

  const addCar = () => {
    Axios.post(
      "http://localhost:3001/carrito",
      carrito.map((prod) => ({ ...prod, id_producto: prod.id }))
    ).then(() => {
      alert("Productos agregados al carrito");
      routeToHome();
    });
  };

  const agregarAlCarrito = (producto: Producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.valor);
  };

  const eliminarDelCarrito = (id: number) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    setCarrito(nuevoCarrito);
    setTotal(nuevoCarrito.reduce((acc, producto) => acc + producto.valor, 0));
  };

  return (
    <div className="carrito max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold text-[#046cdb] mb-4">
        Carrito de Compras
      </h1>
      <div className="flex flex-wrap justify-center mb-4">
        {data.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded p-4 w-48 m-4"
          >
            <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mb-4" />
            <h2 className="text-lg font-bold mb-2">{producto.nombre}</h2>
            <p className="text-lg font-bold text-[#046cdb] mb-4">
              ${producto.valor}
            </p>
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
            <span>${producto.valor}</span>
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
      <button
        type="button"
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={addCar}
      >
        Comprar
      </button>
    </div>
  );
};

export default CarritoDeCompras;
