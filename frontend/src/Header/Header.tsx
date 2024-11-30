import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header() {
  const navigate = useNavigate();

  const handleNavigation = (route: string) => {
    navigate(route);
  };

  return (
    <header className="header">
      <div className="logo">
        <img src="./public/img/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item">
            <a onClick={() => handleNavigation("/")}>Inicio</a>
          </li>
          <li className="navbar-item">
            <a onClick={() => handleNavigation("/create-product")}>
              Crear producto
            </a>
          </li>
          <li className="navbar-item">
            <a href="#services" onClick={() => handleNavigation("/carrito")}>
              Carrito
            </a>
          </li>
          <li className="navbar-item">
            <a href="#contact">Contactenos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
