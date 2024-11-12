import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src="../../img/logo.png" alt="Logo" width="50" height="50" />
      </div>
      <nav className="navbar">
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#home">Home</a></li>
          <li className="navbar-item"><a href="#about">About</a></li>
          <li className="navbar-item"><a href="#services">Services</a></li>
          <li className="navbar-item"><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
