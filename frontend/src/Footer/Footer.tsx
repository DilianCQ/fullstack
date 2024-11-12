import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
        <ul className="footer-menu">
          <li className="footer-item"><a href="#privacy">Privacy Policy</a></li>
          <li className="footer-item"><a href="#terms">Terms of Service</a></li>
          <li className="footer-item"><a href="#contact">Contact Us</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
