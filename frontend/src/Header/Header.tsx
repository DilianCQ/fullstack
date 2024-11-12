import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="public/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Inicio</a></li>
          <li className="navbar-item"><a href="#about">Carrito</a></li>
          <li className="navbar-item"><a href="#services">Servicios</a></li>
          <li className="navbar-item"><a href="#contact">Contactenos</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
