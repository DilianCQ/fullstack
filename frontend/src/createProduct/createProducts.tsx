import { useEffect, useState } from "react";
import Axios from "axios";

import "./createProduct.css";
import { useNavigate, useParams } from "react-router-dom";

function CreateProducts() {
  const [nombre, setNombre] = useState("");
  const [codigo, setCodigo] = useState("");
  const [inventario, setInventario] = useState(0);
  const [marca, setMarca] = useState("");
  const [valor, setValor] = useState(0);

  const { id } = useParams();

  const navigate = useNavigate();

  const routeToHome = () => {
    navigate("/");
  };

  const add = () => {
    if (id) {
      Axios.patch(`http://localhost:3001/product/${id}`, {
        nombre,
        codigo,
        inventario,
        marca,
        valor,
      }).then(() => {
        alert("prodcuto Actualizado");
        routeToHome();
      });
      return;
    }
    Axios.post("http://localhost:3001/create", {
      nombre,
      codigo,
      inventario,
      marca,
      valor,
    }).then(() => {
      alert("prodcuto Creado");
    });
  };

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    Axios.get(`http://localhost:3001/product/${id}`)
      .then((res) => {
        setNombre(res.data["nombre"]);
        setCodigo(res.data["codigo"]);
        setInventario(res.data["inventario"]);
        setMarca(res.data["marca"]);
        setValor(res.data["valor"]);

        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="datos">
      <label>
        Nombre:{" "}
        <input
          value={nombre}
          onChange={(event) => {
            setNombre(event.target.value);
          }}
          type="text"
        ></input>
      </label>
      <label>
        Codigo:{" "}
        <input
          value={codigo}
          onChange={(event) => {
            setCodigo(event.target.value);
          }}
          type="text"
        ></input>
      </label>
      <label>
        Inventario:
        <input
          value={inventario}
          onChange={(event) => {
            setInventario(+event.target.value);
          }}
          type="number"
        />
      </label>
      <label>
        Marca:{" "}
        <input
          value={marca}
          onChange={(event) => {
            setMarca(event.target.value);
          }}
          type="text"
        ></input>
      </label>
      <label>
        Valor:{" "}
        <input
          value={valor}
          onChange={(event) => {
            setValor(+event.target.value);
          }}
          type="number"
        ></input>
      </label>
      <button onClick={add}>{id ? "Editar" : "Crear"}</button>
    </div>
  );
}

export default CreateProducts;
