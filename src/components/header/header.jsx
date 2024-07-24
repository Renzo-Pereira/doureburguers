import { useEffect } from "react";
import Logo from "../../assets/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");
    const abrir = document.querySelector("#abrir");
    const cerrar = document.querySelector("#cerrar");

    if (abrir) {
      abrir.addEventListener("click", () => {
        nav.classList.add("visible");
      });
    }

    if (cerrar) {
      cerrar.addEventListener("click", () => {
        nav.classList.remove("visible");
      });
    }
  });

  return (
    <header>
      <img src={Logo} alt="logo" />
      <button id="abrir" className="abrir-menu">
        <i className="bi bi-list"></i>
      </button>
      <nav id="nav" className="nav">
        <button id="cerrar" className="cerrar-menu">
          <i className="bi bi-x-lg"></i>
        </button>
        <ul>
          <li><Link to={"/"}>Inicio</Link></li>
          <li><Link to={"/"}>Pedí!</Link></li>
          <li><Link to={"/"}>Promos</Link></li>
          <li><Link to={"/productos"}>Menu</Link></li>
          <li><Link to={"/"}>Contacto</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
