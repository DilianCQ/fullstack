import Axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const navigate = useNavigate();

  const handleNavigation = (id: number) => {
    navigate(`/create-product/${id}`);
  };

  const getProducts = () => {
    Axios.get("http://localhost:3001/products").then((res) => {
      if (res.data.length) setData(res.data);
    });
  };

  const handleDelete = (id: number) => {
    Axios.delete(`http://localhost:3001/product/${id}`).then((res) => {
      getProducts();
    });
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Codigo</th>
            <th>Inventario</th>
            <th>Marca</th>
            <th>Valor</th>
            <th>Estado</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {data.map((product) => (
            <tr key={product["id"]}>
              <td>{product["nombre"]}</td>
              <td>{product["codigo"]}</td>
              <td>{product["inventario"]}</td>
              <td>{product["marca"]}</td>
              <td>{product["valor"]}</td>
              <td>{product["estado"] == 1 ? "Activo" : "Inactivo"}</td>
              <td>
                <button
                  type="button"
                  onClick={() => handleNavigation(product["id"])}
                >
                  Editar
                </button>
                <button
                  type="button"
                  onClick={() => handleDelete(product["id"])}
                >
                  Borrar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;
